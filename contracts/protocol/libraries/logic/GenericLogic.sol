// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;
pragma experimental ABIEncoderV2;

import {SafeMath} from '../../../dependencies/openzeppelin/contracts/SafeMath.sol';
import {IERC20} from '../../../dependencies/openzeppelin/contracts/IERC20.sol';
import {ReserveLogic} from './ReserveLogic.sol';
import {ReserveConfiguration} from '../configuration/ReserveConfiguration.sol';
import {UserConfiguration} from '../configuration/UserConfiguration.sol';
import {WadRayMath} from '../math/WadRayMath.sol';
import {PercentageMath} from '../math/PercentageMath.sol';
import {IPriceOracleGetter} from '../../../interfaces/IPriceOracleGetter.sol';
import {DataTypes} from '../types/DataTypes.sol';

/**
 * @title GenericLogic library
 * @author Aave
 * @title Implements protocol-level logic to calculate and validate the state of a user
 */
library GenericLogic {
  using ReserveLogic for DataTypes.ReserveData;
  using SafeMath for uint256;
  using WadRayMath for uint256;
  using PercentageMath for uint256;
  using ReserveConfiguration for DataTypes.ReserveConfigurationMap;
  using UserConfiguration for DataTypes.UserConfigurationMap;

  uint256 public constant HEALTH_FACTOR_LIQUIDATION_THRESHOLD = 1 ether;

  struct balanceDecreaseAllowedLocalVars {
    uint256 decimals;
    uint256 liquidationThreshold;
    uint256 totalCollateralInETH;
    uint256 totalDebtInETH;
    uint256 avgLiquidationThreshold;
    uint256 amountToDecreaseInETH;
    uint256 collateralBalanceAfterDecrease;
    uint256 liquidationThresholdAfterDecrease;
    uint256 healthFactorAfterDecrease;
    bool reserveUsageAsCollateralEnabled;
  }

  /**
   * @dev Checks if a specific balance decrease is allowed
   * (i.e. doesn't bring the user borrow position health factor under HEALTH_FACTOR_LIQUIDATION_THRESHOLD)
   * @param asset The address of the underlying asset of the reserve
   * @param user The address of the user
   * @param amount The amount to decrease
   * @param reservesData The data of all the reserves
   * @param userConfig The user configuration
   * @param reserves The list of all the active reserves
   * @param oracle The address of the oracle contract
   * @return true if the decrease of the balance is allowed
   **/
  function balanceDecreaseAllowed(
    address asset,
    address user,
    uint256 amount,
    mapping(address => DataTypes.ReserveData) storage reservesData,
    DataTypes.UserConfigurationMap calldata userConfig,
    mapping(uint256 => address) storage reserves,
    uint256 reservesCount,
    address oracle
  ) external view returns (bool) {
    //判断用户是否存在抵押 没有直接返回
    if (!userConfig.isBorrowingAny() || !userConfig.isUsingAsCollateral(reservesData[asset].id)) {
      return true;
    }

    balanceDecreaseAllowedLocalVars memory vars;
    //获得这个清算阈值 和 精度
    (, vars.liquidationThreshold, , vars.decimals, ) = reservesData[asset]
      .configuration
      .getParams();

    if (vars.liquidationThreshold == 0) {
      return true;
    }
    //计算用户的数据 资产负债等
    (
      vars.totalCollateralInETH, //抵押余额
      vars.totalDebtInETH, //负债总额
      ,
      vars.avgLiquidationThreshold, //平均清算阈值

    ) = calculateUserAccountData(user, reservesData, userConfig, reserves, reservesCount, oracle);

    if (vars.totalDebtInETH == 0) {
      return true;
    }

    vars.amountToDecreaseInETH = IPriceOracleGetter(oracle).getAssetPrice(asset).mul(amount).div(
      10 ** vars.decimals
    );

    vars.collateralBalanceAfterDecrease = vars.totalCollateralInETH.sub(vars.amountToDecreaseInETH);

    //if there is a borrow, there can't be 0 collateral
    if (vars.collateralBalanceAfterDecrease == 0) {
      return false;
    }

    vars.liquidationThresholdAfterDecrease = vars
      .totalCollateralInETH
      .mul(vars.avgLiquidationThreshold)
      .sub(vars.amountToDecreaseInETH.mul(vars.liquidationThreshold))
      .div(vars.collateralBalanceAfterDecrease);

    uint256 healthFactorAfterDecrease = calculateHealthFactorFromBalances(
      vars.collateralBalanceAfterDecrease,
      vars.totalDebtInETH,
      vars.liquidationThresholdAfterDecrease
    );

    return healthFactorAfterDecrease >= GenericLogic.HEALTH_FACTOR_LIQUIDATION_THRESHOLD;
  }

  struct CalculateUserAccountDataVars {
    uint256 reserveUnitPrice;
    uint256 tokenUnit;
    uint256 compoundedLiquidityBalance;
    uint256 compoundedBorrowBalance;
    uint256 decimals;
    uint256 ltv;
    uint256 liquidationThreshold;
    uint256 i;
    uint256 healthFactor;
    uint256 totalCollateralInETH;
    uint256 totalDebtInETH;
    uint256 avgLtv;
    uint256 avgLiquidationThreshold;
    uint256 reservesLength;
    bool healthFactorBelowThreshold;
    address currentReserveAddress;
    bool usageAsCollateralEnabled;
    bool userUsesReserveAsCollateral;
  }

  /**
   * @dev计算用户数据。
   *这包括ETH的总流动性/抵押品/借款余额，
   *平均贷款价值比、平均清盘比率和健康因素。
   * @param user用户地址
   * @param reservesData所有预留的数据
   * @param userConfig用户配置
   * @param reserves可用的预留列表
   * @param oracle价格oracle地址
   * @return用户在ETH中的抵押品总额和债务总额，平均ltv，清算阈值和健康因子
   **/
  function calculateUserAccountData(
    address user,
    mapping(address => DataTypes.ReserveData) storage reservesData,
    DataTypes.UserConfigurationMap memory userConfig,
    mapping(uint256 => address) storage reserves,
    uint256 reservesCount,
    address oracle
  ) internal view returns (uint256, uint256, uint256, uint256, uint256) {
    CalculateUserAccountDataVars memory vars;

    if (userConfig.isEmpty()) {
      return (0, 0, 0, 0, uint256(-1));
    }
    //计算用户资产与负债 就是将所有的支持的token遍历一遍
    for (vars.i = 0; vars.i < reservesCount; vars.i++) {
      //判断用户是否抵押或者借款
      if (!userConfig.isUsingAsCollateralOrBorrowing(vars.i)) {
        continue;
      }

      vars.currentReserveAddress = reserves[vars.i];
      DataTypes.ReserveData storage currentReserve = reservesData[vars.currentReserveAddress];
      //获取当前token的信息 质押比率 清算阈值 价格(对于ETH) 精度 等等
      (vars.ltv, vars.liquidationThreshold, , vars.decimals, ) = currentReserve
        .configuration
        .getParams();

      vars.tokenUnit = 10 ** vars.decimals;
      //获取价格
      vars.reserveUnitPrice = IPriceOracleGetter(oracle).getAssetPrice(vars.currentReserveAddress);
      //判断用户是否将他抵押
      if (vars.liquidationThreshold != 0 && userConfig.isUsingAsCollateral(vars.i)) {
        //计算用户持有的该资产数量
        vars.compoundedLiquidityBalance = IERC20(currentReserve.aTokenAddress).balanceOf(user);
        //计算该资产的价值对于eth
        uint256 liquidityBalanceETH = vars
          .reserveUnitPrice
          .mul(vars.compoundedLiquidityBalance)
          .div(vars.tokenUnit);
        //计算 总的供应资产 方便后面计算平均质押率
        vars.totalCollateralInETH = vars.totalCollateralInETH.add(liquidityBalanceETH);
        //质押率 供应资产*质押率=实际可以用于借贷的资产 也就是可以借出的资产
        vars.avgLtv = vars.avgLtv.add(liquidityBalanceETH.mul(vars.ltv));
        //清算阈值 累计每个资产的 供应资产*清算阈值 计算供应的清算阈值
        vars.avgLiquidationThreshold = vars.avgLiquidationThreshold.add(
          liquidityBalanceETH.mul(vars.liquidationThreshold)
        );
      }
      //判断是否存在借款
      if (userConfig.isBorrowing(vars.i)) {
        //获取稳定借贷金额
        vars.compoundedBorrowBalance = IERC20(currentReserve.stableDebtTokenAddress).balanceOf(
          user
        );
        //获取浮动借贷金额
        vars.compoundedBorrowBalance = vars.compoundedBorrowBalance.add(
          IERC20(currentReserve.variableDebtTokenAddress).balanceOf(user)
        );
        //计算总的借贷金额 对于ETH
        vars.totalDebtInETH = vars.totalDebtInETH.add(
          vars.reserveUnitPrice.mul(vars.compoundedBorrowBalance).div(vars.tokenUnit)
        );
      }
    }
    //计算出平均质押率
    vars.avgLtv = vars.totalCollateralInETH > 0 ? vars.avgLtv.div(vars.totalCollateralInETH) : 0;
    //计算出平均清算阈值
    vars.avgLiquidationThreshold = vars.totalCollateralInETH > 0
      ? vars.avgLiquidationThreshold.div(vars.totalCollateralInETH)
      : 0;
    //计算健康因子     //健康因子 = 总质押/总负债*平均清算阈值
    vars.healthFactor = calculateHealthFactorFromBalances(
      vars.totalCollateralInETH,
      vars.totalDebtInETH,
      vars.avgLiquidationThreshold
    );
    return (
      vars.totalCollateralInETH,
      vars.totalDebtInETH,
      vars.avgLtv,
      vars.avgLiquidationThreshold,
      vars.healthFactor
    );
  }

  /**
   * @dev根据相应的余额计算健康系数
   * @param totalCollateralInETH ETH的总抵押品
   * @param totalDebtInETH ETH的总负债
   * @param liquidationThreshold 平均清算阈值
   * @return根据提供的余额计算的运行状况因子
   **/
  function calculateHealthFactorFromBalances(
    uint256 totalCollateralInETH,
    uint256 totalDebtInETH,
    uint256 liquidationThreshold
  ) internal pure returns (uint256) {
    if (totalDebtInETH == 0) return uint256(-1);
    //健康因子 = 总质押/总负债*平均清算阈值
    return (totalCollateralInETH.percentMul(liquidationThreshold)).wadDiv(totalDebtInETH);
  }

  /**
   * @dev Calculates the equivalent amount in ETH that an user can borrow, depending on the available collateral and the
   * average Loan To Value
   * @param totalCollateralInETH The total collateral in ETH
   * @param totalDebtInETH The total borrow balance
   * @param ltv The average loan to value
   * @return the amount available to borrow in ETH for the user
   **/

  function calculateAvailableBorrowsETH(
    uint256 totalCollateralInETH,
    uint256 totalDebtInETH,
    uint256 ltv
  ) internal pure returns (uint256) {
    uint256 availableBorrowsETH = totalCollateralInETH.percentMul(ltv);

    if (availableBorrowsETH < totalDebtInETH) {
      return 0;
    }

    availableBorrowsETH = availableBorrowsETH.sub(totalDebtInETH);
    return availableBorrowsETH;
  }
}

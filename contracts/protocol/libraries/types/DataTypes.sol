// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;

library DataTypes {
  // refer to the whitepaper, section 1.1 basic concepts for a formal description of these properties.
  struct ReserveData {
    //stores the reserve configuration
    ReserveConfigurationMap configuration;
    //流动性指数
    uint128 liquidityIndex;
    //浮动利率指数
    uint128 variableBorrowIndex;
    //当前流动性利率
    uint128 currentLiquidityRate;
    //当前可变利率
    uint128 currentVariableBorrowRate;
    //当前稳定借贷利率
    uint128 currentStableBorrowRate;
    //上一次更新时间
    uint40 lastUpdateTimestamp;
    //tokens addresses
    address aTokenAddress;
    address stableDebtTokenAddress;
    address variableDebtTokenAddress;
    //利率策略存储地址
    address interestRateStrategyAddress;
    //存储位置
    uint8 id;
  }

  struct ReserveConfigurationMap {
    //bit 0-15: LTV
    //bit 16-31: Liq. threshold
    //bit 32-47: Liq. bonus
    //bit 48-55: Decimals
    //bit 56: Reserve is active
    //bit 57: reserve is frozen
    //bit 58: borrowing is enabled
    //bit 59: stable rate borrowing enabled
    //bit 60-63: reserved
    //bit 64-79: reserve factor
    uint256 data;
  }

  struct UserConfigurationMap {
    //使用位图的方式，用两位来表示一个币种是否借入和抵押，01表示false/true
    //UserConfiguration中有对应方法
    uint256 data;
  }

  enum InterestRateMode {
    NONE,
    STABLE,
    VARIABLE
  }
}

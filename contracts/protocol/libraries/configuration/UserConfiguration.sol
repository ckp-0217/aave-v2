// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;

import {Errors} from '../helpers/Errors.sol';
import {DataTypes} from '../types/DataTypes.sol';

/**
 * @title UserConfiguration library
 * @author Aave
 * @notice Implements the bitmap logic to handle the user configuration
 */
library UserConfiguration {
  uint256 internal constant BORROWING_MASK =
    0x5555555555555555555555555555555555555555555555555555555555555555;

  /**
   * @dev设置用户是否借用由reserveIndex标识的预留
   * @param self配置对象
   * @param reserveIndex位图中的预留索引
   * @param borrowing如果用户正在借用准备金，则为True，否则为false
   **/
  function setBorrowing(
    DataTypes.UserConfigurationMap storage self,
    uint256 reserveIndex,
    bool borrowing
  ) internal {
    require(reserveIndex < 128, Errors.UL_INVALID_INDEX);
    self.data =
      (self.data & ~(1 << (reserveIndex * 2))) |
      (uint256(borrowing ? 1 : 0) << (reserveIndex * 2));
  }

  /**
   * @dev设置用户是否使用reserveIndex标识的储备作为抵押品
   * @param self配置对象
   * @param reserveIndex位图中的预留索引
   * @param usingAsCollateral如果用户使用准备金作为抵押品，则为True，否则为false
   **/
  function setUsingAsCollateral(
    DataTypes.UserConfigurationMap storage self,
    uint256 reserveIndex,
    bool usingAsCollateral
  ) internal {
    require(reserveIndex < 128, Errors.UL_INVALID_INDEX);
    self.data =
      (self.data & ~(1 << (reserveIndex * 2 + 1))) |
      (uint256(usingAsCollateral ? 1 : 0) << (reserveIndex * 2 + 1));
  }

  /**
   * @dev用于验证用户是否将准备金用于借款或作为抵押品
   * @param self配置对象
   * @param reserveIndex位图中的预留索引
   * @return如果用户一直使用准备金借款或作为抵押品，则为True，否则为false
   **/
  function isUsingAsCollateralOrBorrowing(
    DataTypes.UserConfigurationMap memory self,
    uint256 reserveIndex
  ) internal pure returns (bool) {
    require(reserveIndex < 128, Errors.UL_INVALID_INDEX);
    return (self.data >> (reserveIndex * 2)) & 3 != 0;
  }

  /**
   * @dev用于验证用户是否使用了借阅预留
   * @param self配置对象
   * @param reserveIndex位图中的预留索引
   * @return如果用户一直在使用准备金借款，则为True，否则为false
   **/
  function isBorrowing(
    DataTypes.UserConfigurationMap memory self,
    uint256 reserveIndex
  ) internal pure returns (bool) {
    require(reserveIndex < 128, Errors.UL_INVALID_INDEX);
    return (self.data >> (reserveIndex * 2)) & 1 != 0;
  }

  /**
   * @dev用于验证用户是否使用储备作为抵押品
   * @param self配置对象
   * @param reserveIndex位图中的预留索引
   * @return如果用户一直使用准备金作为抵押品，则为True，否则为false
   **/
  function isUsingAsCollateral(
    DataTypes.UserConfigurationMap memory self,
    uint256 reserveIndex
  ) internal pure returns (bool) {
    require(reserveIndex < 128, Errors.UL_INVALID_INDEX);
    return (self.data >> (reserveIndex * 2 + 1)) & 1 != 0;
  }

  /**
   * @dev用于验证用户是否从任何准备金借款
   * @param self配置对象
   * @return如果用户已经借出任何准备金，则为True，否则为false
   **/
  function isBorrowingAny(DataTypes.UserConfigurationMap memory self) internal pure returns (bool) {
    return self.data & BORROWING_MASK != 0;
  }

  /**
   * @dev用于验证用户是否没有使用任何预留
   * @param self配置对象
   * @return如果用户已经借出任何准备金，则为True，否则为false
   **/
  function isEmpty(DataTypes.UserConfigurationMap memory self) internal pure returns (bool) {
    return self.data == 0;
  }
}

/**
|--------------------------------------------------
| 你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。
由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。
假设你有 n 个版本 [1, 2, ..., n]，你想找出导致之后所有版本出错的第一个错误的版本。

输入：n = 5, bad = 4
输出：4
解释：
调用 isBadVersion(3) -> false 
调用 isBadVersion(5) -> true 
调用 isBadVersion(4) -> true
所以，4 是第一个错误的版本。

输入：n = 1, bad = 1
输出：1
通过调用 bool isBadVersion(version) 接口来判断版本号 version 是否在单元测试中出错
|--------------------------------------------------
*/
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 这种解法没问题 但是 时间超出限制
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 1,
      end = n;
    while (start + 1 < end) {
      // 循环直至区间左右端点相同
      // const mid = (start + end) >> 1; 这句话会导致超时 不可思议
      const mid = Math.floor((start + end) / 2);
      if (isBadVersion(mid)) {
        end = mid; // 答案在区间 [left, mid] 中
      } else {
        start = mid; // 答案在区间 [mid+1, right] 中
      }
    }

    // 此时有 left == right，区间缩为一个点，即为答案
    return isBadVersion(start) ? start : start + 1;
  };
};

//第二种方式
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 1,
      end = n;
    while (start < end) {
      // const mid = (start + end) >> 1; 这句话会导致超时 不可思议
      const mid = Math.floor((start + end) / 2);
      if (isBadVersion(mid)) end = mid;
      else start = mid + 1;
    }
    return isBadVersion(start) ? start : -1;
  };
};

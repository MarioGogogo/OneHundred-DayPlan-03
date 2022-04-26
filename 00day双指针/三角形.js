/**
|--------------------------------------------------
| 给定一个数组 再该数组中 寻找三个数 分别代表三角形三条边
  问可以多少组这样的三角形组合
  [4,3,6,7]  --- 3
|--------------------------------------------------
*/

const triangleCount = (s) => {
  // 边界条件;
  if (s == null || s.length < 3) return 0;
  //排序
  s.sort((a, b) => a - b);
  let count = 0;
  //遍历最大边 再最大边的左边寻找2个小边
  // 保证前面2个边最小 第三数开始
  for (let i = 2; i < s.length; i++) {
    count += getTriangleCount(s, i);
  }
  return count;
};

const getTriangleCount = (arr, targetIndex) => {
  let cnt = 0;
  //寻找【0 ， targetIndex-1】范围内的数
  let left = 0;
  let right = targetIndex - 1;
  let targetSum = arr[targetIndex];

  let sum = 0;

  while (left < right) {
    sum = arr[left] + arr[right];
    // sum 大于 target 可以组成三角形
    if (sum > targetSum) {
      // 一次求出多个可行解的个数   [1,1,2,3,5]
      cnt += right - left;
      // 计入右指针的所有可能 右指针向中间移动
      right--;
    } else {
      left++;
    }
  }
  return cnt;
};

console.log('triangleCount', triangleCount([4, 3, 6, 7]));
console.log('triangleCount', triangleCount([4, 4, 4, 4]));
console.log('triangleCount', triangleCount([3, 2, 1]));

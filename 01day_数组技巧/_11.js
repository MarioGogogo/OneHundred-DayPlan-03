/**
|--------------------------------------------------
| 接水通问题  区域中最大载水量
|--------------------------------------------------
*/
var maxArea = function (height) {
  let left = 0; //设置左指针
  let right = height.length - 1; //设置右指针
  let ans = 0;

  while (left < right) {
    //最大区域
    const area = Math.min(height[left], height[right]) * (right - left);
    console.log('%c 🍭 area: ', 'font-size:20px;background-color: #F5CE50;color:#fff;', area);
    ans = Math.max(ans, area);

    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return ans;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

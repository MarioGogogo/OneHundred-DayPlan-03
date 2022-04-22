/**
|--------------------------------------------------
|  有序数组找到整数target第一次出现的位置  算法 logk时间复杂度
例如
[1,3,6,8,12.。。]  t = 3
【1，3，6，7....】 t = 4  
返回下标   没有返回 -1

|--------------------------------------------------
*/
const reader = {
  get: () => {
    console.log('get');
  },
};

const searchBigSortedArray = (nums, target) => {
  let rangeTotal = 1;
  //不断倍增直到 找到 小于target停止 为什么rangeTotal - 1 因为下标0开始
  while (reader.get(rangeTotal - 1) < target) {
    rangeTotal = rangeTotal * 2;
  }

  //========这里就老套路二分⬇️======
  /**扩容方法中小优化🎉 就是start 可以是rangeTotal/2  */
  let start = 0,
    end = rangeTotal - 1;
  while (start + 1 < end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (rangeTotal[mid] < target) {
      start = mid;
    } else if (rangeTotal[mid] > target) {
      end = mid;
    } else {
      return mid;
    }
  }

  if (rangeTotal[start] === target) {
    return start;
  }
  if (rangeTotal[end] === target) {
    return end;
  }
  //========这里就老套路二分上======
  return -1;
};

// 时间复杂度 ologk  空间复杂度 o1

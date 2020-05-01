/*
 * @Author: FBB
 * @Date: 2020-05-01 16:01:39
 * @LastEditors: FBB
 * @LastEditTime: 2020-05-01 20:13:55
 * @Description: 二分查找，本次代码中都不包含重复数据
 *
 * 二分查找是针对一个有序的数据集合，查找思想类似于分治思想。
 * 每次都和数据中间值对比，将待查找的数据缩减一半，直到查到寻找元素或者区间被缩小为0。
 *
 * 二分查找局限性比较大
 * 1. 二分查找依赖顺序表结构，比如数组
 * 2. 只能够处理有序的数据
 * 3. 数量过大或者过小都不适合二分查找
 *
 * 二分查找的时间复杂度为O(nlogn)
 */

// 使用循环来实现
function BinarySearch(arr, k) {
  let high = arr.length - 1;
  let low = 0;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    /* 
     可以优化为  let mid =  Math.floor(low + (high - low) / 2);
     因为如果low和high比较大，low + high可能溢出。
     */
    if (arr[mid] === k) {
      return mid;
    } else if (arr[mid] > k) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

// 使用递归来实现
function BinarySearch2(arr, k) {
  return BinarySearchInternally(arr, 0, arr.length - 1, k);
}
function BinarySearchInternally(arr, low, high, k) {
  if (low > high) {
    return -1;
  }
  let mid = Math.floor(low + (high - low) / 2);
  if (arr[mid] === k) {
    return mid;
  } else if (arr[mid] > k) {
    return BinarySearchInternally(arr, low, mid - 1, k);
  } else {
    return BinarySearchInternally(arr, mid + 1, high, k);
  }
}

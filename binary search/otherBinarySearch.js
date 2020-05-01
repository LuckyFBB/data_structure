/*
 * @Author: FBB
 * @Date: 2020-05-01 20:03:05
 * @LastEditors: FBB
 * @LastEditTime: 2020-05-01 21:22:08
 * @Description: 二分查找的变形
 */

/* 
 查找第一个等于给定值的元素
 */

function biarySearchFindFirst(arr, k) {
  let high = arr.length - 1;
  let low = 0;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] > k) {
      high = mid - 1;
    } else if (arr[mid] < k) {
      low = mid + 1;
    } else {
      if (mid === 0 || arr[mid - 1] !== k) {
        return mid;
      }
      high = mid - 1;
    }
  }
  return -1;
}

/* 
 查找第一个等于给定值的元素
 */

function biarySearchFindLast(arr, k) {
  let high = arr.length - 1;
  let low = 0;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] > k) {
      high = mid - 1;
    } else if (arr[mid] < k) {
      low = mid + 1;
    } else {
      if (mid === arr.length - 1 || arr[mid + 1] !== k) {
        return mid;
      }
      low = mid + 1;
    }
  }
  return -1;
}

/* 
 查找第一个大于等于给定值的元素
 */

function biarySearchFindFirstBig(arr, k) {
  let high = arr.length - 1;
  let low = 0;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] >= k) {
      if (mid === 0 || arr[mid - 1] < k) {
        return mid;
      }
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

/* 
 查找第一个小于等于给定值的元素
 */
function biarySearchFindFirstSmall(arr, k) {
  let high = arr.length - 1;
  let low = 0;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] <= k) {
      if (mid === arr.length - 1 || arr[mid + 1] > k) {
        return mid;
      }
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

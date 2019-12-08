/*
 * @Author: FBB
 * @Date: 2019-02-14 14:51:23
 * @LastEditors: FBB
 * @LastEditTime: 2019-12-08 14:34:57
 * @Description: 归并排序
 */
function mergeSort(arr) {
  let len = arr.length;
  __mergeSort(arr, 0, len - 1);
  return arr;
}

function __mergeSort(arr, left, right) {
  if (left >= right) {
    return;
  }
  let mid = Math.floor((left + right) / 2);
  __mergeSort(arr, left, mid);
  __mergeSort(arr, mid + 1, right);
  if (arr[mid] > arr[mid + 1]) {
    __merge(arr, left, mid, right);
  }
}

function __merge(arr, left, mid, right) {
  let temp = [];
  for (let i = left; i <= right; i++) {
    temp[i - left] = arr[i];
  }
  let i = left,
    j = mid + 1;
  for (let k = left; k <= right; k++) {
    if (i > mid) {
      arr[k] = temp[j - left];
      j++;
    } else if (j > right) {
      arr[k] = temp[i - left];
      i++;
    } else if (temp[i - left] < temp[j - left]) {
      arr[k] = temp[i - left];
      i++;
    } else {
      arr[k] = temp[j - left];
      j++;
    }
  }
}

// 归并排序
function mergeSort2(arr) {
  const len = arr.length;
  if (len < 2) {
    return arr;
  }
  const mid = len / 2;
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return __merge2(mergeSort2(left), mergeSort2(right));
}

function __merge2(left, right) {
  let result = [];
  while (left.length && right.length) {
    //两个数组都还有值的时候
    if (left[0] > right[0]) {
      //right的最小值更小
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }
  while (left.length) {
    //right没有数据了
    result.push(left.shift());
  }
  while (right.length) {
    //left没有数据了
    result.push(right.shift());
  }
  return result;
}

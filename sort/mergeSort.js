/*
 * @Author: FBB
 * @Date: 2019-02-14 14:51:23
 * @LastEditors: FBB
 * @LastEditTime: 2019-12-07 17:12:11
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

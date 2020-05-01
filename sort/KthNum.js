/*
 * @Author: FBB
 * @Date: 2020-04-30 17:31:14
 * @LastEditors: FBB
 * @LastEditTime: 2020-05-01 15:56:25
 * @Description: 使用快排的思想来解决查找数据中第K大的数
 */

function getKthNum(arr, k) {
  let len = arr.length;
  if (k > len) {
    return -1;
  }
  let p = __partition(arr, 0, len - 1);
  while (p + 1 !== k) {
    if (p + 1 > k) {
      p = __partition(arr, 0, p - 1);
    } else {
      p = __partition(arr, p + 1, len - 1);
    }
  }
  return arr[p];
}

function __partition(arr, left, right) {
  //随机生成标准值
  let randomIndex = parseInt(Math.random() * (right - left + 1)) + left;
  //将标准值交换到第一位
  swap(arr, left, randomIndex);
  let standard = arr[left];
  //存储大于standard和小于standard的分割线
  let index = left;
  for (let i = left + 1; i <= right; i++) {
    if (arr[i] < standard) {
      swap(arr, i, index + 1);
      index++;
    }
  }
  swap(arr, left, index);
  return index;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
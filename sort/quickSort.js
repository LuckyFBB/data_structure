/*
 * @Author: FBB
 * @Date: 2019-02-14 14:51:24
 * @LastEditors: FBB
 * @LastEditTime: 2019-12-07 17:11:50
 * @Description: 快速排序
 */
function quickSort(arr) {
  let len = arr.length;
  __quickSortThreeWays(arr, 0, len - 1);
  return arr;
}

//对arr[left,right]部分进行快速排序
function __quickSort(arr, left, right) {
  if (left >= right) {
    return;
  }
  let index = __partition2(arr, left, right);
  __quickSort(arr, left, index - 1);
  __quickSort(arr, index + 1, right);
}

//对arr[left,right]部分进行partition操作
//返回一个索引值，使得arr[left,index-1]>arr[index],arr[index+1,right]>arr[index]
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

//双路快排
//从头开始找大于standard的元素，从尾开始找小于standard的元素，交换两者位置。
function __partition2(arr, left, right) {
  //随机生成标准值
  let randomIndex = parseInt(Math.random() * (right - left + 1)) + left;
  //将标准值交换到第一位
  swap(arr, left, randomIndex);
  let standard = arr[left];
  //arr[l+1...i)<=standard,arr(j...r]>=standard
  let i = left + 1,
    j = right;
  while (true) {
    while (i <= right && arr[i] < standard) i++;
    while (j >= left + 1 && arr[j] > standard) j--;
    if (i > j) break;
    swap(arr, i, j);
    i++;
    j--;
  }
  swap(arr, left, j);
  return j;
}

//交换值
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

//三路快排
function __quickSortThreeWays(arr, left, right) {
  //随机生成标准值
  if (left >= right) {
    return;
  }
  let randomIndex = parseInt(Math.random() * (right - left + 1)) + left;
  //将标准值交换到第一位
  swap(arr, left, randomIndex);
  let standard = arr[left];
  let lt = left; //arr[left...lt]<standard
  let i = left + 1; //arr[lt+1...i]=standard
  let gt = right + 1; //arr[gt...right]>standard
  while (i < gt) {
    if (arr[i] < standard) {
      swap(arr, i, lt + 1);
      lt++;
      i++;
    } else if (arr[i] > standard) {
      swap(arr, i, gt - 1);
      gt--;
    } else {
      i++;
    }
  }
  swap(arr, left, lt);
  __quickSortThreeWays(arr, left, lt - 1);
  __quickSortThreeWays(arr, gt, right);
}

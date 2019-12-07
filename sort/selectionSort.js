/*
 * @Author: FBB
 * @Date: 2019-02-14 14:51:24
 * @LastEditors: FBB
 * @LastEditTime: 2019-12-07 17:12:00
 * @Description: 选择排序
 */

function selectionSort(arr, n) {
  for (var i = 0; i < n; i++) {
    //寻找[i,n)区间内最小值
    var minIndex = i;
    for (var j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (arr[i] > arr[minIndex]) {
      var temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

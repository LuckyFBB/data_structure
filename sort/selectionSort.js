/*
 * @Author: FBB
 * @Date: 2019-02-14 14:51:24
 * @LastEditors: FBB
 * @LastEditTime: 2020-04-29 15:42:44
 * @Description: 选择排序
 * 
 * 每次都会在未排序的区间中找到最小的元素，将其放到已排序的区间末尾。
 * 
 * 选择排序是不稳定的排序算法
 * 
 * 最好情况时间复杂度O(n)，最坏情况时间复杂度O(n^2)，平均情况时间复杂度O(n^2)
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

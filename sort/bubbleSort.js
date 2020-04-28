/*
 * @Author: FBB
 * @Date: 2019-02-14 14:51:23
 * @LastEditors: FBB
 * @LastEditTime: 2020-04-28 21:00:45
 * @Description: 冒泡排序
 *
 * 只会操作相邻的两个数据，看是否满足大小关系，如果不满足就进行交换。
 * 一次冒泡至少会让一个元素到达它该到的位置。
 *
 * 冒泡排序是稳定的排序算法。
 *
 * 最好情况时间复杂度为O(n)，最坏情况时间复杂度为O(n^2)，平均情况时间复杂度为O(n^2)
 */

function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > a[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function bubbleSort2(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let flag = false; //标记是否有数据交换
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > a[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = true; //有数据交换
      }
    }
    if (!flag) break; //如果不存在数据交换，提前退出
  }
  return arr;
}

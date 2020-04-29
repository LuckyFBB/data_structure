/*
 * @Author: FBB
 * @Date: 2019-02-14 14:51:23
 * @LastEditors: FBB
 * @LastEditTime: 2020-04-29 15:35:04
 * @Description: 插入排序
 *
 * 插入排序也需要元素比较和元素移动，我们需要将元素a插入到已排序的区间时，需要用a元素与已排序的元素依次比较
 * 
 * 插入排序是稳定的排序算法。
 * 
 * 最好情况时间复杂度O(n)，最坏情况时间复杂度O(n^2)，平均情况时间复杂度O(n^2)
 */
function insertSort(arr) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    //寻找i最合适的插入位置
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else break;
    }
  }
  return arr;
}

function insertSort2(arr) {
  let len = arr.length;
  //寻找i最合适的插入位置
  for (let i = 1; i < len; i++) {
    //当前i的值
    let curr = arr[i];
    //要插入的位置
    let j;
    for (j = i; j > 0 && curr < arr[j - 1]; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = curr;
  }
  return arr;
}

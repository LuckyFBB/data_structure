/*
 * @Author: FBB
 * @Date: 2019-02-14 14:51:23
 * @LastEditors: FBB
 * @LastEditTime: 2020-05-08 20:34:53
 * @Description: 最大堆的实现
 *
 * 堆一定是一个完全二叉树
 * 堆中每一个节点的值都必须大于等于（或小于等于）其子树中每个节点的值。
 *
 * 对于每个节点的值都大于等于子树中每个节点值的堆，我们叫作“大顶堆”。
 * 对于每个节点的值都小于等于子树中每个节点值的堆，我们叫作“小顶堆”
 *
 * 采用顺序存储法
 * 我们把根节点存储在下标 i = 1 的位置，那左子节点存储在下标 2 * i = 2 的位置，右子节点存储在 2 * i + 1 = 3 的位置，以此类推。
 *
 * 将n个元素逐个插入到一个空堆中,算法复杂度为O(nlogn)
 */

class MaxHeap {
  constructor() {
    this.data = [0];
  }

  //插入元素
  insertItem(item) {
    this.data.push(item);
    this.__shiftUp(this.getSize());
  }

  //删除最大值
  deleteMax() {
    this.__buildHeap();
    if (this.getSize() === 0) return -1;
    this.data[1] = this.data.pop();
    console.log(this.getSize());
    this.__shiftDown(this.getSize(), 1);
  }

  sort() {
    this.__buildHeap();
    let len = this.getSize();
    while (len > 1) {
      this.__swap(len, 1);
      len--;
      this.__shiftDown(len, 1);
    }
  }

  //返回当前大小
  getSize() {
    return this.data.length - 1;
  }

  __buildHeap() {
    for (let i = parseInt(this.getSize() / 2); i > 0; i--) {
      this.__shiftDown(this.getSize(), i);
    }
  }

  //向上堆重构: 新元素跟父元素比较,新元素大则交换,一直到新元素比父元素小为止
  __shiftUp(k) {
    while (k > 1 && this.data[k] > this.data[parseInt(k / 2)]) {
      this.__swap(k, parseInt(k / 2));
      k = parseInt(k / 2);
    }
  }

  //向下堆重构:从堆顶开始,比较当前元素和两个子元素,将若当前元素小于子元素中的一个,则将当前元素与较大的子元素交换,直到当前元素大于其子元素
  __shiftDown(len, k) {
    while (true) {
      let maxPos = k;
      if (2 * k <= len && this.data[k] < this.data[2 * k]) maxPos = 2 * k;
      if (2 * k + 1 <= len && this.data[maxPos] < this.data[2 * k + 1])
        maxPos = 2 * k + 1;
      if (k === maxPos) break;
      this.__swap(maxPos, k);
      k = maxPos;
    }
  }

  __swap(i, j) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }
}
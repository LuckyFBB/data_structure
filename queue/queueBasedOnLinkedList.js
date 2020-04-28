/*
 * @Author: FBB
 * @Date: 2020-04-28 20:03:44
 * @LastEditors: FBB
 * @LastEditTime: 2020-04-28 20:13:52
 * @Description: 使用List实现queue的dequeue/enqueue操作
 */

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class QueueBasedOnLinkedList {
  constructor() {
    this.top = null; //标记队列第一个元素
    this.tail = null; //标记队列最后一个元素
  }

  //入队
  enqueue(element) {
    const node = new Node(element);
    if (this.top === null) {
      this.top = node;
      this.tail = this.top;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
  }

  //出队
  dequeue() {
    if (this.top === null) {
      //暂无数据
      return -1;
    } else {
      const ele = this.top.element;
      this.top = this.top.next;
      return ele;
    }
  }
}

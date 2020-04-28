/*
 * @Author: FBB
 * @Date: 2020-04-28 16:06:37
 * @LastEditors: FBB
 * @LastEditTime: 2020-04-28 20:14:33
 * @Description: 使用List实现stack的push/pop操作
 */

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class StackBasedOnLinkedList {
  constructor() {
    this.top = null; //标记栈顶元素
  }
  
  //入栈
  push(element) {
    const node = new Node(element);
    if (this.top === null) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }

  //出栈
  pop() {
    if (this.top === null) {
      return -1;
    }
    const val = this.top.element;
    this.top = this.top.next;
    return val;
  }

  //清空
  clear() {
    this.top = null;
  }

  //打印
  display() {
    if (this.top !== null) {
      let top = this.top;
      while (top) {
        console.log(top.element);
        top = top.next;
      }
    }
  }
}

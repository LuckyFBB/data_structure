/*
 * @Author: FBB
 * @Date: 2020-04-28 17:57:58
 * @LastEditors: FBB
 * @LastEditTime: 2020-04-28 19:39:09
 * @Description: 用栈实现队列
 */

class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
}

//入队
MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
};

//出队
MyQueue.prototype.pop = function () {
  while (this.stack1.length) {
    this.stack2.push(this.stack1.pop());
  }
  const pop = this.stack2.pop();
  while (this.stack2.length) {
    this.stack1.push(this.stack2.pop());
  }
  return pop;
};

//返回队列第一个元素
MyQueue.prototype.peek = function () {
  while (this.stack1.length) {
    this.stack2.push(this.stack1.pop());
  }
  const peek = this.stack2[this.stack2.length - 1];
  while (this.stack2.length) {
    this.stack1.push(this.stack2.pop());
  }
  return peek;
};

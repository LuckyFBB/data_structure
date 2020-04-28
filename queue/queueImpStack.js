/*
 * @Author: FBB
 * @Date: 2020-04-28 19:56:44
 * @LastEditors: FBB
 * @LastEditTime: 2020-04-28 19:59:20
 * @Description: 用队列实现栈
 */
class MyStack {
  constructor() {
    this.queue = [];
  }
}

//入栈
MyStack.prototype.push = function (x) {
  this.queue.push(x);
};

//出栈
MyStack.prototype.pop = function () {
  let index = 0;
  while (index < this.queue.length - 1) {
    const element = this.queue.shift();
    this.queue.push(element);
    index++;
  }
  return this.queue.shift();
};

//返回栈顶元素
MyStack.prototype.top = function () {
  let index = 0;
  while (index < this.queue.length - 1) {
    const element = this.queue.shift();
    this.queue.push(element);
    index++;
  }
  const top = this.queue.shift();
  this.queue.push(top);
  return top;
};

//判断栈是否为空
MyStack.prototype.empty = function () {
  return !this.queue.length;
};

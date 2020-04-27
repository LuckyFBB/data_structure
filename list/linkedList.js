/*
 * @Author: FBB
 * @Date: 2020-04-27 19:56:55
 * @LastEditors: FBB
 * @LastEditTime: 2020-04-27 21:04:48
 * @Description: 单链表的插入、删除、查找操作
 */
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node("head");
  }

  // 向链表尾部追加节点
  append(element) {
    const newNode = new Node(element);
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  // 在element节点之后插入新的节点
  insert(newElement, element) {
    const newNode = new Node(newElement);
    let findNode = this.findByValue(element);
    if (findNode === -1) {
      //没有找到element节点
      return;
    }
    newNode.next = findNode.next;
    findNode.next = newNode;
  }

  // 根据value值查找节点
  findByValue(item) {
    let currentNode = this.head.next;
    while (currentNode && currentNode.element !== item) {
      currentNode = currentNode.next;
    }
    return currentNode ? currentNode : -1;
  }

  // 根据index查找节点，下标从0开始
  findByIndex(index) {
    let currentNode = this.head;
    let pos = 0;
    while (currentNode !== null && pos !== index) {
      currentNode = currentNode.next;
      pos++;
    }
    return currentNode ? currentNode : -1;
  }

  // 查找item的前一个节点
  findPrev(item) {
    let currentNode = this.head;
    while (currentNode.next && currentNode.next.element !== item) {
      currentNode = currentNode.next;
    }
    return currentNode.next ? currentNode : -1;
  }

  //根据item删除节点
  remove(item) {
    let prevNode = this.findPrev(item);
    if (prevNode === -1) {
      //没有item节点
      return;
    }
    prevNode.next = prevNode.next.next;
  }
  // 打印当前list
  display() {
    let currentNode = this.head.next; //忽略头节点
    while (currentNode) {
      console.log(currentNode.element);
      currentNode = currentNode.next;
    }
  }
}
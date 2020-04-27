/*
 * @Author: FBB
 * @Date: 2020-04-27 19:56:55
 * @LastEditors: FBB
 * @LastEditTime: 2020-04-27 21:39:13
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
    let currentNode = this.head;
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

  //检测是否有环
  /* 
  使用快慢指针的方式，快指针是慢指针的速度的两倍
  如果存在环，两个指针会在同一个地方相遇
  */
  checkCircle() {
    let fast = this.head;
    let slow = this.head;
    while (fast && fast.next && fast.next.next) {
      fast = fast.next.next;
      slow = slow.next;
      if (fast === slow) {
        return true;
      }
    }
    return false;
  }
}

// 合并两个有序链表
const mergeTowSortList = (list1, list2) => {
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }
  if (list1.element < list2.element) {
    list1.next = mergeTowList(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTowList(list1, list2.next);
    return list2;
  }
};

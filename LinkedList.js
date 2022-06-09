// Data Structure LinkedLst

// creat node struct;
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// create linked list

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  addFirst(ele) {
    this.head = new Node(ele, this.head);
    this.length++;
  }
  addLaste(data) {
    let node = new Node(data);
    let current = this.head;

    if (!current) {
      current = node;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }
  printData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  addAt(val, index) {
    if (index < 0 || index > this.length) {
      throw new Error('Enter index > 0 and < list length');
    }
    if (index === 0) this.addFirst(val);
    else {
      const node = new Node(val);
      let current, previous, count = 0;

      current = this.head;

      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      node.next = current;
      previous.next = node;
      this.length++;
    }
  }
  clear() {
    this.head = null;
    this.length = 0;
  }
  removeFrom(index) {
    if (index < 0 || index > this.length) {
      throw new Error('Enter index > 0 and < list length');
    }

    let count = 0;
    let current = this.head,
      previous;
    if (index === 0) this.head = current.next;
    else {
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      previous.next = current.next;
    }
    this.length--;
  }
  getAt(index) {
    let current = this.head,
      count = 0;
    if (index < 0 || index > this.length) {
      throw new Error('enter index > 0 and < list of size');

    }
    while (count < index) {
      current = current.next;
      count++;
    }
    return current.data;
  }

}
export default LinkedList;


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
    let curr = this.head;

    if (!curr) {
      curr = node;
    } else {
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.length++;
  }
  printData() {
    let curr = this.head;
    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
  addAt(val, index) {
    if (index < 0 || index > this.length) {
      throw new Error('Enter index > 0 and < list length');
    }
    if (index === 0) this.addFirst(val);
    else {
      const node = new Node(val);
      let curr = this.head,
        previous,
        count = 0;


      while (count < index) {
        previous = curr;
        curr = curr.next;
        count++;
      }
      node.next = curr;
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
    let curr = this.head,
      previous;
    if (index === 0) this.head = curr.next;
    else {
      while (count < index) {
        previous = curr;
        curr = curr.next;
        count++;
      }
      previous.next = curr.next;
    }
    this.length--;
  }
  getAt(index) {
    let curr = this.head,
      count = 0;
    if (index < 0 || index > this.length) {
      throw new Error('enter index > 0 and < list of size');

    }
    while (count < index) {
      curr = curr.next;
      count++;
    }
    return curr.data;
  }

}
export default LinkedList;

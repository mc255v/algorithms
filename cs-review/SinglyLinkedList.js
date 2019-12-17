class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.tail) return undefined;
    let previous = this.head;
    let current = this.head;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    this.tail = previous;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    const shifted = this.head;
    this.head = shifted.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return shifted;
  }

  unshift(val) {
    let newHead = new Node(val);
    newHead.next = this.head;
    this.head = newHead;
    if (!this.tail) {
      this.tail = newHead;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || this.length <= index) return undefined;
    let current = this.head;
    for (let i = 1; i <= index; i++) {
      current = current.next;
    }
    return current;
  }

  set(index, value) {
    const node = this.get(index);
    if (!node) return false
    node.value = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length  ) return false
    if (index === 0) {
      this.unshift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      const newNode = new Node(value);
      const before = this.get(index - 1);
      const after = before.next;
      before.next = newNode;
      newNode.next = after;
      this.length++;
    }
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length  ) return false;
    if (index === 0) {
      this.shift();
    } else if (index === this.length - 1) {
      this.pop();
    } else {
      let before = this.get(index - 1);
      let current = this.get(index);
      before.next = current.next;
      this.length--;
    }
    return true;
  }

  reverse() {
    this.tail = this.head;
    let before = this.tail;
    let after = before.next;
    for (let i = 1; i < this.length; i++) {
      let current = after;
      after = current.next;
      current.next = before;
      before = current;
    }
    this.head = before;
    this.tail.next = null;
    return this;
  }
}

module.exports = SinglyLinkedList;
class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.tail) return undefined;
    const popped = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popped.previous;
      this.tail.next = null;
      popped.previous = null;
    }
    this.length--;
    return popped;
  }

  shift() {
    if(!this.head) return undefined;
    const shifted = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shifted.next;
      this.head.previous = null;
      shifted.next = null;
    }
    this.length--;
    return shifted
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head
      this.head.previous = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    const middle = Math.floor(this.length / 2);
    if (index <= middle) {
      return this.forwards(index);
    } else {
      return this.backwards(index);
    }
  }

  forwards(index) {
    let node = this.head;
    for (let i = 1; i <= index; i++) {
      node = node.next;
    }
    return node;
  }

  backwards(index) {
    let node = this.tail;
    for (let i = this.length - 2; i >= index; i--) {
      node = node.previous;
    }
    return node;
  }

  set(index, value) {
    const node = this.get(index);
    if (node) { 
      node.value = value;
      return true
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unshift(value)
    } else if (index === this.length) {
      this.push(value);
    } else {
      const newNode = new Node(value);
      const prevNode = this.get(index - 1);
      const afterNode = this.get(index);

      prevNode.next = newNode;
      newNode.previous = prevNode;
      newNode.next = afterNode;
      afterNode.previous = newNode;

      this.length++;
    }
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const removed = this.get(index);
    removed.previous.next = removed.next;
    removed.next.previous = removed.previous;
    removed.previous = null;
    removed.next = null;
    this.length--;
    return removed;
  }

  reverse() {
    debugger;
    if (!this.head) return undefined;
    if (this.length === 1) return this;
    this.head = this.tail;
    let current = this.tail;
    let temp = null;
    for (let i = 0; i < this.length; i++) {
      current.next = current.previous;
      current.previous = temp;
      temp = current;
      current = current.next;
    }
    this.tail = temp;
    return this;
  }
}

module.exports = DoublyLinkedList;
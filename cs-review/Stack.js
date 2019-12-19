class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.last) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      let temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (this.size === 0) return null;
    const popped = this.top;
    this.top = popped.next;
    popped.next = null;
    this.size--;
    if (this.size === 0) this.bottom = null;
    return popped;
  }
}

module.exports = Stack;
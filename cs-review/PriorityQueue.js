class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    while(parentIndex >= 0 && this.values[parentIndex].priority >= this.values[index].priority) {
      [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  extractMin() {
    if (this.values.length === 0) return null;
    if (this.values.length === 1) return this.values.pop();
    [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
    const extracted = this.values.pop();
    const length = this.values.length;
    let index = 0;
    while(true) {
      let swap = false;
      const leftIdx = 2 * index + 1;
      const rightIdx = 2 * index + 2;
      let leftChild, rightChild;
      if (leftIdx < length) {
        leftChild = this.values[leftIdx];
        if(leftChild.priority < this.values[index].priority) {
          swap = leftIdx;
        }
      }
      if (rightIdx < length) {
        rightChild = this.values[rightIdx];
        if(!swap && rightChild.priority < this.values[index].priority 
          || swap && rightChild.priority < leftChild.priority) {
          swap = rightIdx;
        }
      }
      if (!swap) break;
      [this.values[index], this.values[swap]] = [this.values[swap], this.values[index]];
      index = swap;
    }
    
    return extracted;
  }
}

module.exports = PriorityQueue;
class MaxBinaryHeap {
  constructor() {
    this.values = []
  }

  insert(value) {
    this.values.push(value);
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    while(this.values[parentIndex] < this.values[index]) {
      [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  extractMax() {
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
        if(leftChild > this.values[index]) {
          swap = leftIdx;
        }
      }
      if (rightIdx < length) {
        rightChild = this.values[rightIdx];
        if(!swap && rightChild > this.values[index] || swap && rightChild > leftChild) {
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

module.exports = MaxBinaryHeap;
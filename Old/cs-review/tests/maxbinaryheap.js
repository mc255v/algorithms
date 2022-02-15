const { expect } = require('chai');
const MaxBinaryHeap =  require('../MaxBinaryHeap');

describe("MaxBinaryHeap", () => {
  let heap;

  describe("Insert", () => {
    it("should insert a value at the correct position", () => {
      heap = new MaxBinaryHeap();
      heap.insert(41);
      heap.insert(39);
      heap.insert(33);
      heap.insert(18);
      heap.insert(27);
      heap.insert(12);
      heap.insert(55);
      heap.insert(6);
      
      expect(heap.values[0]).to.equal(55);
      expect(heap.values[heap.values.length - 1]).to.equal(6);
    });
  });

  describe("extractMax", () => {
    beforeEach(() => {
      heap = new MaxBinaryHeap();
    })
    it("should remove max value and return it", () => {
      heap.insert(41);
      heap.insert(39);
      heap.insert(33);
      heap.insert(18);
      heap.insert(27);
      heap.insert(12);
      heap.insert(55);
      const extracted = heap.extractMax();
      
      expect(extracted).to.equal(55);
      expect(heap.values[0]).to.equal(41);
    });

    it("should return null if empty heap", () => {
      const extracted = heap.extractMax();
      
      expect(extracted).to.be.null;
    });
  });
});
const { expect } = require('chai');
const PQ =  require('../PriorityQueue');

describe("Priority Queue", () => {
  let pq;

  describe("Enqueue", () => {
    it("should insert a value at the correct position", () => {
      pq = new PQ();
      pq.enqueue("low fever", 5);
      pq.enqueue("fractured arm", 3);
      pq.enqueue("gunshot wound", 1);
      pq.enqueue("possible concussion", 4);
      pq.enqueue("car accident", 2);
      pq.enqueue("sore throat", 5);
      pq.enqueue("multiple stabbing", 1);
      pq.enqueue("paper cut", 5);
      
      expect(pq.values[0].priority).to.equal(1);
      expect(pq.values[pq.values.length - 1].priority).to.equal(5);
    });
  });

  describe("extractMin", () => {
    beforeEach(() => {
      pq = new PQ();
    })
    it("should remove min priority node and return it", () => {
      pq.enqueue("low fever", 5);
      pq.enqueue("fractured arm", 3);
      pq.enqueue("gunshot wound", 1);
      pq.enqueue("possible concussion", 4);
      pq.enqueue("car accident", 2);
      pq.enqueue("sore throat", 5);
      let extracted = pq.extractMin();
      expect(extracted.priority).to.equal(1);
      
      extracted = pq.extractMin();
      expect(extracted.priority).to.equal(2);
      
      extracted = pq.extractMin();
      expect(extracted.priority).to.equal(3);
    });

    it("should return null if empty pq", () => {
      const extracted = pq.extractMin();
      
      expect(extracted).to.be.null;
    });
  });
});
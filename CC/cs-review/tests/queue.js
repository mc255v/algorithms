const { expect } = require('chai');
const Queue = require('../Queue');

describe("Queue", () => {

  describe("enqueue", () => {
    it("should push node into queue and set as last", () => {
      const queue = new Queue()

      queue.enqueue(1);
      queue.enqueue(2);

      expect(queue.last.value).to.equal(2)
      expect(queue.size).to.equal(2);
    });

    it("should set first and last equal if empty queue", () => {
      const queue = new Queue()

      queue.enqueue(1);

      expect(queue.first.value).to.equal(1)
      expect(queue.last.value).to.equal(1)
      expect(queue.size).to.equal(1);
    })
  });

  describe("dequeue", () => {
    it("should shift node off queue and return it", () => {
      const queue = new Queue()

      queue.enqueue(1);
      queue.enqueue(2);

      const dequeued = queue.dequeue()

      expect(dequeued.value).to.equal(1);
      expect(dequeued.next).to.be.null;
      expect(queue.size).to.equal(1);
    });

    it("should set first and last to null if queue becomes empty", () => {
      const queue = new Queue()

      queue.enqueue(1);
      queue.dequeue();

      expect(queue.first).to.be.null;
      expect(queue.last).to.be.null;
      expect(queue.size).to.equal(0);
    })
  });
})
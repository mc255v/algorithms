const { expect } = require('chai');
const Stack = require('../Stack');

describe("Stack", () => {

  describe("push", () => {
    it("should push node onto stack and set as top", () => {
      const stack = new Stack()

      stack.push(1);
      stack.push(2);

      expect(stack.top.value).to.equal(2)
      expect(stack.size).to.equal(2);
    });
  });

  describe("pop", () => {
    it("should pop node off stack and return it", () => {
      const stack = new Stack()

      stack.push(1);
      stack.push(2);

      const popped = stack.pop()

      expect(popped.value).to.equal(2);
      expect(popped.next).to.be.null;
      expect(stack.size).to.equal(1);
    });

    it("should set top and bottom to null if stack becomes empty", () => {
      const stack = new Stack()

      stack.push(1);
      stack.pop();

      expect(stack.top).to.be.null;
      expect(stack.bottom).to.be.null;
      expect(stack.size).to.equal(0);
    })
  });
})
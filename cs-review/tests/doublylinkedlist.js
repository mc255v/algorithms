const { expect } = require("chai");
const LinkedList = require("../DoublyLinkedList");

describe("DoublyLinkedList", () => {
  describe("push", () => {
    it("should push to the end of the list", () => {
      const list = new LinkedList();

      list.push(1);
      list.push(2);
      list.push(3);

      expect(list.head.value).to.equal(1);
      expect(list.head.previous).to.be.null;

      expect(list.head.next.value).to.equal(2);
      expect(list.head.next.previous.value).to.equal(1);

      expect(list.head.next.next.value).to.equal(3);
      expect(list.head.next.next.previous.value).to.equal(2);
      expect(list.head.next.next.next).to.be.null;

      expect(list.length).to.equal(3);
    });

    it("should push to the end of the list (prevent sorting)", () => {
      const list = new LinkedList();

      list.push(1);
      list.push(3);
      list.push(4);
      list.push(0);

      expect(list.head.value).to.equal(1);
      expect(list.head.next.value).to.equal(3);
      expect(list.head.next.next.value).to.equal(4);
      expect(list.head.next.next.next.value).to.equal(0);
      expect(list.head.next.next.next.next).to.be.null;
    });
  });

  describe("pop", () => {
    it("should remove and return value from the end of the list", () => {
      const list = new LinkedList();

      list.push(1);
      list.push(2);
      list.push(3);
      list.push(4);

      const popped = list.pop();

      expect(list.head.value).to.equal(1);
      expect(list.head.next.value).to.equal(2);
      expect(list.head.next.next.value).to.equal(3);
      expect(list.head.next.next.next).to.be.null;
      expect(popped.value).to.equal(4)
    });

    it("should set the previous node as the tail as return severed node", () => {
      const list = new LinkedList();

      list.push(1);
      list.push(2);
      list.push(3);
      list.push(4);

      const popped = list.pop();

      expect(list.tail.value).to.equal(3);
      expect(popped.previous).to.be.null;
    });

    it("should return undefined for an empty list", () => {
      const list = new LinkedList()

      const popped = list.pop()

      expect(popped).to.be.undefined;
    });

    it("should set head and tail to null when length is 0", () => {
      const list = new LinkedList()

      list.push(1)

      list.pop()

      expect(list.head).to.be.null;
      expect(list.tail).to.be.null;
    });
  });

  describe("shift", () => {
    it("should remove and return a node from the start of the list", () => {
      const list = new LinkedList()

      list.push(1);
      list.push(2);
      list.push(3);

      const shifted = list.shift()

      expect(shifted.value).to.equal(1);
      expect(list.head.value).to.equal(2);
    });

    it("should set the list head to null when length is 0 after shift", () => {
      const list = new LinkedList()

      list.push(1);

      const shifted = list.shift()

      expect(shifted.value).to.equal(1);
      expect(list.head).to.be.null;
      expect(list.length).to.equal(0);
    });

    it("should return the shifted node with severed references", () => {
      const list = new LinkedList()

      list.push(1);
      list.push(2);

      const shifted = list.shift()

      expect(shifted.next).to.be.null;
      expect(shifted.previous).to.be.null;
      expect(list.length).to.equal(1);
    })
  });

  describe("unshift", () => {
    it("should add a node to the start of the list and set the new head", () => {
      const list = new LinkedList()

      list.push(1);
      list.unshift(2);

      expect(list.head.value).to.equal(2);
      expect(list.head.next.value).to.equal(1);
      expect(list.head.next.previous.value).to.equal(2);
      expect(list.length).to.equal(2);
    });

    it("should set the head and tail when list is empty", () => {
      const list = new LinkedList()

      list.unshift(2);

      expect(list.head.value).to.equal(2);
      expect(list.tail.value).to.equal(2);
      expect(list.length).to.equal(1);
    });
  });

  describe("get", () => {
    it("should return the node at the correct postion", () => {
      const list = new LinkedList()

      list.push(1);
      list.push(2);
      list.push(3);

      expect(list.get(0).value).to.equal(1);
      expect(list.get(1).value).to.equal(2);
      expect(list.get(2).value).to.equal(3);
    });

    it("should return undefined if index > list length", () => {
      const list = new LinkedList()
      const list2 = new LinkedList()

      list.push(1);
      list.push(2);
      list.push(3);

      expect(list.get(3)).to.be.null;
      expect(list2.get(3)).to.be.null;
      expect(list2.get(-3)).to.be.null;
    });
  });

  describe("set", () => {
    it("should change the value of the node at the position", () => {
      const list = new LinkedList()

      list.push(1);
      list.push(2);
      list.push(3);
      const set = list.set(1, "set");

      expect(list.get(1).value).to.equal("set");
      expect(set).to.be.true;
      expect(list.set(4, "no")).to.be.false;
    });

    it("should return false if it fails", () => {
      const list = new LinkedList()

      list.push(1);
      
      expect(list.set(4, "no")).to.be.false;
    })
  });

  describe("insert", () => {
    it("should insert value at given index", () => {
      const list = new LinkedList();

      list.push(1);
      list.push(2);
      list.push(3);
      list.push(4);

      list.insert(0, "new head");

      list.insert(2, "woohoo!");

      expect(list.length).to.equal(6);
      expect(list.head.value).to.equal("new head");
      expect(list.head.previous).to.be.null;
      expect(list.head.next.value).to.equal(1);
      expect(list.head.next.next.value).to.equal("woohoo!");
      expect(list.head.next.next.previous.value).to.equal(1);
      expect(list.head.next.next.next.value).to.equal(2);
      expect(list.head.next.next.next.next.value).to.equal(3);
      expect(list.head.next.next.next.next.next.value).to.equal(4);
      expect(list.head.next.next.next.next.next.next).to.be.null;
    });

    it("should insert value and set head and tail for empty list", () => {
      const list = new LinkedList();

      list.insert(0, "new head");

      expect(list.head.value).to.equal("new head");
      expect(list.tail.value).to.equal("new head");
    });

    it("should return false if index is not end and is > list length", () => {
      const list = new LinkedList();

      list.push(1);

      const test = list.insert(2, "new head");

      expect(test).to.be.false;
    });

    it("should insert at end if index = length", () => {
      const list = new LinkedList();

      list.push(1);

      expect(list.insert(1, "new")).to.be.true;
      expect(list.head.next.value).to.equal("new")
      expect(list.length).to.equal(2);
    });
  });

  describe("remove", () => {
    it("should remove value at given index", () => {
      const list = new LinkedList();

      list.push(1);
      list.push(2);
      list.push(3);
      list.push(4);

      const removed = list.remove(2);

      expect(list.length).to.equal(3)
      expect(removed.value).to.equal(3);
      expect(list.head.value).to.equal(1);
      expect(list.head.next.value).to.equal(2);
      expect(list.head.next.next.value).to.equal(4);
      expect(list.head.next.next.previous.value).to.equal(2);
      expect(list.head.next.next.next).to.be.null;
    });

    it("should remove value and set head and tail correctly for empty list", () => {
      const list = new LinkedList();
      
      list.push(1)

      list.remove(0);

      expect(list.head).to.be.null;
      expect(list.tail).to.be.null;
      
    });

    it("should return undefined if index is not end and is > list length", () => {
      const list = new LinkedList();

      list.push(1);

      const test = list.remove(2);

      expect(test).to.be.undefined;
    });
  })

  describe("reverse", () => {
    it("should reverse the list", () => {
      const list = new LinkedList();

      list.push(1);
      list.push(2);
      list.push(3);
      list.push(4);

      list.reverse();

      expect(list.head.value).to.equal(4);
      expect(list.head.previous).to.be.null;
      expect(list.head.next.value).to.equal(3);
      expect(list.head.next.previous.value).to.equal(4);
      expect(list.head.next.next.value).to.equal(2);
      expect(list.head.next.next.previous.value).to.equal(3);
      expect(list.head.next.next.next.value).to.equal(1);
      expect(list.head.next.next.next.previous.value).to.equal(2);
      expect(list.head.next.next.next.next).to.be.null;
    })
  })
});

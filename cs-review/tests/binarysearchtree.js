const { expect } = require('chai');
const BST = require('../BinarySearchTree');

describe.only("BinarySearchTree", () => {
  // Assuming no duplicates allowed
  describe("insert", () => {
    it("should insert a node and set as root for empty BST", () => {
      const bst = new BST();

      bst.insert(10);

      expect(bst.root.value).to.equal(10);
    });

    it("should insert in the proper place", () => {
      const bst = new BST();

      bst.insert(10);
      bst.insert(8);
      bst.insert(11);
      bst.insert(9);

      expect(bst.root.value).to.equal(10);
      expect(bst.root.left.value).to.equal(8);
      expect(bst.root.left.left).to.be.null;
      expect(bst.root.left.right.value).to.equal(9);
      expect(bst.root.right.value).to.equal(11);
    });

    it("should not insert duplicate values or modify BST", () => {
      const bst = new BST();

      bst.insert(10);
      const compare = bst.insert(8);
      const duplicate = bst.insert(10);

      expect(compare).to.deep.equal(duplicate);
    });
  });

  describe("find", () => {
    it("should return null for an empty BST", () => {
      const bst = new BST();

      const found = bst.find(5);

      expect(found).to.be.null;
    });

    it("should return the node if found", () => {
      const bst = new BST();

      /*
            10
          8   11
        7 9     13
      5
      */

      bst.insert(10);
      bst.insert(8);
      bst.insert(11);
      bst.insert(7);
      bst.insert(9);
      bst.insert(5);
      bst.insert(13);

      const found = bst.find(9);

      expect(found.value).to.equal(9);
    });

    it("should return null if node not found", () => {
      const bst = new BST();

      /*
            10
          8   11
        7 9     13
      5
      */

      bst.insert(10);
      bst.insert(8);
      bst.insert(11);
      bst.insert(7);
      bst.insert(9);
      bst.insert(5);
      bst.insert(13);

      expect(bst.find(12)).to.be.null;
    });
  });
});
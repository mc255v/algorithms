const { expect } = require('chai');
const BST = require('../BinarySearchTree');
const DFS = require('../DFS');

describe("Depth-first Search", () => {
  const dfs = new DFS();
  const tree = new BST();
  tree.insert(10);
  tree.insert(6);
  tree.insert(15);
  tree.insert(3);
  tree.insert(8);
  tree.insert(20);

    /*
      10
      |--6
      |  |--3
      |  |--8
      |--15
      |  |--20
    */

  describe("PreOrder", () => {
    it("should return an array of node values", () => {
      const expected = [10, 6, 3, 8, 15, 20];
      const result = dfs.preOrder(tree);
  
      expect(result).to.deep.equal(expected);
    });
  });

  describe("PostOrder", () => {
    it("should return an array of node values", () => {
      const expected = [3, 8, 6, 20, 15, 10];
      const result = dfs.postOrder(tree);
  
      expect(result).to.deep.equal(expected);
    });
  });

  describe("InOrder", () => {
    it("should return an array of node values", () => {
      const expected = [3, 6, 8, 10, 15, 20];
      const result = dfs.inOrder(tree);
  
      expect(result).to.deep.equal(expected);
    });
  });
});
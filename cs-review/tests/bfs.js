const { expect } = require('chai');
const BST = require('../BinarySearchTree');
const bfs = require('../BFS');

describe("Breadth-first Search", () => {
  let tree;

  beforeEach(() => {
    tree = new BST();
    tree.insert(10);
    tree.insert(6);
    tree.insert(15);
    tree.insert(3);
    tree.insert(8);
    tree.insert(20);
  });

  it("should return an array of node values", () => {
    const expected = [10, 6, 15, 3, 8, 20];
    const result = bfs(tree);

    expect(result).to.deep.equal(expected);
  })
});
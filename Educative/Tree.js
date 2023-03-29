/*
Find kth maximum value in a binary search tree
Time: O(n) - goes through whole tree
Size: 0(n) - creates array of whole tree
*/
function findKthMax(rootNode, k) {
  const nums = [];
  function recurse(node) {
    if (node === null) {
      return node;
    }
    const right = recurse(node.rightChild);
    nums.push(node.val);
    const left = recurse(node.leftChild);
  }
  recurse(rootNode);
  return nums[k - 1];
}

/*
Find ancestors of a given node in a binary search tree
Output is ancestors from node back up
Time: ? -  Doesn't recurse whole tree
*/
function findAncestors(rootNode, k) {
  const path = [];
  function recurse(node) {
    if (!node || node.val == k) {
      return node;
    }
    if (node.val < k) {
      recurse(node.rightChild);
      path.push(node.val);
    } else {
      console.log(node.val);
      path.push(node.val);
    }
  }
  recurse(rootNode);
  return path;
}

function findKthMax(rootNode, k) {
  const nums = [];
  function recurse(node) {
    if (node === null) {
      return node;
    }
    const right = recurse(node.rightChild);
    const left = recurse(node.leftChild);

    console.log("right", right);
    console.log("left", left);
  }
  recurse(rootNode);
  return nums;
}

console.log(search([-1, 0, 3, 5, 9, 12], 9));

module.exports = {
  // 226. Invert Binary Tree, DFS search going down left first
  invertTree: (root) => {
    if (root == null) {
      return root;
    }
    const left = invertTree(root.left);
    const right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
  },
};

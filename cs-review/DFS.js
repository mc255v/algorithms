class DFS {
  preOrder(tree) {
    const visited = [];

    const traverse = node => {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(tree.root);
    return(visited);
  }

  postOrder(tree) {
    const visited = [];

    const traverse = node => {
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      visited.push(node.value);
    }

    traverse(tree.root);
    return visited;
  }

  inOrder(tree) {
    const visited = [];

    const traverse = node => {
      if(node.left) traverse(node.left);
      visited.push(node.value);
      if(node.right) traverse(node.right);
    }

    traverse(tree.root);
    return visited;
  }

  
}

module.exports = DFS;
const Queue = require('./Queue');

function BFS(tree) {
  const data = [];
  const queue = new Queue();
  let node = tree.root;
  queue.enqueue(node);
  while(queue.size > 0) {
    node = queue.dequeue();
    data.push(node.value.value);
    if(node.value.left) queue.enqueue(node.value.left);
    if(node.value.right) queue.enqueue(node.value.right);
  }
  return data;
}

module.exports = BFS;
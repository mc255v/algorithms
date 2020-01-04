const PriorityQueue = require('./PriorityQueue');

class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2, weight) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return false;
    this.adjacencyList[v1].push({ node: v2, weight});
    this.adjacencyList[v2].push({ node: v1, weight});
    return true;
  }

  dijkstras(start, end) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    const path = [];
    let current;
    // initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // implementation
    while(nodes.values.length) {
      current = nodes.extractMin().value;
      if (current === end) {
        while(previous[current]) {
          path.push(current);
          current = previous[current];
        }
        break;
      }
      if (current || distances[current] !== Infinity) {
        for (let nextNode of this.adjacencyList[current]) {
          let candidate = distances[current] + nextNode.weight;
          if (candidate < distances[nextNode.node]) {
            distances[nextNode.node] = candidate;
            previous[nextNode.node] = current;
            nodes.enqueue(nextNode.node, candidate);
          }
        }
      }
    }
    return path.concat(current).reverse();
  }
}

module.exports = WeightedGraph;
class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return false;
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
    return true;
  }

  removeEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return false;
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(vertex => vertex !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(vertex => vertex !== v1);
    return true;
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return false;
    for (let v of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, v);
    }
    delete this.adjacencyList[vertex];
    return true;
  }

  dfsRecursive(startVertex) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
  
    (function traverse(vertex) {
      if(!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) return traverse(neighbor);
      })
  
    })(startVertex);
    return result;
  }

  dfsIterative(startVertex) {
    const stack = [startVertex];
    const result = [];
    const visited = {};
    let popped;
    visited[startVertex] = true;

    while (stack.length) {
      popped = stack.pop();
      result.push(popped);
      this.adjacencyList[popped].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor)
        }
      });
    }
    return result;
  }

  bfs(startVertex) {
    const queue = [startVertex];
    const result = [];
    const visited = {};
    let dequeued;
    visited[startVertex] = true;
    while(queue.length) {
      dequeued = queue.shift();
      result.push(dequeued);
      this.adjacencyList[dequeued].forEach(neighbor => {
        if (!visited[neighbor]) {
          queue.push(neighbor);
          visited[neighbor] = true;
        }
      });
    }
    return result;
  }
  
}

module.exports = Graph;
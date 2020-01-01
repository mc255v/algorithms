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
}

module.exports = Graph;
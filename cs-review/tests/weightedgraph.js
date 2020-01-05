const { expect } = require('chai');
const Graph = require('../WeightedGraph');

describe("Dijkstra's Implementation", () => {
  let graph = new Graph();
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addVertex("E");
  graph.addVertex("F");

  graph.addEdge("A", "B", 4);
  graph.addEdge("A", "C", 2);
  graph.addEdge("B", "E", 3);
  graph.addEdge("C", "D", 2);
  graph.addEdge("C", "F", 4);
  graph.addEdge("D", "E", 3);
  graph.addEdge("D", "F", 1);
  graph.addEdge("E", "F", 1);

  it("should return shortest path as an array of vertices ", () => {
   const result = graph.dijkstras("A", "E");

   expect(result).to.deep.equal(["A", "C", "D", "F", "E"]);
  });
})
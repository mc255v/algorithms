const { expect } = require('chai');
const Graph = require('../Graph');

describe("Graph", () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
    
  });

  describe("addVertex", () => {
    it("should add a vertex to the graph initialized with []", () => {
      graph.addVertex("Tokyo");
      graph.addVertex("Seoul");
     
      expect(graph.adjacencyList).to.deep.equal({ Tokyo: [], Seoul: []});
    });
  });

  describe("addEdge", () => {
    it("should add an edge between existing vertices and return true", () => {
      graph.addVertex("Tokyo");
      graph.addVertex("Seoul");
      graph.addVertex("NYC");

      const result = graph.addEdge("Tokyo", "Seoul");

      expect(result).to.be.true;
      expect(graph.adjacencyList).to.deep.equal({ Tokyo: ["Seoul"], Seoul: ["Tokyo"], NYC: [] });
    });

    it("should return false when vertices don't exist", () => {
      const result = graph.addEdge("Tokyo", "LA");

      expect(result).to.be.false;
    });
  });

  describe("removeEdge", () => {
    it("should remove the edge from both vertices", () => {
      graph.addVertex("Tokyo");
      graph.addVertex("Seoul");
      graph.addVertex("NYC");
      graph.addEdge("Tokyo", "Seoul");

      graph.removeEdge("Tokyo", "Seoul");

      expect(graph.adjacencyList).to.deep.equal({ Tokyo: [], Seoul: [], NYC: [] });
    });
  });

  describe("removeVertex", () => {
    it("should remove a vertex and all associated edges", () => {
      graph.addVertex("Tokyo");
      graph.addVertex("Seoul");
      graph.addVertex("NYC");
      graph.addEdge("Tokyo", "Seoul");
      graph.addEdge("Tokyo", "NYC");

      graph.removeVertex("Tokyo");

      expect(graph.adjacencyList).to.deep.equal({ Seoul: [], NYC: [] });
    });
  });

  describe("DFS Recursive & Iterative", () => {
    it("should return an array of the vertices visited", () => {
      graph.addVertex("A");
      graph.addVertex("B");
      graph.addVertex("C");
      graph.addVertex("D");
      graph.addVertex("E");
      graph.addVertex("F");

      graph.addEdge("A", "B");
      graph.addEdge("A", "C");
      graph.addEdge("B", "D");
      graph.addEdge("C", "E");
      graph.addEdge("D", "E");
      graph.addEdge("D", "F");
      graph.addEdge("E", "F");

      /*
              A
            /   \
           B     C
           |     |
           D --- E
            \   /
              F
      */

      const recursive = graph.dfsRecursive("A");
      const iterative = graph.dfsIterative("A");
      
      expect(recursive).to.deep.equal(["A", "B", "D", "E", "C", "F"]);
      expect(iterative).to.deep.equal(["A", "C", "E", "F", "D", "B"]);
    });
  });

  describe("BFS", () => {
    it("should return an array of the vertices visited", () => {
      graph.addVertex("A");
      graph.addVertex("B");
      graph.addVertex("C");
      graph.addVertex("D");
      graph.addVertex("E");
      graph.addVertex("F");

      graph.addEdge("A", "B");
      graph.addEdge("A", "C");
      graph.addEdge("B", "D");
      graph.addEdge("C", "E");
      graph.addEdge("D", "E");
      graph.addEdge("D", "F");
      graph.addEdge("E", "F");

      /*
              A
            /   \
           B     C
           |     |
           D --- E
            \   /
              F
      */

      const bfs = graph.bfs("A");
      
      expect(bfs).to.deep.equal(["A", "B", "C", "D", "E", "F"]);
    });
  });
});
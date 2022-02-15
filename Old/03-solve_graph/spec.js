const { expect } = require("chai");
const { solveGraph } = require(".");

describe("Solve Graph", () => {
  describe("Simple graph with 1 arc", () => {
    const arcs = [{ start: "a", end: "b" }];
    it("should reach b", () => {
      expect(solveGraph("a", "b", arcs)).to.be.true;
    });
    it("should never reach c", () => {
      expect(solveGraph("a", "c", arcs)).to.be.false;
    });
    it("should reach start state", () => {
      expect(solveGraph("a", "a", arcs)).to.be.true;
    });
  });

  describe("Your original tests", () => {
    const arcs = [
      { start: "a", end: "b" },
      { start: "b", end: "c" },
      { start: "c", end: "a" },
      { start: "c", end: "d" },
      { start: "e", end: "a" },
    ];
    it("should reach d", () => {
      expect(solveGraph("a", "d", arcs)).to.be.true;
    });
    it("should never reach e", () => {
      expect(solveGraph("a", "e", arcs)).to.be.false;
    });
  });
});

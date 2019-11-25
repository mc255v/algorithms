// Return true if the end node can be reached from the start node, using 0 or more arcs.
// Return false if it is not possible.
//
// The graph is defined by a list of arcs, where each arc is an object that has two properties, start and end, representing the start and end nodes, respectively.
// Each arc is unidirectional, in other words it goes from a start node to an end node, and not the other way around.
//
// Note that the solveGraph() method doesn't take a list of nodes as input: for simplicity's sake,
// let's assume that all nodes present in arcs are valid.
// However, the start or end node may not be in arcs.
//
// solveGraph(start, end, arcs);
// start: String
// end: String
// arcs: Array: [{ 'start' : String, 'end' : String }, ...]
//
// Examples:
// const arcs = [
//   { start : "a", end : "b" },
//   { start : "b", end : "c"},
//   { start : "c", end : "a"},
//   { start : "c", end : "d"},
//   { start : "e", end : "a"}
// ];
//
// solveGraph("a", "b", arcs);
// => true, because "b" can be reached from "a"
// solveGraph("a", "c", arcs);
// => false, because "c" can never be reached from "a"
const solveGraph = (start, end, arcs) => {
  if (start === end) {
    return true;
  }
  const alreadyStart = [];
  let answer = false;
  function recurse(start, end, arcs) {
    for (const arc of arcs) {
      if (arc.start === start && arc.end === end) {
        answer = true;
        return;
      }
      if (!alreadyStart.includes(arc)) {
        alreadyStart.push(arc);
        recurse(arc.end, end, arcs);
      }
    }
  }
  recurse(start, end, arcs);
  return answer;
};

module.exports = { solveGraph };

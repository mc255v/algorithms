// # Islands
// ## Summary
// Given a map of an ocean, count how many islands there are.
// ## Input
// A 2-D array of 0's and 1's where 0 represents water and 1 represents land;
// ## Output
// An integer representing the number of islands on the map. (If two pieces of land are next to each other on the same column or same row, they are considered "connected" and are thus part of the same island)
// ## Example
// Map:
// ```
// [[1, 1, 1],
// [0, 0, 0],
// [0, 0, 1]]
// ```
// Islands: 2
// Map:
// ```
// [[0, 1, 0, 1],
// [0, 0, 0, 0],
// [1, 0, 1, 0],
// [1, 0, 1, 0]]
// ```
// Islands: 4
// ## Constraints
// Map size is at least 1x1 and at most 10x10.
// Time complexity must be O(n) or faster.
const islands = (collection) => {
  // FIXME: fill me out!
  let island = 0;
  function recurse(col, pos, index) {
    if (col[pos][index] === 1) {
      island++;
      if (pos - 1 >= 0 && index - 1 >= 0) {
        if(col[pos - 1][index] === 1 || col[pos][index - 1] === 1) {
          island--;
        }
      } else if (pos - 1 >= 0 && index + 1 <= col.length - 1) {
        if (col[pos - 1][index] === 1 || col[pos][index + 1] === 1) {
          island--;
        }
      } else if (pos - 1 >= 0) {
        if (col[pos - 1][index] === 1) {
          island--;
        }
      } else if (index - 1 >= 0) {
        if (col[pos][index - 1] === 1) {
          island --;
        }
      }
    }
    if (index === col.length - 1 || pos === collection.length) {
      return;
    }
    if (index < col.length - 1) {
      recurse(col,pos, index + 1);
    }
    if (pos < collection.length - 1 && index === col.length - 2) {
      recurse(col, pos + 1, 0)
    }
  }
  recurse(collection, 0, 0)
  return island;
};

module.exports = { islands };

// Returns the sorted array using Insertion sort.
// https://en.wikipedia.org/wiki/Insertion_sort
//
// insertionSort(Array);
// insertionSort([0, -1, 2]);
// => [-1, 0, 2]
const insertionSort = (arr) => {
  if(!Array.isArray(arr) || arr === null) {
    return arr;
  }
  for (let i = 1; i < arr.length; i++) {
    const insert = arr.splice(i, 1)[0];
    for(let j = 0; j <= arr.length; j++){
      if (insert < arr[j] || j === arr.length) {
        arr.splice(j, 0, insert);
        break;
      }
    }
  }
  return arr;
};

module.exports = { insertionSort };

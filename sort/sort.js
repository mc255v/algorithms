const bubbleSort = (arr) => {
  const result = [...arr];
  let noSwaps = false;
  for (var i = result.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (result[j] > result[j + 1]) {
        [result[j], result[j+1]] = [result[j+1], result[j]]
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return result
}

const selectionSort = (arr) => {
  const result = [...arr];
  for (let i = 0; i < result.length; i++) {
    let index = i
    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[index]) {
        index = j;
      }
    }
    if(result[i] !== result[index]) [result[i], result[index]] = [result[index], result[i]];
  }
  return result
}

const insertionSort = (arr) => {
  let result = [...arr];
  for (let i = 1; i < result.length; i++) {
    const temp = result[i]
    for (let j = i - 1; j >= 0; j--) {
      if (temp > result[j]) {
        result[j + 1] = temp;
        break;
      }
      result[j + 1] = result[j]
      if(j === 0) result[j] = temp;
    }
  }
  return result;
}

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

const merge = (left, right) => {
    const result = [];
    while (left.length > 0 && right.length > 0) {
      left[0] < right[0]
        ? result.push(left.shift())
        : result.push(right.shift());
    }
    return result.concat(left).concat(right);
}

console.log(mergeSort([1,4,3,2,78,21,99]))
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

// Merge Sort

const merge = (left, right) => {
  const result = [];
  while (left.length > 0 && right.length > 0) {
    left[0] < right[0]
      ? result.push(left.shift())
      : result.push(right.shift());
  }
  return result.concat(left).concat(right);
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

// Quick Sort

const pivot = (arr, start = 0, end = arr.length - 1) => {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);
  return swapIdx;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    // left side
    quickSort(arr, left, pivotIdx - 1);
    //right side
    quickSort(arr, pivotIdx + 1, right)
  }
  return arr;
}

// Radix Sort
const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / 10**i) % 10;
}

const digitCount = num => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const mostDigits = nums => {
  let maxDigits = 0;
  for (let num of nums) {
    maxDigits = Math.max(maxDigits, digitCount(num));
  }
  return maxDigits;
}

const radixSort = (arr) => {
  let count = mostDigits(arr);
  for (let i = 0; i < count; i++) {
    const digitBuckets = Array.from({length: 10}, () => []);
    for (let j = 0; j < arr.length; j++) {
      const digit = getDigit(arr[j], i)
      digitBuckets[digit].push(arr[j])
    }
    arr = [].concat(...digitBuckets);
  }
  return arr;
}
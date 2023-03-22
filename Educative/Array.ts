// using built-in methods at O(nlogn) since using sort()
function mergeArraysJS(arr1: number[], arr2: number[]) {
  return [...arr1, ...arr2].sort((a,b) => a - b)
}

console.log(mergeArraysJS([4,5,6],[-2,-1,0,7]))

// create new array and check each array once = O(n+m), where n and m are the lengths of arr1 and arr2
function mergeArrays(arr1: number[], arr2: number[]) {
    let idx1 = 0;
    let idx2 = 0;
    const result: number[] = [];
    if (arr1.length === 0) {
      return arr2;
    }
    if (arr2.length === 0) {
      return arr1;
    }
    while (!(idx1 > arr1.length - 1 && idx2 > arr2.length - 1)) {
      if (arr1[idx1] != null && arr2[idx2] != null) {
        if (arr1[idx1] < arr2[idx2]) {
          result.push(arr1[idx1]);
          idx1++;
        } else {
          result.push(arr2[idx2]);
          idx2++;
        }
      } else {
        if (arr1[idx1] != null) {
          result.push(arr1[idx1]);
          idx1++;
        }
        if (arr2[idx2] != null) {
          result.push(arr2[idx2]);
          idx2++;
        }
      }
    }
    return result;
  }
  
  console.log(mergeArrays([1, 4, 45, 63], [3]))

  // O(n) for length of array and is traversed once
  function findSum(arr: number[], value: number){
    const map = {}
    for(let i = 0; i < arr.length; i++) {
        const target = value - arr[i]
        if(map[target]) {
            return [target, arr[i]]
        }
        map[arr[i]] = true
    }
    return false
  }

/* 
  return an array where each index stores the product of all numbers in the array except the number at the index itself
  my solution: O(n^2) with nested loop
*/
  function findProduct(arr: number[]) {
    let result: number[] = []
    for(const idx in arr) {
        const copy = [...arr]
        copy.splice(Number(idx), 1)
        result.push(copy.reduce((a,c) => a * c))
    }
    return result;
}

/*
  Optimal solution: multiplies everything to right of index on first pass. Multiplies everything left of index on second pass
  Time complexity is O(n)

function findProduct(arr) {
    var temp = 1,
        product = [];
    for (var i = 0; i < arr.length ; i++) {
        product[i]  = temp;
        temp = temp * arr[i];
        console.log(`product: ${product}, temp: ${temp}`)
    }

    temp = 1;
    for (var i = arr.length - 1; i > -1; i--) {
        product[i] *= temp;
        temp *= arr[i];
         console.log(`2nd product: ${product}, temp: ${temp}`)
    }

    return product
}
*/

// find first unique number in array, O(n)
function findFirstUnique(arr) {
  const map = {}
  arr.forEach(num => {
     if(map[num]) {
        map[num]++
     } else {
        map[num] = 1
     }
  })
  for(let i = 0; i < arr.length; i++) {
     if(map[arr[i]] === 1) {
        return arr[i]
     }
  }
  return null
}

/*
initial simple solution O(n)

function rightRotate(arr, n){ 
  for(let i = 0; i < n; i++) {
    arr.unshift(arr.pop())
  }
  return arr
}
*/
// still O(n)
function rightRotate(arr: number[], n: number){ 
  return arr.splice(arr.length - n).concat(arr.splice(0,arr.length))
}

// negative on left, positive on right (0 counts as positive)
function reArrange(arr: number[]) {
  const left: number[] = []
  const right: number[] = []
  arr.forEach(num => {
    if(num < 0) {
      left.push(num)
    } else {
      right.push(num)
    }
  })
  return left.concat(right);
}

/*
takes sorted array and returns hightest number first, lowest second, and repeats for all numbers
[1,2,3,4,5,6,7] => [7,1,6,2,5,3,4]
*/
function maxMin(arr: number[]){ 
  const result: number[] = []
  let left = 0
  let right = arr.length -1
  while(left < right) {
    result.push(arr[right])
    result.push(arr[left])
    left++
    right--
  }
  result.push(arr[right])
  return result;
}
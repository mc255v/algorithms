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

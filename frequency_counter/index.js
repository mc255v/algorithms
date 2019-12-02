// Given two positive integers, find out if the two numbers have the same frequency of digits.
// Time: O(N)
//  sameFrequency(182, 281) // true
//  sameFrequency(34, 14) // false

function sameFrequency(num1, num2){
  const split1 = num1.toString().split("");
  const split2 = num2.toString().split("");
  if (split1. length !== split2.length) return false;
  const numberMap = {}
  for (let i = 0; i < split1.length; i++) {
    numberMap[split1[i]] ? numberMap[split1[i]]++ : numberMap[split1[i]] = 1;
    numberMap[split2[i]] ? numberMap[split2[i]]++ : numberMap[split2[i]] = 1;
  }
  for (let number in numberMap) {
    if (numberMap[number] % 2 !== 0) return false
  }
  return true
}

//  areThereDuplicates("a", "b", "c") // false
//  areThereDuplicates("a", "b", "b") // true
//  areThereDuplicates(1, 3, 7, 4, 2) // false

function areThereDuplicates(...arr) {
  const duplicateMap = {}
  for (let value of arr) {
    duplicateMap[value] ? duplicateMap[value]++ : duplicateMap[value] = 1;
  }
  for (let value in duplicateMap) {
    if (duplicateMap[value] > 1) return true
  }
  return false
}

// reverse("awesome") => "emosewa"

function reverse(str){
  if (!str.length) return "";
  return str.slice(str.length-1, str.length).concat(reverse(str.slice(0, str.length - 1)));
}

// returns true if any value in the array returns true when passed to the callback
// someRecursive([1,2,3], isOdd) => true

function someRecursive(arr, callback){
  if (!arr.length) return false;
  if (callback(arr[0])) {
      return true;
  } else {
     return 0 < someRecursive(arr.slice(1), callback);
  }
}


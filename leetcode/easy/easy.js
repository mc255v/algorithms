const twoSum = (nums, target) => {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    const check = target - nums[i];
    if (check in map) return [map[check], i];
    map[nums[i]] = i;
  }
};

//return 0 if integer overflow for signed 32-bit integer
const reverseInteger = x => {
  const max = Math.pow(2, 31) - 1;
  const min = Math.pow(-2, 31);
  let result = Math.sign(x) * Math.abs(x).toString().split("").reverse().join("");
  if (result > max || result < min) return 0;
  return result;
};

const isIntPalindrome = x => {
  if (x < 0) return false;
  let pop;
  let temp = x;
  let result = 0;
  while (temp != 0) {
    pop = temp % 10;
    temp = Math.floor(temp / 10);
    result = result * 10 + pop;
  }
  return result === x;
};

const romanToInt = (s) => {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    map[s[i]] < map[s[i + 1]] ? total -= map[s[i]] : total += map[s[i]]
  }
  return total;
};

const longestCommonPrefix = (strs) => {
  if (strs.length < 1) return ""
    if (strs.length === 1) return strs[0]
    let compare = strs[0]
    for (let i = 1; i < strs.length; i++) {
      if (strs[i].length < 1) {
        return ""
      } 
        for(let j = strs[i].length - 1; j >= 0 ; j--) {
          if(strs[i].slice(0, j + 1) === compare.slice(0, j + 1)) {
            compare = strs[i].slice(0, j + 1)
            break;
          } else if (j === 0) {
            compare = ""
          }
        }
    }
    return compare
};

console.log(longestCommonPrefix(["abab","aba",""]));
module.exports = {

  twoSum: (nums, target) => {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
      const check = target - nums[i];
      if (check in map) return [map[check], i];
      map[nums[i]] = i;
    }
  },

  //return 0 if integer overflow for signed 32-bit integer
  reverseInteger: x => {
    const max = Math.pow(2, 31) - 1;
    const min = Math.pow(-2, 31);
    let result = Math.sign(x) * Math.abs(x).toString().split("").reverse().join("");
    if (result > max || result < min) return 0;
    return result;
  },

  isIntPalindrome: x => {
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
  },

  romanToInt: (s) => {
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
  },

  longestCommonPrefix: (strs) => {
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
  },

  isValidParens: str => {
    const map = {
      ")": "(",
      "}": "{",
      "]": "["
    }
    if (map[str[0]]) return false;
    const left = [];
    let right = 0;
    for (let char of str) {
      if (map[char]) {
        if (left[left.length - 1] === map[char]) {
          left.pop()
          right--;
        }
        right++;
      } else {
        left.push(char);
      }
    }
    if (left.length === 0 && right === 0) return true;
    return false;
  },

  // merge two sorted lists
  mergeTwoLists: (l1, l2) => {
    const result = new ListNode(0);
    let current = result;
    while(l1 || l2) {
      if (l2 && (!l1 || l1.val > l2.val)) {
        current.next = new ListNode(l2.val);
        l2 = l2.next;
      } else {
        current.next = new ListNode(l1.val);
        l1 = l1.next;
      }
      current = current.next;
    }
    return result.next;
  },

  // no duplicates in beginnning of sorted array
  removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    let current = 0;
    let check = 1
    while (check < nums.length) {
      if (nums[current] !== nums[check]) {
        current++;
        nums[current] = nums[check]
      }
      check++;
    }
    return current + 1;
  },
  // val is not in beginning of array and returns index position at which to stop in array
  removeElement(nums, val) {
    let i = 0;
    for (let el of nums) {
      if (el !== val) {
        nums[i] = el;
        i++;
      }
    }
    return i;
  }
  // 10
}

class ListNode {
  constructor(val) {
  this.val = val;
  this.next = null;
  }
}
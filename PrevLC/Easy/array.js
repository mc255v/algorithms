module.exports = {
  // 1. Two Sum - 1st attempt
  //assumes solution always possible from nums and target
  //review comment: map would have improved this and allowed for single pass at O(n)
  twoSum: (nums, target) => {
    const result = [];
    let found = false;
    for (let i = 0; i < nums.length - 1; i++) {
      if (!found) {
        for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
            result.push(i);
            result.push(j);
            found = true;
            break;
          }
        }
      } else {
        break;
      }
    }
    return result;
  },
  /*
  121. Best Time to Buy and Sell Stock
  Size is O(1) and time is O(n) as go through array once
  */
  maxProfit: (prices) => {
    let buy = 0;
    let sell = 1;
    let profit = 0;
    while (sell < prices.length) {
      if (prices[sell] < prices[buy]) {
        buy = sell;
      } else {
        profit = Math.max(prices[sell] - prices[buy], profit);
      }
      sell++;
    }
    return profit;
  },
  //217. Contains Duplicate
  //review comment: could have used a set....
  containsDuplicate: (nums) => {
    const map = {};
    let result = false;
    nums.forEach((num) => {
      if (num in map) {
        map[num] = map[num] + 1;
        if ((map[num] = 2)) {
          result = true;
        }
      } else {
        map[num] = 0;
      }
    });
    return result;
  },
  //26. Remove Duplicates from Sorted Array
  //in place and 0(1) space
  removeDuplicates: (nums) => {
    let idx = 0;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[idx]) {
        idx++;
        nums[idx] = nums[i];
      }
    }
    return idx + 1;
  },
  //344. Reverse String
  //from array of chars in place
  reverseStringArray: (s) => {
    let start = 0;
    for (let i = s.length - 1; i > start; i--) {
      [s[start], s[i]] = [s[i], s[start]];
      start++;
    }
    return s;
  },
  //66. Plus One
  //optimized after 2 iterations
  plusOne: (digits) => {
    for (let i = digits.length - 1; i >= 0; i--) {
      digits[i]++;
      if (digits[i] === 10) {
        digits[i] = 0;
      } else {
        return digits;
      }
    }
    return [1, ...digits];
  },
  //283. Move Zeros
  //could be optimized with single for loop
  moveZeroes: (nums) => {
    let start = 0;
    while (start < nums.length - 1) {
      if (nums[start] === 0) {
        for (let i = start + 1; i < nums.length; i++) {
          if (nums[i] != 0) {
            nums[start] = nums[i];
            nums[i] = 0;
            break;
          }
        }
      }
      start++;
    }
    return nums;
  },
  // 704. Binary Search
  // O(log n) time
  search: (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      const mid = Math.ceil((left + right) / 2);
      if (nums[mid] === target) {
        return mid;
      } else if (target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return -1;
  },
};

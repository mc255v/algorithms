module.exports = {
  // 1. Two Sum - 1st attempt
  //assumes solution always possible from nums and target
  // map would have improved this and allowed for single pass at O(n)
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

  //9. Palindrome Number - check if a number 'x' is a palindrome
  isPalindrome: (x) => {
    // if using string was allowed
    const reverse = x
      .toString()
      .split("")
      .reverse()
      .join("");
    return x.toString() === reverse;
  },

  //13. Roman to Int
  //attrocious solution....didn't check well enough how to simplify or for a pattern in repeated areas
  romanToInt: (s) => {
    const map = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    let total = 0;
    for (let i = 0; i < s.length; i++) {
      if (i + 1 < s.length) {
        switch (s[i]) {
          case "I":
            s[i + 1] === "V" || s[i + 1] === "X"
              ? (total -= map[s[i]])
              : (total += map[s[i]]);
            break;
          case "X":
            s[i + 1] === "L" || s[i + 1] === "C"
              ? (total -= map[s[i]])
              : (total += map[s[i]]);
            break;
          case "C":
            s[i + 1] === "D" || s[i + 1] === "M"
              ? (total -= map[s[i]])
              : (total += map[s[i]]);
            break;
          default:
            total += map[s[i]];
        }
      } else {
        total += map[s[i]];
      }
    }
    return total;
  },
  //121. Best Time to Buy and Sell Stock
  maxProfit: (prices) => {
    let bought = prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
      const potentialProfit = prices[i] - bought;
      if (potentialProfit > 0 && potentialProfit > profit) {
        profit = potentialProfit;
      } else if (bought > prices[i]) {
        bought = prices[i];
      }
    }
    return profit;
  },
};

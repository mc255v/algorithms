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
};

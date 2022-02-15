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
};

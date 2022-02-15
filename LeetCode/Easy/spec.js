const { expect } = require("chai");
const Easy = require("./easy");

describe("LeetCode Easy Problems", () => {
  describe("twoSum", () => {
    it("should return indices of two numbers that add up to target", () => {
      const test1 = [2, 7, 11, 15];
      const target1 = 9;
      const expected1 = [0, 1];

      const test2 = [3, 2, 4];
      const target2 = 6;
      const expected2 = [1, 2];

      const result1 = Easy.twoSum(test1, target1);
      expect(result1).to.deep.equal(expected1);
      const result2 = Easy.twoSum(test2, target2);
      expect(result2).to.deep.equal(expected2);
    });
  });
});

const { expect } = require("chai");
const EasyArray = require("./array");

describe("LeetCode Easy Array Problems", () => {
  describe("twoSum", () => {
    it("should return indices of two numbers that add up to target", () => {
      const test1 = [2, 7, 11, 15];
      const target1 = 9;
      const expected1 = [0, 1];

      const test2 = [3, 2, 4];
      const target2 = 6;
      const expected2 = [1, 2];

      const result1 = EasyArray.twoSum(test1, target1);
      expect(result1).to.deep.equal(expected1);
      const result2 = EasyArray.twoSum(test2, target2);
      expect(result2).to.deep.equal(expected2);
    });
  });

  describe("maxProfit", () => {
    it("should return best possible profit", () => {
      const prices = [7, 1, 5, 3, 6, 4];
      const expectedBestProfit = 5;

      expect(EasyArray.maxProfit(prices)).to.equal(expectedBestProfit);
    });
    it("should return 0 if there is no possible profit", () => {
      const prices = [7, 6, 4, 3, 1];
      const expectedBestProfit = 0;

      expect(EasyArray.maxProfit(prices)).to.equal(expectedBestProfit);
    });
  });

  describe("containsDuplicate", () => {
    it("should return true if any number appears at least twice", () => {
      const test = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

      expect(EasyArray.containsDuplicate(test)).to.be.true;
    });
    it("should return false if no duplicates", () => {
      const test = [1, 2, 3, 4];

      expect(EasyArray.containsDuplicate(test)).to.be.false;
    });
  });
});

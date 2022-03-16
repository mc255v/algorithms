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

  describe("removeDuplicates", () => {
    it("should arrange array with no duplicates in front and provide index K check array at 0 through K", () => {
      const dups = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
      const k = 5;
      const expected = [0, 1, 2, 3, 4];

      expect(EasyArray.removeDuplicates(dups)).to.equal(k);
      expect(dups.slice(0, k)).to.deep.equal(expected);
    });
  });

  describe("reverseStringArray", () => {
    it("should reverse the string (array of chars)", () => {
      const str = ["h", "e", "l", "l", "o"];
      const expected = ["o", "l", "l", "e", "h"];

      expect(EasyArray.reverseStringArray(str)).to.deep.equal(expected);
    });
  });

  describe("plusOne", () => {
    it("should return an array incremented by 1 as if a split number)", () => {
      const num = [1, 2, 3, 4, 5];
      const numExpected = [1, 2, 3, 4, 6];
      const nines = [9, 9, 9];
      const ninesExpected = [1, 0, 0, 0];
      expect(EasyArray.plusOne(num)).to.deep.equal(numExpected);
      expect(EasyArray.plusOne(nines)).to.deep.equal(ninesExpected);
    });
  });

  describe("moveZeros", () => {
    it("should return an array with all zeros moved to end and order of non zeros unchanged)", () => {
      const nums = [0, 1, 0, 3, 12];
      const numsExpected = [1, 3, 12, 0, 0];

      expect(EasyArray.moveZeroes(nums)).to.deep.equal(numsExpected);
    });
  });
});

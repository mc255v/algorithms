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

  describe("isPalindrome", () => {
    it("should return true if x is a palindrome", () => {
      const palindrome = 12321;
      expect(Easy.isPalindrome(palindrome)).to.be.true;
    });

    it("should return false if x is not a palindrome", () => {
      const notPalindrome = -121;
      expect(Easy.isPalindrome(notPalindrome)).to.be.false;
    });
  });

  describe("romanToInt", () => {
    it("should convert proper roman string to int", () => {
      const roman58 = "LVIII";
      const roman3 = "III";
      const roman1994 = "MCMXCIV";

      expect(Easy.romanToInt(roman58)).to.equal(58);
      expect(Easy.romanToInt(roman3)).to.equal(3);
      expect(Easy.romanToInt(roman1994)).to.equal(1994);
    });
  });
});

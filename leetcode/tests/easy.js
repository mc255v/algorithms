const { expect } = require('chai');
const Easy = require('../easy/Easy1-10');

describe("Easy 1-10", () => {

  describe("twoSum", () => {
    it("should return indices of two numbers that add up to target", () => {
      const test = [2, 7, 11, 15];
      const target = 9;
      const expected = [0, 1];

      const result = Easy.twoSum(test, target);

      expect(result).to.deep.equal(expected);
    });
  });

  describe("reverseInteger", () => {
    it("should reverse digits of postive 32-bit signed int", () => {
      const test = 1234

      const result = Easy.reverseInteger(test);

      expect(result).to.equal(4321);
    });

    it("should reverse digits of negative 32-bit signed int", () => {
      const test = -4321

      const result = Easy.reverseInteger(test);

      expect(result).to.equal(-1234);
    });

    it("should ignore zeros in front of reversed number", () => {
      const test = 7890

      const result = Easy.reverseInteger(test);

      expect(result).to.equal(987);
    });
  });

  describe("isIntPalindrome", () => {
    it("should return true if int is a palindrome", () => {
      const test = 121;

      const result = Easy.isIntPalindrome(test);

      expect(result).to.be.true;
    });

    it("should return false if int is a negative number", () => {
      // -121 !== 121-
      const test = -121;

      const result = Easy.isIntPalindrome(test);

      expect(result).to.be.false;
    });

    it("should return false if int is not a palindrome", () => {
      const test = 100;

      const result = Easy.isIntPalindrome(test);

      expect(result).to.be.false;
    });
  });

  describe("romanToInt", () => {
    it("should return the numeric value of the roman numerals", () => {
      // Input is guaranteed to be within the range from 1 to 3999.
      const test = "MCMXCIV";

      const result = Easy.romanToInt(test);

      expect(result).to.equal(1994);
    });
  });

  describe("longestCommonPrefix", () => {
    it("should return the LCP of an array of strings", () => {
      const test = ["flower","flow","flight"];
      const expected = "fl";

      const result = Easy.longestCommonPrefix(test);

      expect(result).to.equal(expected);
    });

    it("should return an empty string with no common prefix", () => {
      const test = ["dog","racecar","car"];
      const expected = "";

      const result = Easy.longestCommonPrefix(test);

      expect(result).to.equal(expected);
    });
  });

  describe("isValidParens", () => {
    it("should return true for valid parens", () => {
      const test = "(){[]}";

      const result = Easy.isValidParens(test);

      expect(result).to.be.true;
    });

    it("should return false for invalid parens", () => {
      const test = "([)]";

      const result = Easy.isValidParens(test);

      expect(result).to.be.false;
    });
  });
});
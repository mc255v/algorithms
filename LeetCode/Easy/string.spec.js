const { expect } = require("chai");
const EasyString = require("./string");

describe("LeetCode Easy String Problems", () => {
  describe("isPalindrome", () => {
    it("should return true if x is a palindrome", () => {
      const palindrome = 12321;
      expect(EasyString.isPalindrome(palindrome)).to.be.true;
    });

    it("should return false if x is not a palindrome", () => {
      const notPalindrome = -121;
      expect(EasyString.isPalindrome(notPalindrome)).to.be.false;
    });
  });

  describe("romanToInt", () => {
    it("should convert proper roman string to int", () => {
      const roman58 = "LVIII";
      const roman3 = "III";
      const roman1994 = "MCMXCIV";

      expect(EasyString.romanToInt(roman58)).to.equal(58);
      expect(EasyString.romanToInt(roman3)).to.equal(3);
      expect(EasyString.romanToInt(roman1994)).to.equal(1994);
    });
  });

  describe("longestCommonPrefix", () => {
    it("should return the longest common prefix among strings in the array", () => {
      const test = ["flower", "flow", "flight"];
      const expected = "fl";

      expect(EasyString.longestCommonPrefix(test)).to.equal(expected);
    });
    it("should return the longest common prefix among strings in the array", () => {
      const test = ["ab", "a"];
      const expected = "a";

      expect(EasyString.longestCommonPrefix(test)).to.equal(expected);
    });
    it("should return an empty string if no common prefix", () => {
      const test = ["c", "acc", "ccc"];
      const expected = "";

      expect(EasyString.longestCommonPrefix(test)).to.equal(expected);
    });
  });

  describe("validParens", () => {
    it("should return true for valid parenthesis pairs", () => {
      const test = "()[]{}";

      expect(EasyString.validParens(test)).to.be.true;
    });
    it("should return false for invalid parenthesis", () => {
      const test = "((";

      expect(EasyString.validParens(test)).to.be.false;
    });
    it("should return false if s.length < 2", () => {
      const test = "{";

      expect(EasyString.validParens(test)).to.be.false;
    });
  });
});

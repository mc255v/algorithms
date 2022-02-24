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
});

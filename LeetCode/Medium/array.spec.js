const { expect } = require("chai");
const MediumArray = require("./array");

describe("LeetCode Medium Array Problems", () => {
  describe("findMin", () => {
    it("should return smallest number with 1 rotation", () => {
      const test = [7, 0, 1, 2, 4, 5, 6];
      const expected = 0;

      expect(MediumArray.findMin(test)).to.equal(expected);
    });
    it("should return smallest number with no rotation", () => {
      const test = [1, 2, 3];
      const expected = 1;

      expect(MediumArray.findMin(test)).to.equal(expected);
    });
    it("should return smallest number with no rotation and gaps between numbers", () => {
      const test = [11, 13, 15, 17];
      const expected = 11;

      expect(MediumArray.findMin(test)).to.equal(expected);
    });
    it("should return smallest number with no rotation and small array", () => {
      const test = [1, 2];
      const expected = 1;

      expect(MediumArray.findMin(test)).to.equal(expected);
    });
    it("should return smallest number with 3 rotations", () => {
      const test = [4, 5, 1, 2, 3];
      const expected = 1;

      expect(MediumArray.findMin(test)).to.equal(expected);
    });
  });
});

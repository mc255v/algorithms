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

  describe("findTarget", () => {
    it("should return index of target", () => {
      const test = [7, 0, 1, 2, 4, 5, 6];

      expect(MediumArray.findTarget(test, 0)).to.equal(1);
      expect(MediumArray.findTarget(test, 4)).to.equal(4);
    });

    it("should return index of target in array with no rotation", () => {
      const test = [1, 2, 3];

      expect(MediumArray.findTarget(test, 3)).to.equal(2);
    });
    it("should return index of target with no ratation and number gaps", () => {
      const test = [11, 13, 15, 17];

      expect(MediumArray.findTarget(test, 13)).to.equal(1);
    });
    it("should return index of target in small array", () => {
      const test = [1, 2];

      expect(MediumArray.findTarget(test, 1)).to.equal(0);
    });
    it("should return target index in single length array", () => {
      const test = [4];

      expect(MediumArray.findTarget(test, 4)).to.equal(0);
    });
    it("should return -1 if target not found", () => {
      const test = [4, 5, 6, 7, 8, 3];

      expect(MediumArray.findTarget(test, 9)).to.equal(-1);
    });
    it("should return -1 if target not found", () => {
      const test = [4, 5, 6, 7, 0, 1, 2];

      expect(MediumArray.findTarget(test, 0)).to.equal(4);
    });
  });
});

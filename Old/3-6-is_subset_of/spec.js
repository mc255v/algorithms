const { expect } = require("chai");
const { Array } = require("./index");

const arr1 = ['pop','crackle'];
const arr2 = [[1], [2, [3, 4]]];
const objectSub = [{ "key1": 1 }, { "key2": { "key3": 3, "key4": 4 }}];

describe("isSubsetOf", () => {
  // Write your own test
  it("should return true", () => {
    const test = arr2.isSubsetOf([[2, [3, 4]], [1]]);
    expect(test).to.be.true;
  });
});

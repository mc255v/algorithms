const { assert } = require("chai");
const { BigNumber } = require("bignumber.js");
const { diceRoller } = require(".");

/*  eslint-disable prefer-arrow-callback */
describe.only("DiceRoller", function() {
  it("Returns correct result for a target 1 space away", () => {
    const expected = new BigNumber("1");
    assert(diceRoller(1).isEqualTo(expected));
  });

  it("Returns correct result for a target 2 space away", () => {
    const expected = new BigNumber("2");
    assert(diceRoller(2).isEqualTo(expected));
  });

  it("Returns correct result for a target 3 spaces away", () => {
    const expected = new BigNumber("4");
    assert(diceRoller(3).isEqualTo(expected));
  });

  it("Returns correct result for a target 4 spaces away", () => {
    const expected = new BigNumber("8");
    assert(diceRoller(4).isEqualTo(expected));
  });

  it("Returns correct result for a target 5 spaces away", () => {
    const expected = new BigNumber("16");
    assert(diceRoller(5).isEqualTo(expected));
  });

  it("Returns correct result for a target 6 spaces away", () => {
    const expected = new BigNumber("32");
    assert(diceRoller(6).isEqualTo(expected));
  });

  it("Returns correct result for a target 7 spaces away", () => {
    const expected = new BigNumber("63");
    assert(diceRoller(7).isEqualTo(expected));
  });

  it("Returns correct result for a target 10 spaces away", () => {
    const expected = new BigNumber("492");
    assert(diceRoller(10).isEqualTo(expected));
  });
});

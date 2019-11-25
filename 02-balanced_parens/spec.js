const { expect } = require("chai");
const { balancedParens } = require(".");

describe("balancedParens", () => {
  // Write your own test
  it("should return true for balanced", () => {
    // CODE
    const test = "()";
    expect(balancedParens(test)).to.be.true;
  });

  it("should return false for unbalanced", () => {
    // CODE
    const test = ")(";
    expect(balancedParens(test)).to.be.false;
  });

  it("should return true for unbalanced", () => {
    // CODE
    const test = "[](){}";
    expect(balancedParens(test)).to.be.true;
  });

  it("should return false for unbalanced", () => {
    // CODE
    const test = "[](){}((";
    expect(balancedParens(test)).to.be.false;
  });

  it("should return false for unbalanced", () => {
    // CODE
    const test = "";
    expect(balancedParens(test)).to.be.false;
  });

  it("should return false for unbalanced", () => {
    // CODE
    const test = "[(]{)}";
    expect(balancedParens(test)).to.be.false;
  });

  it("should ignore non-bracket characters", () => {
    // CODE
    const test = " var wow  = { yo: thisIsAwesome() }";
    expect(balancedParens(test)).to.be.true;
  });
});

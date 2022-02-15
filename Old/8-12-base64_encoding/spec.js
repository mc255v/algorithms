const { expect } = require("chai");
require(".");

describe("base64 single byte", () => {
  it("should be base64 encoded", () => {
    expect("this is a string!!".toBase64()).to.equal(
      "dGhpcyBpcyBhIHN0cmluZyEh"
    );
  });
});

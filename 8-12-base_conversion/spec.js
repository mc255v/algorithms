const { expect } = require("chai");
const { baseConversion, Alphabet } = require(".");

describe("Base Conversion", () => {
  const bin = Alphabet.BINARY,
    oct = Alphabet.OCTAL,
    dec = Alphabet.DECIMAL,
    hex = Alphabet.HEXA_DECIMAL,
    allow = Alphabet.ALPHA_LOWER,
    alup = Alphabet.ALPHA_UPPER,
    alpha = Alphabet.ALPHA,
    alnum = Alphabet.ALPHA_NUMERIC;

  it("should convert between numeral systems", () => {
    expect("1111").to.equal(baseConversion("15", dec, bin));
    expect("17").to.equal(baseConversion("15", dec, oct));
    expect("10").to.equal(baseConversion("1010", bin, dec));
    expect("a").to.equal(baseConversion("1010", bin, hex));
  });

  it("should convert between other bases", () => {
    expect("a").to.equal(baseConversion("0", dec, alpha));
    expect("bb").to.equal(baseConversion("27", dec, allow));
    expect("320048").to.equal(baseConversion("hello", allow, hex));
    expect("SAME").to.equal(baseConversion("SAME", alup, alup));
  });
});

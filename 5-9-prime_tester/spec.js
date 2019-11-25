const { expect } = require("chai");
const { primeTester, primeSieve } = require("./index");

describe("primeTester", () => {
  it("should return true for a prime number", () => {
    expect(primeTester(5)).to.be.true;
    expect(primeTester(13)).to.be.true;
  });

  it("should return false for a non-prime number", () => {
    expect(primeTester(1)).to.be.false;
  });

  it("should return false for NaN", () => {
    expect(primeTester(null)).to.be.false;
  });


});

describe("primeSieve", () => {
  it("should return an array of primes from a valid input range", () => {
    const result = [5, 7, 11, 13, 17, 19];
    expect(primeSieve(4,20)).to.deep.equal(result);
    expect(primeSieve(1,2)).to.deep.equal([2]);
  });

  // it("should take less than 3 seconds", () => {
  //   const result = primeSieve(1, 2000000)
  //   expect(result).to.be.an('array');
  // });


  describe("Range Error", () => {
    it("should throw a range error when start > end", () => {
      expect(function(){
        primeSieve(20, 4);
      }).to.throw('RangeError');
    });
  
    it("should throw a range error when start < 1", () => {
      expect(function(){
        primeSieve(-1, 1);
      }).to.throw('RangeError');
    });
  });

  describe("Type Error", () => {
    it("should throw a type error when no arguments passed", () => {
      expect(function(){
        primeSieve();
      }).to.throw('TypeError');
    });
  
    it("should throw a type error when a string is passed", () => {
      expect(function(){
        primeSieve("one", 20);
      }).to.throw('TypeError');
    });

    it("should throw a type error when null or undefined is passed", () => {
      expect(function(){
        primeSieve(null, undefined);
      }).to.throw('TypeError');
    });
  });
});

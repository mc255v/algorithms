const { expect } = require('chai');
const HashTable = require('../HashTable');

describe.only("HashTable", () => {
  let hash;

  describe("Set", () => {
    beforeEach(() => {
      hash = new HashTable(10);
    });

    it("should create a hash table with specified length", () => {
      expect(hash.keyMap.length).to.equal(10);
    });

    it("should insert the key-value pair", () => {
      hash.set("four", 4);
      
      expect(hash.keyMap[0]).to.deep.equal([["four", 4]]);
    });

    it("should use seperate chaining with set", () => {
      hash.set("pink", 1);
      hash.set("blue", 2);
      
      expect(hash.keyMap[0].length).to.equal(2);
    });

    it("should not add duplicate key-value pairs", () => {
      hash.set("four", 4);
      hash.set("pink", 1);
      hash.set("blue", 2);
      hash.set("four", 4);
      
      expect(hash.keyMap[0].length).to.equal(3);
    })
  });

  describe("Get", () => {
    beforeEach(() => {
      hash = new HashTable(10);
    });

    it("should return undefined when empty", () => {
      const result = hash.get("nothing");

      expect(result).to.be.undefined;
    });

    it("should return the correct value using the key", () => {
      hash.set("four", 4);

      const result = hash.get("four");

      expect(result).to.equal(4);
    });
  });

  describe("Keys", () => {
    beforeEach(() => {
      hash = new HashTable(10);
    });

    it("should return undefined when empty", () => {
      const result = hash.keys();

      expect(result).to.be.undefined;
    });

    it("should return an array of keys", () => {
      hash.set("four", 4);
      hash.set("pink", 1);
      hash.set("blue", 2);
      hash.set("five", 4);

      const result = hash.keys();

      expect(result.length).to.equal(4);
    });
  });

  describe("Values", () => {
    beforeEach(() => {
      hash = new HashTable(10);
    });

    it("should return undefined when empty", () => {
      const result = hash.values();

      expect(result).to.be.undefined;
    });

    it("should return an array of unique values", () => {
      hash.set("four", 4);
      hash.set("pink", 1);
      hash.set("blue", 2);
      hash.set("five", 4);

      const result = hash.values();

      expect(result.length).to.equal(3);
    });
  });
});
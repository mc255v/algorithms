class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash = (key) => {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [[key, value]];
      return;
    }
    for (let keyValue of this.keyMap[index]) {
      if (keyValue[0] === key) {
        keyValue[1] = value;
        return;
      }
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    if(this.keyMap[index]) {
      for (let keyValue of this.keyMap[index]) {
        if (keyValue[0] === key) return keyValue[1]
      }
    }
    return undefined;
  }

  keys() {
    const data = new Set();
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          data.add(this.keyMap[i][j][0])
        }
      }
    }
    if (data.size === 0) return undefined;
    return [...data];
  }

  values() {
    const data = new Set();
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          data.add(this.keyMap[i][j][1])
        }
      }
    }
    if (data.size === 0) return undefined;
    return [...data];
  }
}

module.exports = HashTable;
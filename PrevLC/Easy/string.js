module.exports = {
  //9. Palindrome Number - check if a number 'x' is a palindrome
  isPalindrome: (x) => {
    // if using string was allowed
    // const reverse = x
    //   .toString()
    //   .split("")
    //   .reverse()
    //   .join("");
    // return x.toString() === reverse;
    if (x < 0) {
      return false;
    }
    let reverse = 0;
    let num = x;
    while (num > 0) {
      reverse *= 10;
      reverse += num % 10;
      num = Math.floor(num / 10);
    }
    return reverse === x;
  },
  //13. Roman to Int
  //updated solution....could refactor a bit more and not need full map and less if checks
  romanToInt: (s) => {
    const map = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
      IV: 4,
      IX: 9,
      XL: 40,
      XC: 90,
      CD: 400,
      CM: 900,
    };
    let result = 0;
    for (let i = 0; i < s.length; i++) {
      if (i + 1 < s.length) {
        const lookAhead = s[i] + s[i + 1];
        if (map[lookAhead]) {
          result += map[lookAhead];
          i++;
        } else {
          result += map[s[i]];
        }
      } else {
        result += map[s[i]];
      }
    }
    return result;
  },
  // 14. Longest Common Prefix
  // harder than I expected, took multiple iterations :'(
  longestCommonPrefix: (strs) => {
    let commonPrefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
      for (let j = strs[i].length; j >= 0; j--) {
        if (strs[i].indexOf(commonPrefix) !== 0) {
          commonPrefix = commonPrefix.slice(0, j);
        }
        if (!commonPrefix) return "";
      }
    }
    return commonPrefix;
  },
  // 20. Valid Parenthesis
  validParens: (s) => {
    if (s.length < 2) return false;
    const map = {
      ")": "(",
      "]": "[",
      "}": "{",
    };
    const left = [];
    for (let i = 0; i < s.length; i++) {
      if (!map[s[i]]) {
        left.push(s[i]);
      } else {
        if (left.pop() !== map[s[i]]) {
          return false;
        }
      }
    }
    return left.length === 0;
  },
  //28. Implement strStr()
  strStr: (haystack, needle) => {
    if (needle.length < 1) {
      return 0;
    }
    for (let i = 0; i < haystack.length; i++) {
      if (haystack.slice(i, i + needle.length) == needle) {
        return i;
      }
    }

    return -1;
  },
};

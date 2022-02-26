module.exports = {
  //9. Palindrome Number - check if a number 'x' is a palindrome
  isPalindrome: (x) => {
    // if using string was allowed
    const reverse = x
      .toString()
      .split("")
      .reverse()
      .join("");
    return x.toString() === reverse;
  },
  //13. Roman to Int
  //attrocious solution....didn't check well enough how to simplify or for a pattern in repeated areas
  romanToInt: (s) => {
    const map = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    let total = 0;
    for (let i = 0; i < s.length; i++) {
      if (i + 1 < s.length) {
        switch (s[i]) {
          case "I":
            s[i + 1] === "V" || s[i + 1] === "X"
              ? (total -= map[s[i]])
              : (total += map[s[i]]);
            break;
          case "X":
            s[i + 1] === "L" || s[i + 1] === "C"
              ? (total -= map[s[i]])
              : (total += map[s[i]]);
            break;
          case "C":
            s[i + 1] === "D" || s[i + 1] === "M"
              ? (total -= map[s[i]])
              : (total += map[s[i]]);
            break;
          default:
            total += map[s[i]];
        }
      } else {
        total += map[s[i]];
      }
    }
    return total;
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
};

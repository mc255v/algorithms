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
  /*
  14. Longest Common Prefix
  first pass through did horizontal approach, vertical would be better with less iterations, both O(n^2)

  longestCommonPrefix: (strs) => {
    let lcp = strs[0];
    let tmp = ''
    for(let i = 1; i < strs.length; i++) {
        for(let j = 0; j < strs[i].length; j++) {
            if(strs[i][j] === lcp[j]) {
                tmp += strs[i][j]
            } else {
                break;
            }
        }
        lcp = tmp
        tmp = ''
    }
    return lcp;
  },
  */
  longestCommonPrefix: (strs) => {
    let lcp = "";
    for (let i = 0; i < strs[0].length; i++) {
      const char = strs[0][i];
      for (let j = 1; j < strs.length; j++) {
        if (strs[j][i] !== char) {
          return lcp;
        }
      }
      lcp += char;
    }
    return lcp;
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
  //125. String is valid palindrome after removing all non-alphanumeric characters and converting to lowercase
  isStringPalindrome: (s) => {
    const str = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let l = 0;
    let r = str.length - 1;
    while (l < r) {
      if (str[l] !== str[r]) {
        return false;
      }
      l++;
      r--;
    }
    return true;
  },
  //242. Are the two strings valid anagrams, O(n + m) time and size
  isAnagram: (s, t) => {
    if (s.length != t.length) {
      return false;
    }
    const sMap = {};
    const tMap = {};
    for (let i = 0; i < s.length; i++) {
      if (sMap[s[i]]) {
        sMap[s[i]]++;
      } else {
        sMap[s[i]] = 1;
      }
      if (tMap[t[i]]) {
        tMap[t[i]]++;
      } else {
        tMap[t[i]] = 1;
      }
    }
    for (const key in sMap) {
      if (sMap[key] !== tMap[key]) {
        return false;
      }
    }
    return true;
  },
};

/*
 * Step 1:
 * Write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   Make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 *  Ignore non-bracket characters
 *
 * Example:
 *  balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 *  balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 * Step 4:
 *  Handle bad inputs
 *
 * Example:
 *  balancedParens({a: 1, b: 2}); // false
 *  balancedParens(""); // false
 *
 */
const balancedParens = (text) => {
  //check for not a string or empty
  if (typeof text !== "string" || text.length === 0) {
    return false;
  }
  // create an array for opening brackets
  const opening = [];
  // create a map to check against
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  // loop through string
  for (const char of text) {
    if (char === "(" || char === "[" || char === "{") {
      opening.push(char);
    }
    if (char === ")" || char === "]" || char === "}") {
      const lastBracket = opening[opening.length - 1];
      if (lastBracket === undefined) {
        return false;
      }
      if (map[lastBracket] === char) {
        opening.pop();
      } else {
        return false;
      }
    }
  }

  if (opening.length > 0) {
    return false;
  }
  return true;
};

module.exports = { balancedParens };

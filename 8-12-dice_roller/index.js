/*
  Imagine you are playing a board game. You roll a 6-faced dice and move forward the same
  number of spaces that you rolled. If the finishing point is “n” spaces away from the starting
  point, please implement a program that calculates how many possible ways there are to
  arrive exactly at the finishing point.

  To make it challenging, let's make it work fast even for bigger n.

  Now Javascript only supports 53-bit Integers. I'll tell you upfront that what we will be looking for requires much more than that.
  To assist us we will make use of bignumber.js to create arbitrary precision numbers.
  https://github.com/MikeMcl/bignumber.js/
  You will have to install it yourself by running 
    yarn add bignumber.js

  Don't forget to handle your edge cases! A negative n should throw an Error
*/
const { BigNumber } = require("bignumber.js");

/**
 * Calculates how many possible ways there are to arrive exactly at the finishing point n spaces away.
 * @param {number} n
 * @returns {BigNumber} Number of combinations to get to space n spaces away
 */
const diceRoller = (n) => {
  //trying to breakdown and understand the problem but not sure how to go about it
  let one = 0
  let two = 0
  let three = 0
  let four = 0
  let five = 0
  let six = 1
  let result = 0
  for (let i = 0; i <= n; i++) {
    ways = one + two + three + four + five + six;

    if (i>0) {
      one = two;
      two = three;
      three = four;
      four = five;
      five = six;
      six = ways;
    }

    result = ways
  }
  console.log(result);
  return BigNumber(result);
};

module.exports = {
  diceRoller,
};

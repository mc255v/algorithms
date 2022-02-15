/*
  Create a program to decipher a seven segment display, commonly seen on many older electronic devices.

  Input Description
  You will receive 3 lines of input, with each line being 27 characters long (representing 9 total numbers), 
  with the digits spread across the 3 lines. Your job is to return the represented digits. You don't need to account 
  for odd spacing or missing segments.

  Output Description
  Your program should print the numbers contained in the display.

  Some tests with examplex have been written for you already so you get an idea what input looks like.
*/

const interpretDisplay = (display) => {
  const digitMap = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
  }
  const result = display.split("\n").map(string => string.match(/.{1,3}/g));
  console.log(result);
};

module.exports = { interpretDisplay };

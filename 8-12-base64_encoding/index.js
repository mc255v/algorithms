// Converts the value of the String to and from Base64 using the ASCII character set.
// https://en.wikipedia.org/wiki/Base64#Examples
//
// Usage:
// "STRING OBJECT".toBase64()
//
// Examples:
// 'this is a string!!'.toBase64();
// => 'dGhpcyBpcyBhIHN0cmluZyEh'
//
// Additional Notes:
// You don't have to consider the method doesn't take multi bytes chars as input: for simplicity's sake.
// If you are interested in the way to convert the String containing multi bytes chars, refer to the following URL.
// https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_.22Unicode_Problem.22

const BASE64_ALPHABET_TABLE =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const BASE64_ALPHABET_PAD = "=";

/* eslint-disable no-extend-native */
String.prototype.toBase64 = function() {
  let binaryArray = []
  for (let char of this) {
    let binary = char.charCodeAt().toString(2)
    if (binary.length !== 8) {
      binary = binary + "0".repeat(8 - binary.length);
    }
    console.log(binary)
    binaryArray.push(binary)
  }
  binaryString = binaryArray.join("")
  console.log(binaryString.length);
};

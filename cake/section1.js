const takeOut = [1, 3, 5];
const dineIn = [2, 4, 6];
const served = [1, 2, 4, 6, 5, 3];

//first implementation
// function isFirstComeFirstServed(takeOut, dineIn, served) {
//   if (served.length !== (takeOut.length + dineIn.length)) {
//     return false;
//   }
//   let outPos = 0;
//   let inPos = 0;
//   let servedInOrder = true;
//   served.forEach(num => {
//     if (num === takeOut[outPos]) {
//       outPos++;
//     } else if (num === dineIn[inPos]) {
//       inPos++;
//     } else {
//       servedInOrder = false;
//     }
//   })
//   return servedInOrder;
// }

//recursive try
function isFirstComeFirstServed(takeOut, dineIn, served) {
  console.log(served);
  if (served.length === 0) {
    return true;
  }
  if (takeOut.length && served[0] === takeOut[0]) {
    return isFirstComeFirstServed(takeOut.slice(1), dineIn, served.slice(1));
  } else if (dineIn.length && served[0] === dineIn[0]) {
    return isFirstComeFirstServed(takeOut, dineIn.slice(1), served.slice(1));
  } else {
    return false;
  }
}

console.log(isFirstComeFirstServed([55, 9], [7, 8], [1, 7, 8, 9]));

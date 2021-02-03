// Problem: can two movies exactly fill up the flight length
//first implementation
function chooseTwo(flightLength, movieLengths) {
  if(movieLengths.length < 2) {
    return false;
  }
  const movieSet = new Set(movieLengths);
  let result = false;
  movieLengths.forEach(time => {
    if (movieSet.has(Math.abs(time - flightLength))) {
      result = true;
    }
  });

  return result;
}
//second implementation
function canTwoMoviesFillFlight(movieLengths, flightLength) {
  if(movieLengths.length < 2) {
    return false;
  }
  const movieLengthsSeen = new Set();

  for (let i = 0; i < movieLengths.length; i++) {
    if (movieLengthsSeen.has(Math.abs(movieLengths[i] - flightLength))) {
      return true;
    }

    movieLengthsSeen.add(movieLengths[i]);
  }

  return false;
}

//Problem: check if any permutation of a string is a palindrome
//first implementation
function hasPalindromePermutation(theString) {
  const letters = {}
  let odd = 0;
  for (let c of theString) {
    letters[c] ? letters[c]++ : letters[c] = 1;
  }
  for (let key in letters) {
    if (letters[key] % 2 !== 0 ) {
      odd++;
    }
  }
  if (odd > 1) {
    return false
  }
  return true;
}
// after hints
function permutationPalindrome(theString) {
  const unpairedCharacters = new Set();
  for (let char of theString) {
    if (unpairedCharacters.has(char)) {
      unpairedCharacters.delete(char);
    } else {
      unpairedCharacters.add(char);
    }
  }
  return unpairedCharacters.size <= 1;
}
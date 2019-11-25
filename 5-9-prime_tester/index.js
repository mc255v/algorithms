/*
    A prime number is a whole number that has no other divisors other than itself and 1.
    
    Step1:
    Write a function that accepts a number and returns true if it's a prime number, false if it's not.
    
    Example:
    console.log(primeTester(5)) // true
    console.log(primeTester(1)) // false
    console.log(primeTester(-1)) // false
    console.log(primeTester(null)) // false
    */

const primeTester = function(n) {
    if (n < 2 || !Number.isInteger(n)) return false
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false
      }
    }
    return true
};

/* 
    Step2:
    Write a function that generates a list of all prime numbers in a user-specified range (inclusive). If you're not quite sure where to start, check out the Sieve of Eratosthenes on Wikipedia.
    
    Example: 
    console.log(primeSieve(4, 20)) // [5, 7, 11, 13, 17, 19]
    console.log(primeSieve(1, 2)) // [2]
    
    IMPORTANT! Throw a specific error according to the condition
    --- Range Error ---
    console.log(primeSieve(20, 4)) // RangeError, "Invalid input range"
    console.log(primeSieve(0, 1)) // RangeError, "Invalid input range"
    console.log(primeSieve(-1, 1)) // RangeError, "Invalid input range"
    --- Type Error ---
    console.log(primeSieve()) // TypeError, "Invalid input type"
    console.log(primeSieve(5)) // TypeError, "Invalid input type"
    console.log(primeSieve('stringStart', 5)) // TypeError, "Invalid input type"
    console.log(primeSieve(primeSieve(null, undefined))) // TypeError, "Invalid input type"

    CHALLENGE:
    Performance test is recommended! Excution time for primeSieve(1, 2000000) shoule be less than 3secs!
  */

const primeSieve = function(start, end) {
  if (!Number.isInteger(start) 
  || !Number.isInteger(end)
  ||  arguments.length < 2) {
    throw 'TypeError';
  }
  if (end <= start
    || start < 1) {
    throw 'RangeError';
  }
  const result = [];
  for (let i = start; i <= end; i++) {
    if(primeTester(i)) {
      result.push(i);
    }
  }

  return result;
};

module.exports = { primeTester, primeSieve };

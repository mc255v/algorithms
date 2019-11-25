/*
 * Write a function that generates every sequence of throws a single
 * player could throw over a three-round game of rock-paper-scissors.
 *
 * Your output should look something like:
 *   [["rock", "rock", "rock"],
 *    ["rock", "rock", "paper"],
 *    ["rock", "rock", "scissors"],
 *    ["rock", "paper", "rock"],
 *    ...etc...
 *   ]
 *
 * After you finish it, change it in order to return answers for any number of rounds.
 * Example:
 *   rockPaperScissors(4); // => [['rock', 'rock', 'rock', 'rock'], etc...]
 */
const rockPaperScissors = (rounds = 3) => {
  const choices = ["rock", "paper", "scissors"];
  const result = [];
  function recurse(arr, num) {
    if (num === 0) {
      result.push(arr.slice());
      return;
    }
    choices.forEach((choice) => {
      arr.push(choice);
      recurse(arr, num - 1);
      arr.pop();
    });
  }
  recurse([], rounds);
  return result;
};

module.exports = { rockPaperScissors };

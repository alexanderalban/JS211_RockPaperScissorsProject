// uses strict mode so strings are not coerced, variables are not hoisted, etc...
"use strict";

//***********This Javascript passes all required tests. The javascript running the website is
//website-main.js */
// the function that will be called by the unit test below
const rockPaperScissors = (hand1, hand2) => {
  // Write code here
  // Use the unit test to see what is expected

  hand1 = hand1.toLowerCase().trim();
  hand2 = hand2.toLowerCase().trim();

  ///scissor typo test
  if (
    hand1 === "scisors" ||
    hand1 === "sissors" ||
    hand1 === "sisors" ||
    hand1 === "scissor"
  ) {
    hand1 = "scissors";
  }

  if (
    hand2 === "scisors" ||
    hand2 === "sissors" ||
    hand2 === "sisors" ||
    hand2 === "scissor"
  ) {
    hand2 = "scissors";
  }

  if (hand1 === "" && hand2 === "") {
    return "Please enter Rock, Paper, or Scissors!";
  } else if (hand1 === "lizard" ||
    hand1 === "spock" ||
    hand2 === "lizard" ||
    hand2 === "spock") {
    return "We keep it old school here! Please enter Rock, Paper, or Scissors."
  } else if (hand1 === hand2) {
    return "It's a tie!";
  } else if (hand1 === "" || hand2 === "") {
    return "Someone didn't throw down! Try again!";
  } else if (hand1 === "rock") {
    if (hand2 === "scissors") {
      return "Hand one wins!";
    } else if (hand2 = "paper") {
      return "Hand two wins!";
    }
  } else if (hand1 === "paper") {
    if (hand2 === "rock") {
      return "Hand one wins!";
    } else if (hand2 === "scissors") {
      return "Hand two wins!";
    }
  } else if (hand1 === "scissors") {
    if (hand2 === "paper") {
      return "Hand one wins!";
    } else if (hand2 = "rock") {
      return "Hand two wins!";
    }
  } else {
    return "Someone didn't throw down! Try again!";
  }
};

// brings in the assert module for unit testing
const assert = require("assert");
// brings in the readline module to access the command line
const readline = require("readline");
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
function getPrompt() {
  rl.question("hand1: ", (answer1) => {
    rl.question("hand2: ", (answer2) => {
      console.log(rockPaperScissors(answer1, answer2));
      getPrompt();
    });
  });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === "function") {
  // most are notes for human eyes to read, but essentially passes in inputs then compares
  //if the function you built return the expected output.
  describe("#rockPaperScissors()", () => {
    it("should detect a tie", () => {
      assert.equal(rockPaperScissors("rock", "rock"), "It's a tie!");
      assert.equal(rockPaperScissors("paper", "paper"), "It's a tie!");
      assert.equal(rockPaperScissors("scissors", "scissors"), "It's a tie!");
    });
    it("should detect which hand won", () => {
      assert.equal(rockPaperScissors("rock", "paper"), "Hand two wins!");
      assert.equal(rockPaperScissors("paper", "scissors"), "Hand two wins!");
      assert.equal(rockPaperScissors("rock", "scissors"), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors("rOcK", " paper "), "Hand two wins!");
      assert.equal(rockPaperScissors("Paper", "SCISSORS"), "Hand two wins!");
      assert.equal(rockPaperScissors("rock ", "sCiSsOrs"), "Hand one wins!");
    });
    // ****************ADDITIONAL TESTS TO PASS! FOR PART 1: UNIT TESTS
    it("What if a user adds a space before or after their input?", () => {
      assert.equal(rockPaperScissors(" rock ", " paper "), "Hand two wins!");
      assert.equal(rockPaperScissors(" paper ", " scissors"), "Hand two wins!");
      assert.equal(rockPaperScissors("rock ", " scissors "), "Hand one wins!");
    });
    it("What if a user hit ENTER before typing in an input?", () => {
      assert.equal(rockPaperScissors("", " paper"), "Someone didn't throw down! Try again!");
      assert.equal(rockPaperScissors("rock", ""), "Someone didn't throw down! Try again!");
      assert.equal(rockPaperScissors("", ""), "Please enter Rock, Paper, or Scissors!");
    });
    it("What if a user misspells scissors?", () => {
      assert.equal(rockPaperScissors("scisors", "sissors"), "It's a tie!");
      assert.equal(rockPaperScissors("sisors", "scissor"), "It's a tie!");
      assert.equal(rockPaperScissors("sisors", "rock"), "Hand two wins!");
    });
    it("What if the user enters the newer variations 'lizard' or 'spock'?", () => {
      assert.equal(rockPaperScissors("lizard", "spock"), "We keep it old school here! Please enter Rock, Paper, or Scissors.");
      assert.equal(rockPaperScissors("spock", "lizard"), "We keep it old school here! Please enter Rock, Paper, or Scissors.");
      assert.equal(rockPaperScissors("spock", "spock"), "We keep it old school here! Please enter Rock, Paper, or Scissors.");
    });
  });
} else {
  // always returns ask the user for another input
  getPrompt();
}

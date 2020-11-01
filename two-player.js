///******This javascript runs the front-end site for two-player. The main.js passes all tests. */


///Allows "Enter" to activate the "Go!" button in the text fields


let textfield = document.getElementById('p1-selection');
textfield.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        console.log("click");
        event.preventDefault();
        document.getElementById("go-button").click();
    }
});



//***********Two Player mode specific! Connects to text-box for selection */
let textfield2 = document.getElementById('p2-selection');
textfield2.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        console.log("click");
        event.preventDefault();
        document.getElementById("go-button").click();
    }
});


////Main Code, runs the game/hands

const rockPaperScissors = (hand1, hand2) => {


    hand1 = document.getElementById("p1-selection").value.toLowerCase().trim();
    hand2 = document.getElementById("p2-selection").value.toLowerCase().trim();

    ////helps with scissor typos
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

    /////

    if (hand1 === "" && hand2 === "") {
        document.getElementById("display-result").innerHTML = "Please enter Rock, Paper, or Scissors!";
        return "Please enter Rock, Paper, or Scissors!";
    } else if (hand1 === "lizard" ||
        hand1 === "spock" ||
        hand2 === "lizard" ||
        hand2 === "spock") {
        document.getElementById("right-hand").src = "./images/spock-hand.png";
        document.getElementById("left-hand").src = "./images/spock-hand.png";
        document.getElementById("display-result").innerHTML = "Nice try! Please enter Rock, Paper, or Scissors."
        return "We keep it old school here! Please enter Rock, Paper, or Scissors."
    } else if (hand1 === hand2) {
        document.getElementById("right-hand").src = "./images/thumbs-up-right.png";
        document.getElementById("left-hand").src = "./images/thumbs-up-left.png";
        document.getElementById("display-result").innerHTML = "It's a tie!"
        return "It's a tie!"
    } else if (hand1 === "" || hand2 === "") {
        document.getElementById("display-result").innerHTML = "Someone didn't throw down! Try again!"
        return "Someone didn't throw down! Try again!"
    } else if (hand1 === "rock") {
        document.getElementById("left-hand").src = "./images/hand-rock.png";
        if (hand2 === "scissors") {
            document.getElementById("right-hand").src = "./images/hand-scissors-right.png";
            document.getElementById("display-result").innerHTML = "Player 1 Wins!"
            return "Hand one wins!"
        } else if (hand2 = "paper") {
            document.getElementById("right-hand").src = "./images/hand-paper-right.png";
            document.getElementById("display-result").innerHTML = "Player 2 Wins!"
            return "Hand two wins!"
        }
    } else if (hand1 === "paper") {
        document.getElementById("left-hand").src = "./images/hand-paper-left.png";
        if (hand2 === "rock") {
            document.getElementById("right-hand").src = "./images/hand-rock-player-two.png";
            document.getElementById("display-result").innerHTML = "Player 1 Wins!"
            return "Hand one wins!"
        } else if (hand2 === "scissors") {
            document.getElementById("right-hand").src = "./images/hand-scissors-right.png";
            document.getElementById("display-result").innerHTML = "Player 2 Wins!"
            return "Hand two wins!"
        }
    } else if (hand1 === "scissors") {
        document.getElementById("left-hand").src = "./images/hand-scissors-left.png";
        if (hand2 === "paper") {
            document.getElementById("right-hand").src = "./images/hand-paper-right.png";
            document.getElementById("display-result").innerHTML = "Player 1 Wins!"
            return "Hand one wins!"
        } else if (hand2 = "rock") {
            document.getElementById("right-hand").src = "./images/hand-rock-player-two.png";
            document.getElementById("display-result").innerHTML = "Player 2 Wins!"
            return "Hand two wins!"
        }
    } else {
        document.getElementById("display-result").innerHTML = "Someone didn't throw down! Try again!"
        return "Someone didn't throw down! Try again!"
    }

};
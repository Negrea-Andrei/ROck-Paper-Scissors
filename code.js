/*Make the computer pick a random choice */
function getComputerChoice() {
    let Choices = ['rock', 'paper', 'scissors'];
    let rand = Math.floor(Math.random() * Choices.length);
    return Choices[rand];
}

const rock = document.querySelector("rock");
const paper = document.querySelector("paper");
const scissors = document.querySelector("scissors");


function round(ComputerChoices, PlayerChoice) {

    if (ComputerChoices == PlayerChoice) {
        PlayerScore = PlayerScore + 0;
        ComputerScore = ComputerScore + 0;
    }
    /*Computer scores */
    else if (ComputerChoices == 'rock' && PlayerChoice == 'scissors') {
        ComputerScore = ComputerScore + 1;
    }
    else if (ComputerChoices == 'scissors' && PlayerChoice == 'paper') {
        ComputerScore = ComputerScore + 1;
    }
    else if (ComputerChoices == 'paper' && PlayerChoice == 'rock') {
        ComputerScore = ComputerScore + 1;
    }
    /*Players scores */
    else {
        PlayerScore++;
    }
    /*Display the score and choices */
    console.log('PlayerScore: ' + PlayerScore);
    console.log(PlayerChoice);
    console.log('ComputerScore: ' + ComputerScore);
    console.log(ComputerChoices);
}


/*Set player score */
let PlayerScore = 0;


/*Set Computer score */
let ComputerScore = 0;


rock.addEventListener("click", () => {
    round(getComputerChoice(), "rock")
});

paper.addEventListener("click", () => {
     round(getComputerChoice(), "paper")
});

scissors.addEventListener("click", () => {
    round(getComputerChoice(), "scissors")
});      


/*Declare the winner */
if (PlayerScore > ComputerScore) {
    alert("Player win!");
}
else if (PlayerScore < ComputerScore) {
    alert("Player lost!");
}
else {
    alert("It's a Draw!");
}

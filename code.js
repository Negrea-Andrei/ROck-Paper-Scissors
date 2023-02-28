const buttons = document.querySelectorAll('.choices button')
const results = document.querySelector('.container');

/*Set player score */
let PlayerScore = 0;

/*Set Computer score */
let ComputerScore = 0;

/*Create a new node for resolts */
const scores = document.createElement('div');
scores.classList.add('scores');
scores.style.cssText = 'height: 263px; display: flex; align-items: center; flex-direction: column;color: lime; background: #F06060; font-size: 50px'

results.appendChild(scores);

/* Code that will be executet when user clicks a button */
function round(event) {

    const PlayerChoice = event.target.className;

    /*Make the computer pick a random choice */
    function getComputerChoice() {
        let Choices = ['rock', 'paper', 'scissors'];
        let rand = Math.floor(Math.random() * Choices.length);
        return Choices[rand];
    }

    /*Set computer choice */
    const ComputerChoices = getComputerChoice();

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
    
    /*add text with informations to the node */
    scores.textContent = `Player points: ${PlayerScore} Computer points: ${ComputerScore} Player chose ${PlayerChoice} Computer chose ${ComputerChoices}`;


    /*Declare the winner */
    if (PlayerScore == 5) {
        PlayerScore = 0;
        ComputerScore = 0;
        scores.textContent = `Player win!`;
    }
    else if (ComputerScore == 5) {
        PlayerScore = 0;
        ComputerScore = 0;
        scores.textContent = `Player lost!`;
    }
}

buttons.forEach(button => button.addEventListener('click', round));
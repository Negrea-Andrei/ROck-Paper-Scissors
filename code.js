/*Make the computer pick a random choice */
function getComputerChoice() {
    let Choices = ['rock', 'paper', 'scissors'];
    let rand = Math.floor(Math.random() * Choices.length);
    return Choices[rand];
}


function round(ComputerChoices, PlayerChoice) {
    if (ComputerChoices == PlayerChoice) {
        PlayerScore = PlayerScore + 0;
        ComputerScore = ComputerScore + 0;
    }
    /*Computer scores */
    else if (ComputerChoices == 'rock' && PlayerChoice.toLowerCase() == 'scissors') {
        ComputerScore = ComputerScore + 1;
    }
    else if (ComputerChoices == 'scissors' && PlayerChoice.toLowerCase() == 'paper') {
        ComputerScore = ComputerScore + 1;
    }
    else if (ComputerChoices == 'paper' && PlayerChoice.toLowerCase() == 'rock') {
        ComputerScore = ComputerScore + 1;
    }
    /*Players scores */
    else {
        PlayerScore++;
    }
}


/*Set player score */
let PlayerScore = 0;


/*Set Computer score */
let ComputerScore = 0;


function PlayGame() {
    /*Set a loop for 5 rounds */
    for (i = 0; i < 5; i++) {
        /*Set computer choice */
        let ComputerChoices = getComputerChoice();
        /*Set player choice */
        let statement = false;
        let PlayerChoice ;
        while (!statement) {
            let Choice = prompt("Please select rock, paper or scissors");
            PlayerChoice = Choice.toLowerCase();
            if ((PlayerChoice == 'rock') || (PlayerChoice == 'paper') || (PlayerChoice == 'scissors')) {
                statement = true;
            }
            /*If the player chose a different element not rock, paper or scissors */
            else {
                alert("You choose an invalid choice. Please pick again");
            }
        }
        /*Compare the choices */
        round(ComputerChoices, PlayerChoice)
        /*Display the score and choices */
        console.log('PlayerScore: ' + PlayerScore);
        console.log(PlayerChoice);
        console.log('ComputerScore: ' + ComputerScore);
        console.log(ComputerChoices);
    }
}


/*Execute the game */
PlayGame();


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
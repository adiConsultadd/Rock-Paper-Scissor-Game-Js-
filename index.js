const prompt = require("prompt-sync")();

let playerScore = 0; //Stores the score of the player
let computerScore = 0; //Stores the score of computer
let totalGames = 3; //Total number of rounds that you want the game to last
let gameNumber = 1; //Stores the round which is taking place

// Choosing for the computer
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

//Check if the user has entered valid input or not
function validateInput(playerChoice){
    if(['rock','paper','scissors'].includes(playerChoice)===true){
        return true
    }
    else{
        console.log("Enter a valid move")
        return false
    }
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    console.log(`Game ${gameNumber}: You chose ${playerChoice}, Computer chose ${computerChoice}`);
    
    // Determining the winner
    if(playerChoice === computerChoice){
        console.log("It's a tie!");
    } 
    else if((playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')) 
    {
        console.log("You win this round!");
        playerScore++;
    } 
    else{
        console.log("Computer wins this round!");
        computerScore++;
    }
}

function playGame() {
    console.log("Welcome to Rock Paper Scissors!");
    console.log("Best of 3 games wins");

    while(gameNumber<=totalGames) {
        let playerChoice = prompt(`Game ${gameNumber}/${totalGames}: Enter rock, paper, or scissors:`);
        playerChoice = playerChoice.trim().toLowerCase()

        if(validateInput(playerChoice)===true){
            playRound(playerChoice)
            console.log(`Score - You: ${playerScore}, Computer: ${computerScore}`);
            gameNumber++
        }
    }
    
    console.log("\n----- FINAL RESULTS -----");
    console.log(`Final Score - You: ${playerScore}, Computer: ${computerScore}`);
    
    if (playerScore > computerScore) {
        console.log("Congratulations! You won the match!");
    } else if (computerScore > playerScore) {
        console.log("Sorry! Computer won the match!");
    } else {
        console.log("It's a tie match!");
    }
}

// Start the game
playGame()
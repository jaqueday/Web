function playGame() {
    alert("Let's play Rock Paper Scissors!");
    // enable the buttons
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
    // event listeners by id
    document.getElementById("rock").onclick = function() { userChoice("rock"); };
    document.getElementById("paper").onclick = function() { userChoice("paper"); };
    document.getElementById("scissors").onclick = function() { userChoice("scissors"); };
    // Reset the play count and win flag
    playCount = 0;
    win = false;
}

function userChoice(userSelection) {
    if (win==false && playCount < 3) {
        const computerSelection = getComputerChoice(); // Run the function to get the computer choice
        const result = determineWinner(userSelection, computerSelection); // Run the function to determine the winner
        document.getElementById("result").innerText = `You chose ${userSelection}. The computer chose ${getComputerChoice()}. ${result}`;

        playCount++; // Increment the counter

        if (result === "You won!") {
            win = true;
            // Disable buttons as user has won 
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;
            // Display message
            document.getElementById("count").innerText = "End of the Game! You won!";
        } else if (playCount >= 3) {
            // Disable buttons after 3 plays
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;
            // Display message
            document.getElementById("count").innerText = "You've already played 3 times!";
        }
    }
}

// function that randomly selects the computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// function that determines the winner with if statements
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    else if ((userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")) {
        return "You won!";
    }
    else if ((userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "scissors") ||
        (userChoice == "scissors" && computerChoice === "rock")) {
        return "The computer won!";
    }
}

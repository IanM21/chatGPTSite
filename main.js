const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultTitle = document.getElementById("result-title");
const resultDescription = document.getElementById("result-description");
const resultBox = document.getElementById("result-box");

rockButton.addEventListener("click", function() {
    playGame("rock");
});

paperButton.addEventListener("click", function() {
    playGame("paper");
});

scissorsButton.addEventListener("click", function() {
    playGame("scissors");
});

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);

    resultTitle.innerHTML = result;
    resultDescription.innerHTML = "You chose " + playerChoice + ", the computer chose " + computerChoice + ".";
    resultBox.style.display = "block";
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Draw!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You Win!";
    } else {
        return "You Lose!";
    }
}

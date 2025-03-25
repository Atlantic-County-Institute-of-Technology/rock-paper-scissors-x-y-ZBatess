const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
const coworker = document.getElementById("annoyingcoworker");
const laptop = document.getElementById("laptop");
const playerOptions = ['rock', 'paper', 'scissors', 'coworker', 'laptop'];
const computerOptions = ['rock', 'paper', 'scissors', 'coworker', 'laptop']

console.log(coworker)

let playerScore = 0;
let computerScore = 0;
let playChoice = 0;
let cpuChoice = 0;

  
  
rock.addEventListener("click", () => {
  playerChoice(1);
})
paper.addEventListener("click", () => {
  playerChoice(2);
})
scissors.addEventListener("click", () => {
  playerChoice(3);
})
coworker.addEventListener("click", () => {
  playerChoice(4);
})
laptop.addEventListener("click", () => {
  playerChoice(5);
})

scissors.addEventListener("click", playerScissors)
paper.addEventListener("click", playerPaper)
coworker.addEventListener("click", Playerannoyingcoworker)
laptop.addEventListener("click", playerLaptop)
  
function playerChoice(choice) {
  playChoice = choice;
}

// TODO: Make a CPU Choice function that has the CPU Choose a random number from 1-5
function cpuChoose() {
  Math.floor(Math.random() * 5) + 1;
}

// TODO: Make a function for "playing the game" that takes the playChoice and cpuChoice and compares them
function playGame() {
}
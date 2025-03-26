const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
const coworker = document.getElementById("annoyingcoworker");
const laptop = document.getElementById("laptop");
const playerOptions = ['rock', 'paper', 'scissors', 'coworker', 'laptop'];
const computerOptions = ['rock', 'paper', 'scissors', 'coworker', 'laptop']
let player = document.getElementById("player")
let playerpick = 0
let player_score = document.getElementById("playerScore")
let playerwins = 0
let computer = document.getElementById("computer")
let result = document.getElementById("result")
let cpu_score = document.getElementById("computerScore")
let cpuwins = 0

let playerScore = 0;
let computerScore = 0;
let playChoice = 0;
let cpuChoice = 0;


scissors.addEventListener("click", playerScissors)
paper.addEventListener("click", playerPaper)
coworker.addEventListener("click", Playerannoyingcoworker)
laptop.addEventListener("click", playerLaptop)
  
function playerChoice(choice) {
  playChoice = choice;
}

// TODO: Make a CPU Choice function that has the CPU Choose a random number from 1-5
function computerChoice() {
  Math.floor(Math.random() * 4.99) + 1;
}

// TODO: Make a function for "playing the game" that takes the playChoice and cpuChoice and compares them
function pickpaper() {
  player.innerHTML = '<src="buttons paper" alt="✋" class="display">';
   playerpick = 1
  cpuchoice = computerchoice()
}
function papercheck1(){
  if (cpuchoice == 1 ) {
      computer.innerHTML = '<src="buttons paper" alt="✋" class="cpu_display">';
      result.innerHTML = "its a tie^^";
  }
}
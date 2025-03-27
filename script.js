const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
const coworker = document.getElementById("annoyingcoworker");
const laptop = document.getElementById("laptop");
const playerOptions = ['rock', 'paper', 'scissors', 'coworker', 'laptop'];
const computerOptions = ['rock', 'paper', 'scissors', 'coworker', 'laptop']
let player = document.getElementById("player")
let player_score = document.getElementById("playerScore")

let computer = document.getElementById("computer")
let result = document.getElementById("result")
let cpu_score = document.getElementById("computerScore")


let playerScore = 0;
let computerScore = 0;
let playerwins = 0
let cpuwins = 0
// let playChoice = 0;
// let cpuChoice = 0;

rock.addEventListener('click', () => {
  playgame(1, computerChoice())
})
paper.addEventListener('click', () => {
  playgame(2, computerChoice())
})
scissors.addEventListener('click', () => {
  playgame(3, computerChoice())
})
annoyingcoworker.addEventListener('click', () => {
  playgame(4, computerChoice())
})
laptop.addEventListener('click', () => {
  playgame(5, computerChoice())
})
  
function playerChoice(choice) {
  playChoice = choice;
}

// TODO: Make a CPU Choice function that has the CPU Choose a random number from 1-5
function computerChoice() {
  return Math.floor(Math.random() * 4.99) + 1;
}

function playgame(player, cpu) {
  console.log(`Player = ${player} || CPU = ${cpu}`);
  if (player == 1) {
    console.log("player chose rock")
    if (cpu == 2 || cpu == 4)
    {
      console.log("cpu loses")
      result.innerHTML = `You win! ${playerOptions[player-1]} beats ${computerOptions[cpu-1]}`;
      playerScore++;
    }
  }
}



























// TODO: Make a function for "playing the game" that takes the playChoice and cpuChoice and compares them
// function pickpaper() {
// computerchoice=computerChoice()
// if (computerchoice == 1) {
//   computer.innerHTML = 'paper'
//   Text.innerHTML = "you picked paper!!!"
// }
// }

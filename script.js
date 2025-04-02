// all assets for the main game

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

// player and cpu win/score defualt 
let playerScore = 0;
let computerScore = 0;
let playerwins = 0
let cpuwins = 0

// add click as an event listener and 
rock.addEventListener('click', () => {
  playgame(1, computerChoice())
})
paper.addEventListener('click', () => {
  playgame(2, computerChoice())
})
scissors.addEventListener('click', () => {
  playgame(3, computerChoice())
})
coworker.addEventListener('click', () => {
  playgame(4, computerChoice())
})
laptop.addEventListener('click', () => {
  playgame(5, computerChoice())
})
  
function playerChoice(choice) {
  playChoice = choice;
}

// CPU function that chooses a random number from 1-5
function computerChoice() {
  return Math.floor(Math.random() * 4.99) + 1;
}

// Displays which player option beats the CPU option and displays a win message for the player.
function playgame(player, cpu) {
  console.log(`Player = ${player} || CPU = ${cpu}`);
  if (player == 1) {
    console.log("player chose rock")
    if (cpu == 2 || cpu == 4)
    {
      console.log("cpu loses")
      result.innerHTML = `You win! ${playerOptions[player-1]} beats ${computerOptions[cpu-1]}`;
      p-count++;
    }  
  }
  else if (player == 2) {
    console.log(`Player = ${player} || CPU = ${cpu}`);
    console.log("player chose paper")
  
   if(cpu == 1 || cpu == 5)
    {
           console.log("cpu loses")
      result.innerHTML = `You win! ${playerOptions[player-1]} beats ${computerOptions[cpu-1]}`;
      playerScore++; 
    }
  }
  else if (player == 3) {
    console.log(`Player = ${player} || CPU = ${cpu}`);
    console.log("player chose scisors")
  
   if(cpu == 2 || cpu == 4)
    {
           console.log("cpu loses")
      result.innerHTML = `You win! ${playerOptions[player-1]} beats ${computerOptions[cpu-1]}`;
      playerScore++; 
    }
  }
  else if (player == 4) {
    console.log(`Player = ${player} || CPU = ${cpu}`);
    console.log("player chose coworker")
  
   if(cpu == 2 || cpu == 5)
    {
           console.log("cpu loses")
      result.innerHTML = `You win! ${playerOptions[player-1]} beats ${computerOptions[cpu-1]}`;
      playerScore++; 
    }
  }
  else if (player == 5) {
    console.log(`Player = ${player} || CPU = ${cpu}`);
    console.log("player chose coworker")
  
   if(cpu == 3 || cpu == 2)
    {
           console.log("cpu loses")
      result.innerHTML = `You win! ${playerOptions[player-1]} beats ${computerOptions[cpu-1]}`;
      playerScore++; 
    }
  }
  //CPU score
   if (cpu == 1) {
    console.log("cpu chose rock")
    if (player == 3 || player == 4)
    {
      console.log("player loses")
      result.innerHTML = `CPU wins! ${computerOptions[cpu-1]} beats ${playerOptions[player-1]}`;
      c-count++;
    }  
  }
  else if (cpu == 2) {
    console.log("cpu chose paper")
    if (player == 1 || player == 5)
    {
      console.log("player loses")
      result.innerHTML = `CPU wins! ${computerOptions[cpu-1]} beats ${playerOptions[player-1]}`;
      c-count++;
    }
  }
  else if (cpu == 3) {
    console.log("cpu chose scissors")
    if (player == 2 || player == 4)
    console.log("player loses")
    result.innerHTML = `CPU wins! ${computerOptions[cpu-1]} beats ${playerOptions[player-1]}`;
    c-count++;
  }
  if (cpu == 4) {
    console.log("cpu chose coworker")
    if (player == 2 || player == 5)
    console.log("player loses")
    result.innerHTML = `CPU wins! ${computerOptions[cpu-1]} beats ${playerOptions[player-1]}`;
    c-count++;
  }
  if (cpu == 5) {
    console.log("cpu chose laptop")
    if (player == 2 || player == 1)
    console.log("player loses")
    result.innerHTML = `CPU wins! ${computerOptions[cpu-1]} beats ${playerOptions[player-1]}`;
    c-count++;
  }
}

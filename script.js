const playGame = () => {
const rock = document.getElelemenyById("rock");
const scissors = document.getElelemenyById("scissors");
const paper = document.getElelemenyById("paper");
const coworker = document.getElelemenyById("annoyingcoworker");
const laptop = document.getElelemenyById("laptop");
const playerOptions = [rock, paper, scissors, coworker, laptop];
const computerOptions = ['rock', 'paper', 'scissors', coworker, laptop]
}

function getcomputerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'annoyingcoworker', 'laptop'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  playerOptions.forEach(option => {
    option.addEventListener('click', function () {
      const choiceNumber = Math.floor(Math.random() * 5);
const ComputerChoice = computerOptions[choiceNumber];
}
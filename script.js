
const playGame = () => {
const rock = document.getElelemenyById("rock");
const scissors = document.getElelemenyById("scissors");
const paper = document.getElelemenyById("paper");
const coworker = document.getElelemenyById("annoyingcoworker");
const laptop = document.getElelemenyById("laptop");
const playerOptions = [rock, paper, scissors, coworker, laptop];
const computerOptions = ['rock', 'paper', 'scissors', coworker, laptop]
}

const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;

  const playGame = () => {
      const rockBtn = document.querySelector('.rock');
      const paperBtn = document.querySelector('.paper');
      const scissorBtn = document.querySelector('.scissor');
      const annoyingcoworkerBtn = document.querySelector('.annoyingcoworker');
      const laptopBtn = document.querySelector('.laptop');
      const playerOptions = [rockBtn, paperBtn, scissorBtn, annoyingcoworkerBtn, laptopBtn ];
      const computerOptions = ['rock', 'paper', 'scissors', 'annoyingcoworker', 'laptop']

playerOptions.forEach(option => {
  option.addEventListener('click', function () {

  const winner = (player, computer) => {
    const result = document.querySelector('.result');
    const playerScoreBoard = document.querySelector('.p-count');
    const computerScoreBoard = document.querySelector('.c-count');
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if (player === computer) {
        result.textContent = 'Tie'
    }
    else if (player == 'rock') {
      if (computer == 'paper') {
        result.textContent = 'cpmputr won';
        
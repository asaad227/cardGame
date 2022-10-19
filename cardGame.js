var round = [];
var count = [];
// its need to declared outside the function scope to keep adding up the score and round
var playerPick;
var computerPick;

function cardGame(player, computer) {
  const plusSet = ["2", "3", "4", "5", "6"];
  const minusSet = ["7", "8", "9", "10"];
  const doubleDown = ["A", "K", "J", "Q"];
 

  for (let i = 0; i < player.length; i++) {
    const playerPlus = plusSet.includes(player[i]);
    const playerMinus = minusSet.includes(player[i]);
    const playerDouble = doubleDown.includes(player[i]);
    const computerPlus = plusSet.includes(computer[i]);
    const computerMinus = minusSet.includes(computer[i]);
    const computerDouble = doubleDown.includes(computer[i]);
   
    (playerPlus && computerMinus) ||
    (playerDouble && computerPlus) ||
    (playerDouble && computerMinus)
      ? count.push(1)
      : count;
    (computerPlus && playerMinus) ||
    (computerDouble && playerPlus) ||
    (computerDouble && playerMinus)
      ? count.push(-1)
      : count;
    (playerDouble && computerDouble) ||
    (playerMinus && computerMinus) ||
    (playerPlus && computerPlus)
      ? count.push(0)
      : count;

   round.push(1)
  }

  const result = count.reduce((a, b) => a + b, 0);

  
  console.log(result);
  console.log(round, count)
  document.querySelector(".round").innerHTML= round? `Round: ${round.length}`:`Round: 0`;
  document.querySelector(".total").innerHTML= count? `Player Score: ${result}`: `Score: 0`; 
}

const cards = [
  "A",
  "K",
  "Q",
  "J",
  "10",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
];

function playerP(){
    const a = Math.ceil(Math.random() * 12);
    const b = Math.ceil(Math.random() * 12);
  const c = Math.ceil(Math.random() * 12);
    playerPick = [cards[a],cards[b],cards[c]];
    document.querySelector(".playerPick").innerHTML =  `Player selection: ${playerPick}`;
 
}

function computerP(){
  const a = Math.ceil(Math.random() * 12);
  const b = Math.ceil(Math.random() * 12);
  const c = Math.ceil(Math.random() * 12);
    computerPick = [cards[a],cards[b],cards[c]];
    document.querySelector(".computerPick").innerHTML =  `Computer selection: ${computerPick}`
   
}

function getResult(){
    computerP()
  cardGame(playerPick, computerPick)

   
   
}

function reset(){
  document.querySelector(".computerPick").innerHTML =  "";
  document.querySelector(".playerPick").innerHTML =  "";
}

const btnPlayer = document.querySelector(".playerSelection");
const btnGame = document.querySelector(".cardGame");
const btnReset = document.querySelector(".reset");
btnPlayer.addEventListener("click", playerP);
btnGame.addEventListener("click", getResult);
btnReset.addEventListener("click", reset);


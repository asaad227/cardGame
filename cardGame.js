function cardGame(player, computer) {
  const plusSet = ["2", "3", "4", "5", "6"];
  const minusSet = ["7", "8", "9", "10"];
  const doubleDown = ["A", "K", "J", "Q"];
  const count = [];

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

   
  }

  const result = count.reduce((a, b) => a + b, 0);
  console.log(result);
 

  return result
    ? result > 0
      ? "Player Win"
      : "Computer Win"
    : result === 0
    ? "Draw"
    : "Draw";
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
var playerPick
function playerP(){
    const d = Math.ceil(Math.random() * 12);
    playerPick = [cards[d]];
    document.querySelector(".playerPick").innerHTML =  `Player selection: ${playerPick}`;
    console.log(playerPick)
}
var computerPick
function computerP(){
    const i = Math.ceil(Math.random() * 12);
    computerPick = [cards[i]];
    document.querySelector(".computerPick").innerHTML =  `Computer selection: ${computerPick}`
    console.log(computerPick);
}

function getResult(){
    computerP()
    const result = cardGame(playerPick, computerPick)
    document.querySelector(".result").innerHTML = `Result: ${result}`
   
   
}

function reset(){
  document.querySelector(".result").innerHTML = "";
  document.querySelector(".computerPick").innerHTML =  "";
  document.querySelector(".playerPick").innerHTML =  "";
}
const btnPlayer = document.querySelector(".playerSelection");

const btnGame = document.querySelector(".cardGame");
const btnReset = document.querySelector(".reset");
btnPlayer.addEventListener("click", playerP);

btnGame.addEventListener("click", getResult);
btnReset.addEventListener("click", reset);

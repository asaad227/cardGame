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

    // if(plusSet.includes(player[i]) && plusSet.includes(computer[i])){
    //     count.push(0)
    // }
    // if(minusSet.includes(player[i]) && minusSet.includes(computer[i])){
    //     count.push(0)
    // }

    // if(doubleDown.includes(player[i]) && minusSet.includes(computer[i])){
    //     count.push(2)
    // }
    // if(doubleDown.includes(player[i]) && plusSet.includes(computer[i])){
    //     count.push(2)
    // }

    // if(doubleDown.includes(computer[i]) && minusSet.includes(player[i])){
    //     count.push(-2)
    // }
    // if(doubleDown.includes(computer[i]) && plusSet.includes(player[i])){
    //     count.push(-2)
    // }

    // if(doubleDown.includes(computer[i]) && doubleDown.includes(player[i])){
    //     count.push(0)
    // }
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
    document.querySelector(".playerPick").innerHTML =  `${playerPick}`;
    console.log(playerPick)
}
var computerPick
function computerP(){
    const i = Math.ceil(Math.random() * 12);
    computerPick = [cards[i]];
    document.querySelector(".computerPick").innerHTML =  `${computerPick}`
    console.log(computerPick);
}

function getResult(){
    const result = cardGame(playerPick, computerPick)
    document.querySelector(".result").innerHTML = `${result}`
    console.log(result);
}

function reset(){
    location.reload()
}
const btnPlayer = document.querySelector(".playerSelection");
const btnComputer = document.querySelector(".computerSelection");
const btnGame = document.querySelector(".cardGame");
const btnReset = document.querySelector(".reset");
btnPlayer.addEventListener("click", playerP);
btnComputer.addEventListener("click", computerP);
btnGame.addEventListener("click", getResult);
btnReset.addEventListener("click", reset);

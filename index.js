var round = 0;
var count = [];
var playerWin = 0;
var computerWin = 0;
var draw = 0;
// its need to declared outside the function scope to keep adding up the score and round
var playerPick;
var computerPick;
var input;

function cardGame(player, computer) {
  const plusSet = ["2", "3", "4", "5", "6"];
  const minusSet = ["7", "8", "9", "10"];
  const doubleDown = ["A", "K", "J", "Q"];
  let playerPlus, playerMinus, computerPlus, computerMinus, playerDouble, computerDouble;
  for (let i = 0; i < player.length; i++) {
  playerPlus = plusSet.includes(player[i]);
  playerMinus = minusSet.includes(player[i]);
  playerDouble = doubleDown.includes(player[i]);
  computerPlus = plusSet.includes(computer[i]);
  computerMinus = minusSet.includes(computer[i]);
  computerDouble = doubleDown.includes(computer[i]);

    (playerPlus && computerPlus) ||
    (playerMinus && computerMinus) ||
    (playerDouble && computerDouble)
      ? draw++
      : count;
    (playerPlus && computerMinus) ||
    (playerDouble && computerPlus) ||
    (playerDouble && computerMinus)
      ? playerWin++
      : count;
    (playerPlus && computerDouble) ||
    (playerMinus && computerPlus) ||
    (playerMinus && computerDouble)
      ? computerWin++
      : count;
      if(plusSet.includes(player[i])){
        document.querySelector(".singlePoint").style.color = "green";
        document.querySelector(".pointOne").style = `color:green;`;

      }
      if(minusSet.includes(player[i])){
        document.querySelector(".minusPoint").style.color = "green";
        document.querySelector(".pointMinus").style = ` color: green;`; 
      }
      if(doubleDown.includes(player[i])){
        document.querySelector(".double").style.color = "green"
        document.querySelector(".pointTwo").style = ` color: green;`; 
      }
      if(plusSet.includes(computer[i])){
        document.querySelector(".singlePoint").style.color = "red";
        document.querySelector(".pointOne").style = ` color: red;`; 
      }
      if(minusSet.includes(computer[i])){
        document.querySelector(".minusPoint").style.color = "red";
        document.querySelector(".pointMinus").style = ` color: red;`; 
      }
      if(doubleDown.includes(computer[i])){
        document.querySelector(".double").style.color = "red";
        document.querySelector(".pointTwo").style =` color: red;`; 
      }
      if(doubleDown.includes(computer[i])&&doubleDown.includes(player[i])){
        document.querySelector(".double").style.color = "purple";
        document.querySelector(".pointTwo").style= ` color: purple;`; 
      }
      if(plusSet.includes(computer[i])&&plusSet.includes(player[i])){
        document.querySelector(".singlePoint").style.color = "purple";
        document.querySelector(".pointOne").style= ` color: purple;`; 
      }
      if(minusSet.includes(computer[i])&&minusSet.includes(player[i])){
        document.querySelector(".minusPoint").style.color = "purple";
        document.querySelector(".pointMinus").style =`font-size: xx-larger ; color: purple;`; 
      }
  }

  round++;

  document.querySelector(".round").innerHTML = `Game Round: ${round}`;
  document.querySelector(".playerWin").innerHTML = `Player win: ${playerWin}`;
  document.querySelector(".computerWin").innerHTML = `Computer win: ${computerWin}`;
  document.querySelector(".draw").innerHTML = `Draw: ${draw}`;



}

function handleUserName() {
  input = document.querySelector(".userNameInput");
  var display = document.querySelector(".userNameDisplay");

  if (input.value !== "") {
    display.innerText = `Player Name: ${input.value}`;
  } else {
    alert("Invalid username");
  }
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

function playerP() {
  if (!input) {
    alert("Please enter your name");
  } else {
    const a = Math.ceil(Math.random() * 12);
    // const b = Math.ceil(Math.random() * 12);
    // const c = Math.ceil(Math.random() * 12);
    playerPick = [cards[a]];
    document.querySelector(
      ".playerPick"
    ).innerHTML = `${playerPick}`;
  }
}

function computerP() {
  const a = Math.ceil(Math.random() * 12);
  // const b = Math.ceil(Math.random() * 12);
  // const c = Math.ceil(Math.random() * 12);
  computerPick = [cards[a]];
  document.querySelector(
    ".computerPick"
  ).innerHTML = `${computerPick}`;
}

function getResult() {
  if (!playerPick) {
    alert("Please pick your card first");
  } else {
    computerP();
    cardGame(playerPick, computerPick);
  }
}

function next() {
  if(!playerPick || !computerPick){
    alert("Play game before going to next round")
  }else{
    document.querySelector(".pointOne").style = ``;
    document.querySelector(".pointTwo").style = ``;
    document.querySelector(".pointMinus").style= ``;
    document.querySelector(".computerPick").innerHTML = ` `;
    document.querySelector(".playerPick").innerHTML = ``;
    document.querySelector(".singlePoint").style.color = ``;
    document.querySelector(".minusPoint").style.color = ``;
    document.querySelector(".double").style.color = ``;
  }
  

}

function reset() {
  location.reload();
}

const btnPlayer = document.querySelector(".playerSelection");
const btnGame = document.querySelector(".cardGame");
const btnNext = document.querySelector(".next");
const btnReset = document.querySelector(".reset");
const userNameBtn = document.querySelector(".userNameBtn");
btnPlayer.addEventListener("click", playerP);
btnGame.addEventListener("click", getResult);
btnNext.addEventListener("click", next);
btnReset.addEventListener("click", reset);
userNameBtn.addEventListener("click", handleUserName);

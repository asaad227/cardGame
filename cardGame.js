var round = 0;
var count = [];
var game = 0;
// its need to declared outside the function scope to keep adding up the score and round
var playerPick;
var computerPick;
var input;

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

 
 
  }


  round++

  const result = count.reduce((a, b) => a + b, 0);
  console.log(result);

  document.querySelector(".round").innerHTML= `Game Round: ${round}`; 
 
  if(result > 0){
    document.querySelector(".result").innerHTML =`Result: Player Win`
    game++
  }

  if(result === 0){
    document.querySelector(".result").innerHTML = `Result: Draw`;
    game+0
  }

  if(result < 0){
    document.querySelector(".result").innerHTML = `Result: Computer win`;
    game--
  }
  document.querySelector(".total").innerHTML= `Player Score: ${game}`; 
}

function handleUserName() {
  input = document.querySelector(".userNameInput");
  var display = document.querySelector(".userNameDisplay");

  if (input.value !== "") {
    display.innerText =`Player Name: ${input.value}`;
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

function playerP(){
  if(!input){
    alert("Please enter your name")
  }else{
    const a = Math.ceil(Math.random() * 12);
    const b = Math.ceil(Math.random() * 12);
    const c = Math.ceil(Math.random() * 12);
    playerPick = [cards[a], cards[b], cards[c]];
    document.querySelector(".playerPick").innerHTML =  `Player pick: ${playerPick}`;
 
  }
   
}

function computerP(){
  const a = Math.ceil(Math.random() * 12);
  const b = Math.ceil(Math.random() * 12);
  const c = Math.ceil(Math.random() * 12);
    computerPick = [cards[a],cards[b],cards[c]];
    document.querySelector(".computerPick").innerHTML =  `Computer pick: ${computerPick}`
   
}

function getResult(){
  if(!playerPick){
    alert("Please pick your card first")
  }else{
    computerP()
    cardGame(playerPick, computerPick)
  }

  
}

function next(){
  document.querySelector(".result").innerHTML = `Result: `;
  document.querySelector(".computerPick").innerHTML =  `Computer pick: `;
  document.querySelector(".playerPick").innerHTML =  `Player pick: `;
}

function reset(){
  location.reload()
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


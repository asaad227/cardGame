function cardGame(player, computer){
   const plusSet = ["2", "3", "4", "5", "6"];
   const minusSet = [ "7", "8", "9"];
   const doubleDown = ["A", "K", "J", "Q", ]
   const count = []
for(let i = 0; i < player.length; i++){
   
    if(plusSet.includes(player[i]) && minusSet.includes(computer[i])){
      count.push(1)
    }
    if(minusSet.includes(player[i]) && plusSet.includes(computer[i])){
        count.push(-1)
    }
    if(plusSet.includes(player[i]) && plusSet.includes(computer[i])){
        count.push(0)
    }
    if(minusSet.includes(player[i]) && minusSet.includes(computer[i])){
        count.push(0)
    }

    if(doubleDown.includes(player[i]) && minusSet.includes(computer[i])){
        count.push(2)
    }
    if(doubleDown.includes(player[i]) && plusSet.includes(computer[i])){
        count.push(2)
    }

    if(doubleDown.includes(computer[i]) && minusSet.includes(player[i])){
        count.push(-2)
    }
    if(doubleDown.includes(computer[i]) && plusSet.includes(player[i])){
        count.push(-2)
    }

    if(doubleDown.includes(computer[i]) && doubleDown.includes(player[i])){
        count.push(0)
    }
    
}


const result =  count.reduce((a, b)=> a+b, 0);
console.log(result)
if(result > 0){
    return "Player Win"
}

if(result === 0){
    return "Game has been Draw"
}

if(result < 0){
    return "Computer win better luck next time"
}
}

const cards = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"]
const i = Math.ceil(Math.random()*12);
const d = Math.ceil(Math.random()*12)

const playerPick = [cards[d]];
console.log(playerPick)
const computerPick = [cards[i]];
console.log(computerPick)

                
console.log(cardGame(playerPick, computerPick));
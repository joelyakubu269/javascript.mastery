const Symbol_Count= {
    A : 2,
    B : 4,
    C : 6,
    D: 8

}
const Symbol_values= {
    A : 5,
    B : 4,
    C : 3,
    D : 2
}
const prompt = require("prompt-sync")()
const getInput=(message)=> {
 const input = prompt(message)
 if (input.toLowerCase()==="quit" || input.toLowerCase()==="exit") {
    process.exit(0)
 }
 return input
}
const AmountDeposited=()=> {
    let number 
    while(true) {
            number= getInput(("please enter the amount to be deposited: "))
           const number1= parseFloat(number)
        if (isNaN(number1) || number1 <= 0) {
            console.log("invalid input try again")
            continue
        }else{
            return number1
        }
    }
     
}

const CollectBetAmount=(balance)=> {
    let lines
    while(true) {
        console.log("number of lines to be betted on must not exceed 3")
         const linesInput= getInput("please enter the number of lines you wish to bet on(q to quit): ")
          
        const lines = parseInt(linesInput)
          if (isNaN(lines) || lines <= 0) {
        console.log("invalid amount try again")
        continue
    }

    while(true) {
    const Bet= parseFloat(prompt("enter how much you wish to bet on each line: "))

        // if (lines.toLowerCase() === "q") {
        //     process.exit(0);
        // }
    if ( isNaN(Bet) || Bet<= 0) {
         console.log("invalid amount try again")
        continue
    }else if (Bet> balance/ lines){
        console.log("not enough balance try again")
        continue
    }else {
        const TotalBet= Bet * lines
        return TotalBet
    }
    
    }
}
}

let balance = AmountDeposited()
const bet = CollectBetAmount(balance)
console.log(bet)
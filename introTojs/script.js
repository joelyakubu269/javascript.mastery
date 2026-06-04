

const prompt = require("prompt-sync")()
const ROW = 3
const COL = 3
const Symbol_Count= {
    A : 2,  // notice there are not quotes and this is valid syntax because there is no space in the key
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
//const symbol_Arr= 
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
const Spin= ()=> {
    symbols= [] // serves as a storage for the symbols
    for( const [symbol,count] of Object.entries(Symbol_Count)) {
        for(let i=0; i< count; i++) {
            symbols.push(symbol)
        }
    }
    const reels = []
    
    const reels_Symbols = [...symbols] // to have where symbols can be selected and removed without touching the original
    // so it can be available for the next iteration
    for (let i=0; i< COL;i++) {
        reels.push([])
        for(let j= 0; j< ROW; j++) {
        const randomIdx = Math.floor(Math.random() * reels_Symbols.length)
        const selected_Symbol = reels_Symbols[randomIdx]
        reels[i].push(selected_Symbol) // fills three random symbols for each column
        reels_Symbols.splice(randomIdx,1)

        }

    }
    return reels
}
    const transpose=(reels)=> {
        const rows= []
        for(let i=0; i< ROW;i++) {
            rows.push([])
            for(let j=0;j< COL;j++) {
                rows[i].push(reels[j][i]) //push all the characters for each index at that row
            }
        }
        return rows
    }
 const val= Spin()
 console.log(val)

let balance = AmountDeposited()
const bet = CollectBetAmount(balance)
console.log(bet)
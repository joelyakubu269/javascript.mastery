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
            number= getInput(prompt("please enter the amount to be deposited: "))
            number1= parseFloat(number)
        if (isNaN(number1) || number1 <= 0) {
            console.log("invalid input try again")
        }else{
            return number1
        }
    }
     
}
console.log(AmountDeposited())
const CollectBetAmount=(lines,Amount)=> {
    while(true) {
         const linesInput= getInput("please enter the number of lines you wish to bet on(q to quit): ")
          
        const lines = parseInt(linesInput)
          if (isNaN(lines) || lines <= 0) {
        console.log("invalid amount try again")
        continue
    }
    const Amount= parseFloat(prompt("enter how much you wish to bet on each line: "))

        // if (lines.toLowerCase() === "q") {
        //     process.exit(0);
        // }
    if ( isNaN(Amount) || Amount<= 0) {
         console.log("invalid amount try again")
        continue
    }
    else {
        const cost= lines * Amount
        return cost
    }
    
    }
}
console.log(CollectBetAmount())
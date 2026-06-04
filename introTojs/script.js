const prompt = require("prompt-sync")()
const AmountDeposited=()=> {
    let number 
    while(true) {
            number= parseFloat(prompt("please enter the amount to be deposited: "))
        if (isNaN(number) || number <= 0) {
            console.log("invalid input try again")
        }else{
            return number
        }
    }
     
}
console.log(AmountDeposited())
const CollectBetAmount=(lines,Amount)=> {
    while(true) {
         lines= prompt("please enter the number of lines you wish to bet on: ")
    Amount= prompt("enter how much you wish to bet on each line: ")
    if (isNaN(lines && Amount) || lines<= 0 || Amount<= 0)
    cost= lines * Amount
    }
}
let isPositive=(number)=> {
    return (number>0)
}
let isNegative=(number)=>{
    return (number<0)
}
let isZero=(number)=>{
    return (number === 0)
}
let isEven=(number)=>{
    return ((number % 2) == 0)
}
let isOdd=(number)=>{
    return ((number % 2) != 0)
}
function describeNumber(number) {
   let props= {
        positive : isPositive(number),
        negative : isNegative(number),
        zero : isZero(number),
        even: isEven(number),
        odd: isOdd(number),

    };
    return props
}
console.log(describeNumber(8));
console.log(describeNumber(-3));
console.log(describeNumber(0));
console.log(describeNumber(7));
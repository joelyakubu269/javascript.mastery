
let formatName=(firstName, lastName)=> {
    newName= `${firstName} ${lastName}`
    return newName
}
let getGreeting=(timeOfDay)=> {
    return greeting= "Good " + timeOfDay
}

let createGreeting=(firstName,lastName,timeOfDay)=>{
    if (timeOfDay != "morning" && timeOfDay!="afternoon" && timeOfDay != "evening") {
        return "not a valid time of day"
    }
    greet= getGreeting(timeOfDay)
    newN= formatName(firstName,lastName)
    return `${greet}, ${newN}`
}
console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));

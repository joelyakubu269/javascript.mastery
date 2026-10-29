Greeting Builder

Build a small greeting helper. The main function, createGreeting, should take a person's first name, last name, and time of day, then return one greeting string.

Write these functions:

    formatName(firstName, lastName) should return the first and last name as one string.

    getGreeting(timeOfDay) should return "Good morning", "Good afternoon", or "Good evening".

    createGreeting(firstName, lastName, timeOfDay) should use the other two functions and return the final greeting.

Sample checks:
console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));

let formatName=(firstName, lastName)=> {
    newName= `${firstName}, + " " ,${lastName}`
    return newName
}
let getGreeting=(timeOfDay)=> {
    greeting= "Good " + timeOfDay
}

let createGreeting=()
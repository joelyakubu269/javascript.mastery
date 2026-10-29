# Dynamic Greeting System

A simple, modular JavaScript program that validates the time of day, formats user names, and generates customized greetings.

## 🔗 Project Links

- **GitHub Repository:** [https://github.com/joelyakubu269/javascript.mastery/blob/main/GreetingBuilder.js
]

## Features

- **Time Validation:** Ensures greetings are only generated for `"morning"`, `"afternoon"`, and `"evening"`.
- **Name Formatting:** Combines first and last names cleanly using template literals.
- **Modular Design:** Breaks down responsibilities into single-purpose functions.

## Source Code

```javascript
let formatName = (firstName, lastName) => {
    let newName = `${firstName} ${lastName}`;
    return newName;
};

let getGreeting = (timeOfDay) => {
    return "Good " + timeOfDay;
};

let createGreeting = (firstName, lastName, timeOfDay) => {
    if (timeOfDay !== "morning" && timeOfDay !== "afternoon" && timeOfDay !== "evening") {
        return "not a valid time of day";
    }
    let greet = getGreeting(timeOfDay);
    let newN = formatName(firstName, lastName);
    return `${greet}, ${newN}`;
};
```

## Usage & Examples

### Expected Console Output

When you pass valid parameters to `createGreeting()`, it returns a fully formatted string:

```javascript
console.log(createGreeting('Ava', 'Stone', 'morning'));
// Output: "Good morning, Ava Stone"

console.log(createGreeting('Noah', 'Kim', 'evening'));
// Output: "Good evening, Noah Kim"

console.log(createGreeting('Mina', 'Patel', 'afternoon'));
// Output: "Good afternoon, Mina Patel"
```

### Invalid Inputs

If the `timeOfDay` argument is invalid, the validator stops execution early:

```javascript
console.log(createGreeting('John', 'Doe', 'night'));
// Output: "not a valid time of day"
```

## Best Practices Implemented

1. **Logical `&&` Over `||`:** The code correctly utilizes standard logical AND validation to prevent false-positive error triggers.
2. **Arrow Functions:** Uses modern ES6 syntax for clean, concise function declarations.
3. **Template Literals:** Combines string variables gracefully without messy concatenation blocks.

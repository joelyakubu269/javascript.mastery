const birthYear= prompt("What year were you born?:");
    if (birthYear === null) {
        console.log("user cancelled the prompt")
    }else if (birthYear=== "") {
        console.log("your birthyear cannot be empty")
    }else {
        let age = Number(birthYear)
        if (isNaN(age)) {
            console.log("age has to be a number")
        }else {
            let newAGE= 2026 - age
            console.log(`you are ${newAGE} years old`)
        }
        
    }
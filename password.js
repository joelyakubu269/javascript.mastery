let hasMinimumLength=(password)=>{
    if (password.length === 8) {
        return true
    }
    return false
}
let hasNumber=(password)=>{
    return [...password].some(char=>"0123456789".includes(char));
}
let hasUppercaseLetter=(password)=>{
    
return [...password].some(char=> char>= "A" && char<="Z")
}
let getFailedRules=(password)=>{
    let failed = []

        if (!hasMinimumLength(password)) {
            failed.push("has minimum length")

        }
        if (!hasNumber(password)){
            failed.push("has number")

        }
        if  (!hasUppercaseLetter(password)){
            failed.push("has uppercase letters")

        }
        return failed.push
}
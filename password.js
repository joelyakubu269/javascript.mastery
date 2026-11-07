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
    let capPassword = password.toUpperCase()
    return [...capPassword]
}
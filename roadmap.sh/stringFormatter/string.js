let cleanText=(text)=>{
    const mes= text.trim()
    return mes
}
let capitalize=(text)=>{
    const val= text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
    return val
}
let formatDisplayName=(firstName,lastName)=>{
    const cleanFirst= capitalize(cleanText(firstName))
    const cleanLast= capitalize(cleanText(lastName))
    return  `${cleanFirst} ${cleanLast}`
}
console.log(formatDisplayName('  ava', 'STONE  '));
console.log(formatDisplayName('nOAh', '  kim'));
console.log(formatDisplayName('  mINA  ', 'pATEL'));
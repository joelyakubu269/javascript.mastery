let secondsElapsed = 0
let intervaL = null
const padTime=(value)=>  String(value).padStart(2,"0")
const setTime=()=>{
 const minutes = seconds/60
    const remainingMinutes= Math.floor(seconds % 60)
    return `${minutes}: ${remainingMinutes.toString.padStart(2,"0")}` 
}
function StartTimer(seconds) {
   
}
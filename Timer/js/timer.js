let secondsElapsed = 0
let intervaL = null
const padTime=(value)=>  String(value).padStart(2,"0")
const setTime=()=>{
 const minutes = Math.floor(seconds/60)
    const remainingMinutes= seconds % 60
    return `${padTime(minutes)}: ${padTime(remainingMinutes)}` 
}
const StartTimer=()=> {
   secondsElapsed++
   setTime()
}
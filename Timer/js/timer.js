let secondsElapsed = 0
let intervaL = null
const time= document.getElementById("id")

const padTime=(value)=>  String(value).padStart(2,"0")
const setTime=()=>{
 const minutes = Math.floor(secondsElapsed/60)
    const remainingMinutes= secondsElapsed % 60
    return `${padTime(minutes)}: ${padTime(remainingMinutes)}` 
}
const StartTimer=()=> {
   secondsElapsed++
   setTime()
   
}
const start=()=>{
    intervaL= setInterval(StartTimer,1000)
    setTime()
    time.textContent= setTime()
}
const stop=()=>{
     clearInterval(intervaL)
    setTime()
}
const Reset=()=> {
    clearInterval(intervaL)
    setTime()
}
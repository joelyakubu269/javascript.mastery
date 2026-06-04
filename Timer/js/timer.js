let secondsElapsed = 0
let intervaL = null
const time= document.getElementById("id")

const padTime=(value)=>  String(value).padStart(2,"0")
const setTime=()=>{
 const minutes = Math.floor(secondsElapsed/60)
    const remainingMinutes= secondsElapsed % 60
    return `${padTime(minutes)}: ${padTime(remainingMinutes)}` 
}
const updateDisplay = () => {
  time.textContent = setTime();
};

const StartTimer=()=> {
   secondsElapsed++
   updateDisplay()
}
const start=()=>{
    if(intervaL) return
    intervaL= setInterval(StartTimer,1000)
    updateDisplay()
}
const stop=()=>{
     clearInterval(intervaL)
     intervaL= null
    updateDisplay()
}
const Reset=()=> {
    clearInterval(intervaL)
    intervaL= null
    secondsElapsed= 0
    updateDisplay()
}
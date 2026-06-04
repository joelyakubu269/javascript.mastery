const body = document.getElementsByTagName("body")[0]
const myMessage= document.getElementsByClassName("message")[0]
const change=(name)=> {
    if (name==="red") {
        myMessage.innerHTML= "she showed you the flags bruv, but you still went ahead"
         body.style.backgroundColor= name
    }
    if (name==="blue") {
        myMessage.innerHTML= "the sky is blue"
         body.style.backgroundColor= name
    }
    if (name==="green") {
        myMessage.innerHTML= "Go into the absyss, there is light somewhere, may not be much light but it beats the darkness"
         body.style.backgroundColor= name
    }
   
}
 const colArray= ["red","blue","green","yellow","black","white","grey","#FF6B6B","#4ECDC4",
  "#45B7D1",
  "#96CEB4",] 
    let buffer= [...colArray]
const random=()=>{
    if (buffer.length == 0)  {
        buffer= [...colArray]
    }
    const randomIdx = Math.floor(Math.random() * buffer.length)
    const name = buffer[randomIdx]
    buffer.splice(randomIdx,1)
    body.style.backgroundColor= name
     myMessage.innerHTML= "The gods do not play dice"
}
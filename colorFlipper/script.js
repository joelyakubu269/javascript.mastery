const body = document.getElementsByTagName("body")[0]
const change=(name)=> {
    body.style.backgroundColor= name
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
}
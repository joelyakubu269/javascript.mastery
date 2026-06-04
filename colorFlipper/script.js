const body = document.getElementsByTagName("body")[0]
const change=(name)=> {
    body.style.backgroundColor= name
}
const random=()=>{
    const colArray= ["red","blue","green","yellow","black","white","grey"] 
    const buffer= [...colArray]
    const randomIdx = Math.floor(Math.random() * buffer.length)
    const name = buffer[randomIdx]
    buffer.slice(randomIdx,1)
    body.style.backgroundColor= name
}
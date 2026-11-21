const lizt = [8, 3, 12, 1, 7]
const smallNum=(numbers)=>{
    if (numbers.length== 0){
        return null
    }
    let min= numbers[0]
    for (let i=1;i<numbers.length;i++){
        if (min<numbers[i]){
            min= numbers[i]
        }
    }
    return min
}
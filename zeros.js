const move_zeros=(numbers)=>{
    let nlist=[]
    for (const num of numbers){
        if (num === 0){
            nlist[-1]= num
        }
        nlist.push(num)
    }
    return nlist
}
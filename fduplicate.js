const first_duplicate=(numbers)=>{
    let nlist= []
    for (const num of numbers){
       if(nlist.includes(num)){
        return num
       } 
       nlist.push(num)
    }
}
console.log(first_duplicate([4, 7, 2, 7, 5, 4]
))
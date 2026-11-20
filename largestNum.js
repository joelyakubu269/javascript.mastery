lizt= [3,41,56,21,76,9]
let largestNum=(list)=>{
    let max= list[0]
    for ( i=0; i<list.length;i++){
        if (list[i]>max){
            max= list[i]
        }
    }
    return max
}
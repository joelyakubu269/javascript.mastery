const lizt= [3,41,56,21,76,9]
const largestNum=(list)=>{
    let max= list[0]
    for ( let i=1; i<list.length;i++){
        if (list[i]>max){
            max= list[i]
        }
    }
    return max
}
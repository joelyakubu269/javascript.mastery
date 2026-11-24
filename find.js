const find_number=(numbers, target)=>{
    for (let i=0; i<numbers.length;i++){
        if (numbers[i]=== target){
            return i
        }
    }
    return -1
}
console.log(find_number([10, 25, 30, 45],30))
console.log(find_number([5, 8, 5, 9],5))
console.log(find_number([10, 20, 30],99))

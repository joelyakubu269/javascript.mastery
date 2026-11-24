const reverse_list=(items)=>{
   const rlist=[]
    for (i=items.length-1 ;i>=0;i--){
        rlist.push(items[i])
    }
    return rlist
}
console.log(reverse_list(([1,2,3,4])))
console.log(reverse_list(["a", "b", "c"]
))
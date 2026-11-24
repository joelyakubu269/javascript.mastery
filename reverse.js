const reverse_list=(items)=>{
    rlist=[]
    for (i=items.length -1;i>0;i--){
        rlist.push(items[i])
    }
    return rlist
}
console.log(reverse_list(reverse_list(items)))
console.log(reverse_list(["a", "b", "c"]
))
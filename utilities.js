const tasks= [] // let this for the array of objects
let highestid=0
let idGen=(tasks)=>{
    if (Tasks.length == 0){
        return 1
    }
    for (task of tasks){
        if (highestid< task.id){
            highestid= task.id
        }
    }
    highestid++
}
    let addTask=(tasks, title)=>{
        const utility= {
            id: idGen(Tasks),
            title: title,
            completed: false,
        }
    }
    let completeTask=(tasks, taskId)=>{
        for (task     of tasks){
            if (task.id == taskId){
                task.completed= true
                break
            }
        }
        return tasks
    }
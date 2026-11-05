 // let this for the array of objects
let highestid=0
let idGen=(tasks)=>{
    if (tasks.length == 0){
        highestid= 1
        return highestid
    }
    for (task of tasks){
        if (highestid< task.id){
            highestid= task.id
        }
    }
    highestid++
    return highestid
}
    let addTask=(tasks, title)=>{
        const utility= {
            id: idGen(tasks),
            title: title,
            completed: false,
        }
        tasks.push(utility)
        return tasks
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
    let removeTask=(tasks, taskId)=>{
        let tazks= []
        for (task of tasks) {
            if (task.id != taskId){
                tazks.push(task)
            }
        }
        return tazks
    }
    let countIncompleteTasks=(tasks)=>{
        let counter= 0
        for (task of tasks) {
            if (task.completed == false){
                counter++
            }
        }
        return counter
    }
    const tasks = [
  { id: 1, title: 'Review variables', completed: true },
  { id: 2, title: 'Practice functions', completed: false },
];

const withNewTask = addTask(tasks, 'Build task utilities');
console.log(withNewTask.map((task) => task.title));

const completed = completeTask(withNewTask, 2);
console.log(countIncompleteTasks(completed));

console.log(removeTask(completed, 1).map((task) => task.id));
console.log(tasks.length);
console.log(countIncompleteTasks(tasks));
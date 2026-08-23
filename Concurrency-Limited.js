let tasks = []
let limit

let runTasks = async function(tasks, limit){

    let next = 0
    
    async function worker() {

        while(next < tasks.length){
            let current = next
            next++
            try{
                tasks[current]()
            }catch(error){
                console.log("Tasks Failed!")
            }
        }
    }

    let workers = []

    for(let i = 0; i < limit; i++){
        workers.push(worker())
    }

    await Promise.all(workers)
}
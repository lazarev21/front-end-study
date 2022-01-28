const list = {
    "create a new practice task": "In Progress", 
    "make a bed": "Done",
    "write a post": "To Do",


    changeStatus(task, status) {
        if (task in this){ 
            this[task] = status;
            }
    },

    addTask(task) {
        if (task in list) {
            return
            }
        else {
            list[task] = 'To Do';
            }
    },

    deleteTask (task) {
        if (task in this) {
            delete this[task];
            }
        else {
            return
        }
    
    },

    showList () {

    }
}

list.addTask ("To let the dog out")
addTask("Wash dishes")
changeStatus("new task", "In Progress")
changeStatus("Wash dishes", "In Progress")
changeStatus("Wash dishes", "Done")

console.log(list["To let the dog out"])

const list = {
    "create a new practice task": "Done", 
    "make a bed": "In Progress",
    "write a post": "To Do",
}

function changeStatus(task, status) {
    if (task in list){ 
        list[task] = status;
    }
}

function addTask (task) {
    if (task in list) {
        return
    }
    else {
        list[task] = 'To Do';
    }
}

function deleteTask(task) {
    if (task in list) {
        delete list[task];
    }
    else {
        return
    }
    
}

let todo = ""
let inprogress = ""
let done = ""

function showList() {

    for (key in list) {
        switch (list[key]) {

        case "To Do" :
            todo += " \"" + key + "\"" + "," +"\n"
            break
        case "In Progress" :
            inprogress += " \"" + key + "\"" + "," +"\n"
            break
        case "Done" :
            done += " \"" + key + "\"" + "," +"\n"
            break
        }
}
}  

addTask("let the dog out")
addTask("wash dishes")
deleteTask("make a bed")
changeStatus("wash dishes", "In Progress")
changeStatus("create a new practice task", "In Progress")

showList()

console.log("To do: \n" + (todo || " -") + "\nIn progress: \n" + (inprogress || " -") + "\nDone: \n" + (done || ' -'))

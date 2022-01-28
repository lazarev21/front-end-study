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

function deleteTask (task) {
    if (task in list) {
        delete list[task];
    }
    else {
        return
    }
    
}

function showList () {

    console.log ("To Do:")
    let counttasksToDo = 0;
    for (key in list) {
        if (list[key] === "To Do") {
            console.log (" " + "\"" + key + "\"" + ",")
            counttasksToDo++;
        }
    
    }
    if (counttasksToDo < 1) {
        console.log(' -');
    }

    console.log ("In Progress:")
    let countTasksInProgress = 0;
    for (key in list) {
        if (list[key] === "In Progress") {
            console.log (" " + "\"" + key + "\"" + ",")
            countTasksInProgress++;
        }
    
    }
    if (countTasksInProgress < 1) {
        console.log(' -');
    }

    console.log ("Done:")
    let counttasksDone = 0;
    for (key in list) {
        if (list[key] === "Done") {
                console.log (" " + "\"" + key + "\"" + ",")
                counttasksDone++;
        }
      
    }
    if (counttasksDone < 1) {
        console.log(' -');
    }
}

addTask("let the dog out")
addTask("wash dishes")
changeStatus("wash dishes", "In Progress")
changeStatus("create a new practice task", "In Progress")
showList()
const list = {
    "create a new practice task": "In Progress", 
    "make a bed": "Done",
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
    for (key in list) {
        if (list[key] === "To Do") {
            console.log (" " + "\"" + key + "\"" + ",")
        }
        else {
            continue
        }
    }
    console.log ("In Progress:")
    for (key in list) {
        if (list[key] === "In Progress") {
            console.log (" " + "\"" + key + "\"" + ",")
        }
        else {
            continue
        }
    }
    console.log ("Done:")
    for (key in list) {
        if (list[key] === "Done") {
                console.log (" " + "\"" + key + "\"" + ",")
        }
        else {
            continue
        }
    }
}

addTask("let the dog out")
addTask("wash dishes")
changeStatus("wash dishes", "In Progress")
changeStatus("wash dishes", "Done")
showList()
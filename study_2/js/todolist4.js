const STATUS = {
    DONE: 'Done',
    IN_PROGRESS: 'In Progress',
    TO_DO: 'To Do',
    DEFAULT: 'To Do',
}

const tasks = {
    [STATUS.DONE]: '',
    [STATUS.IN_PROGRESS]: '',
    [STATUS.TO_DO]: '',

}


const list = {
    'create a new practice task': STATUS.DONE, 
    'make a bed': STATUS.IN_PROGRESS,
    'write a post': STATUS.TO_DO,
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
        list[task] = STATUS.DEFAULT;
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


function showList() {
   for (let key in list) {
        tasks[list[key]] += ' ' + `"${key}"` +',' + '\n';
    }         

console.log('To do: \n' + (tasks[STATUS.TO_DO] || ' -') 
          + '\nIn progress: \n' + (tasks[STATUS.IN_PROGRESS] || ' -') 
          + '\nDone: \n' + (tasks[STATUS.DONE] || ' -'))

}


addTask('let the dog out')
addTask('wash dishes')
deleteTask('make a bed')
changeStatus('wash dishes', 'In Progress')
changeStatus('create a new practice task', 'In Progress')

showList()



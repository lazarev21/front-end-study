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


const PRIORITIES = {
        LOW: 'low',
        MEDIUM: 'medium',
        HIGH: 'high',
        DEFAULT: 'low',
}

const tasksByPriority = {
    [PRIORITIES.LOW]: '',
    [PRIORITIES.MEDIUM]: '',
    [PRIORITIES.HIGH]: '',

}


const list = [ { name: 'write a post', status: STATUS.TO_DO, priority: PRIORITIES.LOW  },
               { name: 'make a bed', status: STATUS.IN_PROGRESS, priority: PRIORITIES.HIGH },
               { name: 'create a new practice task', status: STATUS.DONE, priority: PRIORITIES.MEDIUM } 
            ] 



function changeStatus(task, status) {
    list.forEach(function(item) {
        if (item.name === task) {
            item.status = status
        }
    
    })
}


function addTask (task) {
        if (!list.includes(list.task)) 
            list.push({name: task, status: STATUS.DEFAULT, priority: PRIORITIES.DEFAULT})
}


function deleteTask(task) {
    list.forEach(function(item, index) {
        if (item.name === task) { 
        list.splice(index, 1)
    }
})
}

function showList() {
  list.forEach(function(item){
      
            tasks[item.status] += ' ' + `"${item.name}"` +',' + '\n';

    })

console.log('To do: \n' + (tasks[STATUS.TO_DO] || ' -') 
          + '\nIn progress: \n' + (tasks[STATUS.IN_PROGRESS] || ' -') 
          + '\nDone: \n' + (tasks[STATUS.DONE] || ' -'))
}

function showListPriority() {
    list.forEach(function(item){
        
              tasksByPriority[item.priority] += ' ' + `"${item.name}"` +',' + '\n';
  
      })
  
  console.log('Low priority: \n' + (tasksByPriority[PRIORITIES.LOW] || ' -') 
            + '\nMedium priority: \n' + (tasksByPriority[PRIORITIES.MEDIUM] || ' -') 
            + '\nHigh priority: \n' + (tasksByPriority[PRIORITIES.HIGH] || ' -'))
  }
  

function showBy (parametr) {
    if (parametr === 'status') {
        showList()
    }
    if (parametr === 'priority'){
        showListPriority()
    }
    else return
}


addTask('let the dog out')
addTask('wash dishes')
deleteTask('make a bed')
changeStatus('wash dishes', 'In Progress')
changeStatus('create a new practice task', 'In Progress')
showBy ('priority')
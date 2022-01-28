const list = {

    addTask(task, status = 'To Do'){
       this[task]=status;
   },
    changeStatus(task, status){
       for(let tasks in list){
               if(task === tasks){
               this[tasks] = status;
           }   
       }
   },
    deleteTask(task){
       for(let tasks in list){
               if(task === tasks){
                 delete this[tasks];
           }   
       }
   },
    showList(){
       let todo ='';
       let inProgress = '';
       let done = '';
       // let output = `Todo: ${todo || emptyTask} \nInProgress: ${inProgress || emptyTask} \nDone: ${done || emptyTask}`;
       const emptyTask = '-';
       for( let task in list){
          
           if(list[task] === 'To Do'){
                todo +=` "${task}",\n` ;
             
           }
           if(list[task] === 'In progress'){
               inProgress += ` "${task}"\n`;
          }
          if(list[task] === 'Done'){
               done += ` "${task}" +","\n`;
      }
       } console.log(`Todo: \n ${todo || emptyTask}In progress: \n ${inProgress || emptyTask}Done: \n ${done || emptyTask}`);
       
   }
}

list.addTask('create a new practice task');
list.addTask('make a bed');
list.addTask('3rd task');
list.addTask('2nd task');
list.addTask('write a post', 'In progress');
list.addTask('Some task');
console.log(list);
list.changeStatus('2nd task', 'In progress');
list.changeStatus('3rd task', 'In progress');
console.log(list);
list.deleteTask('3rd task');
list.showList();
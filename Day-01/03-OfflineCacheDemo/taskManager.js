        window.addEventListener("DOMContentLoaded",init);
        
        function init(){
            var btnAddTask = document.getElementById("btnAddTask");
            btnAddTask.addEventListener("click",onBtnAddTaskClick);
            
            var btnRemoveCompleted = document.getElementById("btnRemoveCompleted");
            btnRemoveCompleted.addEventListener("click", onBtnRemoveCompleted);
            
            var existingTasks = taskStorage.getAll();
            for(var i=0;i<existingTasks.length;i++){
                var task = existingTasks[i];
                addNewTaskToList(task.id, task.name)
            }
            
        }
        function onBtnAddTaskClick(){
            var taskName = document.getElementById("txtTask").value;
            var newTaskId = new Date().getTime().toString();
            addNewTaskToList(newTaskId, taskName);
            taskStorage.add(newTaskId,taskName);
            
        }
        function addNewTaskToList(taskId, taskName){
            var newTaskItem = document.createElement("li");
            newTaskItem.innerHTML = taskName;
            newTaskItem.addEventListener("click", onTaskItemClick);
            
            newTaskItem.setAttribute("task-id", taskId);
            var olTaskList = document.getElementById("olTaskList");
            olTaskList.appendChild(newTaskItem);
        }
        
        function onTaskItemClick(){
            this.classList.toggle("completed");
        }
        
        function onBtnRemoveCompleted(){
            var olTaskList = document.getElementById("olTaskList");
            var taskItems = olTaskList.children;
            for(var i=taskItems.length-1;i>=0;i--)
                if (taskItems[i].classList.contains("completed")){
                    var taskId = taskItems[i].getAttribute("task-id");
                    taskStorage.remove(taskId);
                    taskItems[i].remove();
                }
        }

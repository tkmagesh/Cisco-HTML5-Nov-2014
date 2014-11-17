var taskStorage = {
            add : function(taskId,taskName){
              window.localStorage.setItem(taskId, taskName);  
            },
            remove : function(taskId){
                 window.localStorage.removeItem(taskId);
            },
            getAll : function(){
                var result = [];
                for(var i=0;i<window.localStorage.length;i++){
                    var taskId = window.localStorage.key(i);
                    var taskName = window.localStorage.getItem(taskId);
                    var task = {
                        id : taskId,
                        name : taskName
                    };
                    result.push(task);
                }
                return result;
            }
        }
const task_model = require("./Model"); 


class todo_controller{
        readAllitems(req,res){
            return(
                res.json(task_model.task())
            )
        }
}

module.exports = new todo_controller()


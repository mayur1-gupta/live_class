class task_model{
    constructor(id,title,description){
        this.id=id,
        this.title=title,
        this.description=description  
    }

    static task(){
        return like_database
    }

    
}
const like_database =[
    new task_model(1,"task1","description1"),
    new task_model(2,"task2","description2"),
    new task_model(3,"task3","description3"),
]
module.exports = task_model
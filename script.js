let mainContainerRow = document.getElementById('mainContainerRow');
let taskContainer = document.getElementById('taskContainer')
let btn = document.getElementById('createTask')
let taskTitle = document.getElementById('title')
let description = document.getElementById('description')


let tasks = JSON.parse(localStorage.getItem("tasks")) || []

localStorage.setItem('key', 'value')
localStorage.getItem("key")
localStorage.removeItem("key");

let saveLocalStore = () =>{
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

let deleteTask = (index) => {
    tasks.splice(index, 1);
    saveLocalStore()
    taskRender()
}

let updateTask = (index) => {
    let newTitle = prompt("Enter new title") 
    let newDescription = prompt("Enter new description")
    
    if(newTitle && newDescription){
        tasks[index].title = newTitle,
        tasks[index].description =newDescription
        saveLocalStore()
        taskRender()
    }
}

btn.addEventListener('click', function(){
    let titleVal = title.value.trim()
    let descriptionVal = description.value.trim()

    if(titleVal === "" || descriptionVal === ""  ){
        alert("Title and Description are required!");
    }
    else{
       
        tasks.push({
            title: titleVal,
            description: descriptionVal
        })
        saveLocalStore()
        taskRender()

        titleVal = ""
        descriptionVal=""
    }
})


let taskRender = () =>{
 taskContainer.innerHTML= tasks.map((task, index) => {
    return `
         <div class="mainContainerRow" id="mainContainerRow">
                <div class="titleButton">
                  <span>Title: ${task.title}</span>
                  <div class="btn-group">
                    <button onclick="updateTask(${index})">Update</button>
                    <button onclick="deleteTask(${index})"  style="background-color: red; margin-left: 12px">
                      Delete
                    </button>
                  </div>
                </div>
                <div class="divDescription">
                  <span>Descrition: ${task.description}</span>
                </div>
              </div>
    `;
 }).join("")
}


taskRender()
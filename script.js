const form = document.querySelector("#form");
console.log(form);

const taskInput = document.querySelector(".task-input");
console.log(taskInput);

const btn=document.querySelector(".btn");
console.log(btn);

const list=document.querySelector(".list");
console.log(list);

const completedList = document.querySelector(".completed-list");



form.addEventListener("submit", function(event){
    event.preventDefault();

    if(taskInput.value.trim() === ""){
        alert("Please enter a task.");
        return;
    };
    const allTasks=document.querySelectorAll(".task-text");

    for ( const task of allTasks){
        if (task.innerText === taskInput.value.trim()){
            alert("Task already exist.")
            return;
        }
    };

    const li= document.createElement("li");

    // li.innerText=taskInput.value.trim();

    
    

    const checkbox= document.createElement("input");
    checkbox.type="checkbox";
    checkbox.classList.add("task-checkbox")
    li.appendChild(checkbox);

    checkbox.addEventListener("change", function(){
        if(checkbox.checked){
            completedList.appendChild(li);
        }else{
            list.appendChild(li);
        }
       
       
    });
    

    

    const taskText = document.createElement("span");
    taskText.innerText=taskInput.value.trim();
    taskText.classList.add("task-text");
    li.appendChild(taskText);
    



    const deleteBtn = document.createElement("button");
    deleteBtn.innerText="Delete";
    deleteBtn.classList.add("task-btn");
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function(){
        li.remove();
    });
    


    list.appendChild(li);
    taskInput.value="";


});



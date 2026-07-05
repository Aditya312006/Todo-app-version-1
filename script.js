const form = document.querySelector("#form");
console.log(form);

const taskInput = document.querySelector(".task-input");
console.log(taskInput);

const btn=document.querySelector(".btn");
console.log(btn);

const list=document.querySelector(".list");
console.log(list);

const completedList = document.querySelector(".completed-list");

const category = document.querySelector("#category");

const priorities=document.querySelectorAll('input[name="priority"]');



form.addEventListener("submit", function(event){
    event.preventDefault();
    // console.log(category.value);
    console.log("form submitted");

    if(taskInput.value.trim() === ""){
        alert("Please enter a task.");
        return;
    };
    if(category.value==="category"){
        alert("Please select category");
        return;
    };

    
    const li= document.createElement("li");

    

    
        

    const allTasks=document.querySelectorAll(".task-text");

    for ( const task of allTasks){
        if (task.innerText === taskInput.value.trim()){
            alert("Task already exist.")
            return;
        }
    };


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

    const categoryText = document.createElement("span");
    categoryText.innerText=category.value;
    categoryText.classList.add("category-text");

    li.appendChild(categoryText);

    let selectedPriority="";

    for (const priority of priorities){
        if(priority.checked){
            selectedPriority=priority.value;


        }
    }
    if(selectedPriority===""){
        alert("Please select priority");
        return;

    }

    const priorityText=document.createElement("span")

    priorityText.innerText=selectedPriority;

    priorityText.classList.add("priority-text");
    li.appendChild(priorityText);

    if (selectedPriority==="High"){
        priorityText.classList.add("high-priority");
    }
    else if(selectedPriority ==="Medium"){
        priorityText.classList.add("medium-priority");
    }else if (selectedPriority==="Low"){
        priorityText.classList.add("low-priority");
    }
   

    




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



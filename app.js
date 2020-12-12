//Selectors
const form = document.querySelector("form"); //form
const taskInput = document.querySelector("#task"); //New Task input tag

const taskList = document.querySelector(".collection"); //ul
const clearBtn = document.querySelector(".clear-tasks"); //Clear Tasks Button
const filter = document.querySelector("#filter"); //Filter Tasks input tag

//EventListener
form.addEventListener("submit", addTask); //to add a task
taskList.addEventListener("click", removeTask); //to remove a task
clearBtn.addEventListener("click", clearTasks); //to remove all the tasks
filter.addEventListener("keyup", filterTask);

//Functions

//adding Tasks
function addTask(e) {
  e.preventDefault();

  if (taskInput.value === "") {
    alert("Please Enter a Value");
  }
  //Creating li
  const li = document.createElement("li");
  li.className = "collection-item";
  li.innerText = taskInput.value; //adding the input
  //Create new link
  const link = document.createElement("a");
  link.className = "delete-item secondary-content";
  link.innerHTML = '<i class="fa fa-remove"</i>'; //Creating the cross(x) icon
  //adding link to li
  li.appendChild(link);

  //adding li to ul
  taskList.appendChild(li);

  taskInput.value = ""; //Clearing input form
}
//
//Removing Tasks
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    e.target.parentElement.parentElement.remove();
  }
  console.log(e.target);
}

//Clearing all the tasks
function clearTasks(e) {
  taskList.innerHTML = "";
}

//Filtering
function filterTask(e) {
  text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function (task) {
    //   const item = task.firstChild.textContent;
    console.log(task);
  });
}

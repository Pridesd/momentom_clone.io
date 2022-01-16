const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = toDoForm.querySelector("ul");
const toDos = [];

function deleteTodo(event){
    const toDo = event.target.parentElement;
    toDo.remove();
}
function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newToDo;
    button.innerText = "🚨"
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    button.addEventListener('click', deleteTodo); 
    saveToDo(); //should
}
function insertToDoList(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newToDo);
}
toDoForm.addEventListener('submit', insertToDoList);
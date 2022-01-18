const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = toDoForm.querySelector("ul");
let toDos = [];
const TODOS_KEY = "todos";

function saveToDo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    console.log(toDos)
    saveToDo();
}
function paintToDo(newToDoobj){
    const li = document.createElement("li");
    li.id = newToDoobj.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newToDoobj.todo;
    button.innerText = "🚨"
    button.addEventListener('click', deleteTodo); 
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}
function insertToDoList(event){
    event.preventDefault();
    const newToDoObj = {
        todo: toDoInput.value,
        id: Date.now()
    };
    toDoInput.value = "";
    paintToDo(newToDoObj);
    toDos.push(newToDoObj);
    saveToDo();
}

toDoForm.addEventListener('submit', insertToDoList);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
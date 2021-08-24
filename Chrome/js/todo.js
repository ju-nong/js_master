const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];



function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function makeToDo(toDo){
    const li = document.createElement("li");
    li.id = toDo.id;
    const span = document.createElement("span");
    span.innerText = toDo.text;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.append(button, span);
    toDoList.appendChild(li);
}

function onToDoSubmit(e){
    e.preventDefault();

    const newToDo = toDoInput.value;
    toDoInput.value = "";

    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    }

    toDos.push(newToDoObj);
    makeToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", onToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(makeToDo);
}
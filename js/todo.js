const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
    localStorage.setItem("todos",JSON.stringify(toDos)); // 배열로 저장하기
}

// todolist 삭제하기
function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();

}

// todolist 추가하기
function paintToDo(newTodo) {
    const li =document.createElement("li")
    const span = document.createElement("span")
    span.innerText = newTodo;
    const button = document.createElement("button")
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo )
    li.appendChild(span)
    li.appendChild(button)
    span.innerText = newTodo;
    toDoList.appendChild(li);
   
}

// 새로고침 막기
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}


toDoForm.addEventListener("submit", handleToDoSubmit)
const form = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo")
const todolist = document.querySelector(".list-group")
const firstcardbody = document.querySelectorAll(".card-body")[0]
const secondcardbody = document.querySelectorAll(".card-body")[1]
const filter = document.querySelector("#filter")
const clearbutton = document.querySelector("#clear-todos")

eventlisteners();




function eventlisteners() {//event listenerlar
    form.addEventListener("submit", addtodo)
    document.addEventListener("DOMContentLoaded", loadAllTodosTuUI)
    secondcardbody.addEventListener("click", deletetodo)
    filter.addEventListener("keyup", filtertodos)
    clearbutton.addEventListener("click", clearalltodos)
}
function clearalltodos(e) {
    if (confirm("tümünü silmek istediğinize eminmisiniz ?")) {
        // todolist.innerHTML = " " // yavaş

        localStorage.removeItem("todos")

        while (todolist.firstChild != null) {
            todolist.removeChild(todolist.firstElementChild)
        }



    }
}
function filtertodos(e) {
    const filtervalue = e.target.value.toLowerCase()
    const listItems = document.querySelectorAll(".list-group-item")

    listItems.forEach(function (listItem) {
        const text = listItem.textContent.toLowerCase()
        if (text.indexOf(filtervalue) === -1) {
            //bulamadı

            listItem.setAttribute("style", "display : none !important")
        }
        else {
            listItem.setAttribute("style", "display : block")
        }

    })



}
function deletetodo(e) {

    // console.log(e.target)

    if (e.target.className === "fa fa-remove") {
        // console.log("silme işlemi")
        e.target.parentElement.parentElement.remove()
        deletetodofromStorage(e.target.parentElement.parentElement.textContent)
        showAlert("success", "todo silindi")
    }

}
function deletetodofromStorage(deletetodo) {
    let todos = getTodosFromStorage()

    todos.forEach(function (todo, index) {
        if (todo === deletetodo) {
            todos.splice(index, 1)
        }
    })

    localStorage.setItem("todos", JSON.stringify(todos))

}
function loadAllTodosTuUI() {
    let todos = getTodosFromStorage()

    todos.forEach(function (todo) {
        addTodoToUI(todo)

    })


}

function addtodo(e) {
    const newtodo = todoInput.value.trim()

    if (newtodo === "") {
        // <div class="alert alert-danger" role="alert">
        //     This is a danger alert—check it out!
        // </div>

        showAlert("danger", "lütfen bir todo girin")
    }
    else {
        addTodoToUI(newtodo)
        addtodotoStorage(newtodo)
        showAlert("info", "todo başarıyla eklendi")
    }




    e.preventDefault();
}
function getTodosFromStorage() {
    let todos

    if (localStorage.getItem("todos") === null) {
        todos = []
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    return todos
}
function addtodotoStorage(newtodo) {

    let todos

    if (localStorage.getItem("todos") === null) {
        todos = []
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }

}
function addtodotoStorage(newtodo) {
    let todos = getTodosFromStorage()

    todos.push(newtodo)

    localStorage.setItem("todos", JSON.stringify(todos))

}
function showAlert(type, message) {
    const alert = document.createElement("div")
    alert.className = `alert alert-${type}`

    alert.textContent = message

    firstcardbody.appendChild(alert)

    setTimeout(function () {
        alert.remove()
    }, 900)
}

function addTodoToUI(newtodo) {
    const listItem = document.createElement("li")
    const link = document.createElement("a")
    link.href = "#none"
    link.className = "delete-item"
    link.innerHTML = "<i class= 'fa fa-remove'></i>"
    listItem.className = "list-group-item d-flex justify-content-between"

    listItem.appendChild(document.createTextNode(newtodo))
    listItem.appendChild(link)

    todolist.appendChild(listItem)
    todoInput.value = ""

}
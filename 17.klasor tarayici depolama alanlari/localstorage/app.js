
// localStorage.setItem("haraket", "phus")
// localStorage.setItem("tekrar", 50)

// const value = localStorage.getItem("tekrar")
// console.log(value)
// console.log(typeof value)

// localStorage.clear()

// localStorage.setItem("haraket", "phus")
// localStorage.setItem("tekrar", 50)

// console.log(localStorage.getItem("sports"))


// if (localStorage.getItem("sports") === null) {
    // console.log("sorguladığınız veri bulunmuyor")
// }
// else{
    // console.log("sorguladığınız veri bulunuyor")
// }

// const todos = ["todo 1","todo 2","todo 3"]

// localStorage.setItem("todos",todos)

// localStorage.setItem("todos", JSON.stringify(todos))

// const value = JSON.parse(localStorage.getItem("todos"))
// console.log(value)

const form = document.getElementById("todo-form")
const todoinput = document.getElementById("todo")

form.addEventListener("submit",addtodo)

function addtodo(e) {
    const value = todoinput.value
    let todos
    if (localStorage.getItem("todos") === null) {
        todos = []
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }

    todos.push(value)

    localStorage.setItem("todos", JSON.stringify(todos))
}

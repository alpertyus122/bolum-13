const input = document.getElementById("filter")
const todo = document.getElementById("todo-form")


todo.addEventListener("submit",form)

function form(e) {
    console.log("submit eventi")




    e.preventDefault();
}
// input.addEventListener("focus",function (e) {
    // console.log("naber")
    // console.log(e)
    // console.log(e.type)
    // console.log(e.target)
    // console.log(e.target.placeholder)
    // console.log(e.target.className)
// })

// input.onfocus = function () {
    // console.log("naber")
// }


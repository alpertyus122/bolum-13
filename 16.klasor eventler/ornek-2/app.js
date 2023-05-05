// document.addEventListener("keypress",run)

// function run(e) {
    // console.log(e.which)
    // console.log("naber")
    // console.log(e.key)
// }
// document.addEventListener("keydown",run)

// function run(e) {

//     console.log(e.key)
// }
// document.addEventListener("keyup",run)

// function run(e) {

//     console.log(e.key)
 
// }
const header = document.querySelector(".card-header")
const todo = document.querySelector("#todo")


todo.addEventListener("keyup",text)

function text(e) {
    header.textContent = e.target.value
    console.log(e.target.value)
}





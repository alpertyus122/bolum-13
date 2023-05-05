const filter = document.getElementById("filter")

// document.addEventListener("DOMContentLoaded",load)



// function load(e) {
//     console.log("sayfa yüklendi")

// }

// filter.addEventListener("blur",run)

// filter.addEventListener("focus",run)

// filter.addEventListener("paste",run)

// filter.addEventListener("copy",run)

// filter.addEventListener("cut",run)

filter.addEventListener("select",run)

function run(e) {
    console.log(e.type)
}
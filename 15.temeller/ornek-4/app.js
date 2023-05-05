const element = document.querySelector("#clear-todos")

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[1]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);

// element.className = ("btn btn-danger");

// element.style.color = ("black");

// element.style.margin = "10px";

// element.herf = "https://www.youtube.com"

// element.target = "_blank"


// element.textContent = "slinsin"

// element.innerHTML = "<span> slin </span>"

// const elements = document.querySelectorAll(".list-group-item")
// elements.forEach(function(el){
//     el.style.color = "red";
//     el.style.background = "#000";
// })

let element2 = document.querySelector("li:last-child");

element2 = document.querySelector("li:nth-child(2)");
element2 = document.querySelector("li:nth-child(3)");
element2 = document.querySelector("li:nth-child(4)");

element2 = document.querySelectorAll("li:nth-child(odd)")
element2 = document.querySelectorAll("li:nth-child(even)")

element2.forEach(function (el) {
    el.style.background = "#ccc";
    el.style.color = "red";

});





console.log(element2);

// console.log(elements)
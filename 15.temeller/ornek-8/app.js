const cardbody = document.querySelectorAll(".card-body")[1];

const newelement = document.createElement("h3");

newelement.classname = "card-title";
newelement.id = "tasks-title";
newelement.textContent = "yeni todolar";

const oldelement = document.querySelector("#tasks-title");

cardbody.replaceChild(newelement, oldelement);
console.log(newelement);
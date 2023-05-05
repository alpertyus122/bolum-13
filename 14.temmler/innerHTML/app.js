


document.getElementById("demo").innerHTML = Math.floor(Math.random() * 20 + 1);

console.log(value)

const name = "alper";

const department = " bilisim";

const salary = 4000;

// const html = "<ul>" +
//     "<li>" + name + "</li>" +
//     "<li>" + department + "</li>" +
//     "<li>" + salary + "</li>" +
//     "</ul>"



function a() {
    return "merhaba";
}

const html = `
<ul>

<li>${name}</li>
<li>${department}</li>
<li>${salary}</li>
<li>${10 / 4}</li>
<li>${a()}</li>
`
document.body.innerHTML = html


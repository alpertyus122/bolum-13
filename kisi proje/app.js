const form = document.querySelector("#list-from")
const isim = document.querySelector("#isim")
const soyisim = document.querySelector("#soyisim")
const yas = document.querySelector("#yas")
const maas = document.querySelector("#maas")
const list = document.querySelector("#kisiler")


function Kisi(isim, soyisim, yas, maas) {
    this.isim = isim
    this.soyisim = soyisim
    this.yas = yas
    this.mass = maas
}

function UI() {

}


function verileriAl() {
    let ad = isim.value;
    // let soyad = soyisim.value;
    let yas = yas.value;
    // let maas = maas.value;

    console.log("Ad: " + ad + " yas: " + yas) //+ " maas: " + maas);
}

addEventListener()


function addEventListener() {
    // form.addEventListener("submit", addkisi)
    document.addEventListener("DOMContentLoaded", getAllEmployees)
}


// const form = document.getElementById('myForm');




// function addkisi(e) {


// }

// const nesne = {
//     ad: `${idisim.value}`,
//     soyisim: `${idsoyisim.value}`,
//     yas: `${idyas.value}`,
//     maas: `${idmaas.value}`
// };

// const jsonNesne = JSON.stringify(nesne);

// console.log(jsonNesne); // {"ad":"Ahmet","yas":30,"adres":"İstanbul"}




function getAllEmployees() {
    const xhr = new XMLHttpRequest()

    xhr.open("GET", "employees.json", true)

    xhr.onload = function () {
        let list = document.getElementById("kisiler")

        if (this.status == 200) {
            const employees = JSON.parse(this.responseText)
            employees.forEach(function (employees) {
                list.innerHTML += `
<tr>

<td>${employees.name}</td>
<td>${employees.lastname}</td>
<td>${employees.age}</td>
<td>${employees.salary}</td>
<td><a href="#none"><i class="fa-solid fa-xmark" style="font-size: 1.82rem; color: #ffffff;"></i></a>
</tr>

`
            });
        }
    }
    xhr.send()
}


console.log()



const form = document.querySelector("#list-from")
const isim = document.querySelector("#isim")
const soyisim = document.querySelector("#soyisim")
const yas = document.querySelector("#yas")
const maas = document.querySelector("#maas")
const list = document.querySelector("#kisiler")


function Kisi(isim, soyisim, yas, maas) {
    this.isim = isim;
    this.soyisim = soyisim;
    this.yas = yas;
    this.maas = maas;
}

function UI() {

}


function verileriAl() {

}

addEventListener()


function addEventListener() {
    // form.addEventListener("submit", addkisi)
    document.addEventListener("DOMContentLoaded", getAllEmployees)
}


// const form = document.getElementById('myForm');




function addkisi(e) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        // Form submit işlemleri burada gerçekleştirilir
    });
    
    const isim = document.getElementById("isim");
    const soyisim = document.getElementById("soyisim");
    const yas = document.getElementById("yas");
    const maas = document.getElementById("maas");
    
    if (`${isim.value}` === "" || `${soyisim.value}` === "" ||`${isim.value}` === "" || `${isim.value}` === "") {
      // Gerekli tüm alanlar doldurulmadığında bir hata mesajı gösterilebilir
      alert("Lütfen tüm alanları doldurun.");
    } else {
        const yeniKisi = new Kisi(`${isim.value}`, `${soyisim.value}`, `${isim.value}`, `${isim.value}`);
  
      fetch('employees.json')
        .then(response => response.json())
        .then(data => {
          data.forEach(employee => {
            const row = list.insertRow();
            row.innerHTML = `<tr>
              <td>${isim.value}</td>
              <td>${soyisim.value}</td>
              <td>${yas.value}</td>
              <td>${maas.value}</td>
              <td><a href="#none"><i class="fa-solid fa-xmark" style="font-size: 1.82rem; color: #ffffff;"></i></a>
            </tr> `;
          });
        });
    }
  }
  



// const nesne = {
//     ad: `${isim.value}`,
//     soyisim: `${soyisim.value}`,
//     // yas: `${yas.value}`,
//     // maas: `${maas.value}`
// };

// const jsonNesne = JSON.stringify(nesne);

// console.log(jsonNesne); // {"ad":"Ahmet","yas":30,"adres":"İstanbul"}

function jsoan() {


    var inputVal = document.getElementById("soyisim").value;



    var data = {
        "name": `${isim.value}`,
        "lastname": `${inputVal}`
        // "age": `${}`,
        // "salary": `${}`
    };

    var jsonData = JSON.stringify(data);
    console.log(jsonData);

    console.log(isim.value)
    console.log(inputVal)

}
jsoan()


// function getValue() {
//     var inputVal = document.getElementById("soyisim").value;

//     fetch('employees.json')
//         .then(response => response.json())
//         .then(data => {
//             // JSON dosyasının içeriğini aldık, data değişkeninde saklandı
//             data.soyisim = inputVal;

//             // Yeni JSON verisini kaydediyoruz
//             var jsonData = JSON.stringify(data);
//             fetch('employees.json', {
//                 method: 'PUT', // dosyayı güncellemek için kullanılan metod
//                 body: jsonData
//             });
//         });


// }



// getValue()

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




var xhr = new XMLHttpRequest();
xhr.open("GET", "employees.json", true);
xhr.onload = function () {
    if (xhr.status == 200) {
        var data = JSON.parse(xhr.responseText);
        // burada verilerle yapmak istediğiniz değişiklikleri yapabilirsiniz

    }
};
xhr.send();

// data.property = `
// {

//     "name":  ${isim.value},
//     "lastname":  ${soyisim.value},
//     "age":  ${yas.value},
//     "salary": ${maas.value}


// }


// `;


// var newData = JSON.stringify(data);
// dosyaya yazma işlemini gerçekleştirin

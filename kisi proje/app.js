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


// function verileriAl() {
// }
addEventListener()

function addEventListener() {
  // form.addEventListener("submit", addkisi)
  document.addEventListener("DOMContentLoaded", getAllEmployees)
}




// function addkisi(e) {

//   // form submission event'i yakalanır ve default işlemi engellenir
//   form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     // Form submit işlemleri burada gerçekleştirilir
//   });

//   const isim = document.getElementById("isim");
//   const soyisim = document.getElementById("soyisim");
//   const yas = document.getElementById("yas");
//   const maas = document.getElementById("maas");

//   if (`${isim.value}` === "" || `${soyisim.value}` === "" || `${yas.value}` === "" || `${maas.value}` === "") {
//     // Gerekli tüm alanlar doldurulmadığında bir hata mesajı gösterilebilir
//     alert("Lütfen tüm alanları doldurun.");
//   } else if ((`${isim.value}` != "" || `${soyisim.value}` != "" || `${yas.value}` != "" || `${maas.value}` != "")) {
//     const yeniKisi = {
//       isim: isim.value,
//       soyisim: soyisim.value,
//       yas: yas.value,
//       maas: maas.value
//     };

//     const jsonVerisi = JSON.stringify(yeniKisi);
//     console.log(jsonVerisi);

//     // burada JSON verisini kullanabilirsiniz, örneğin bir API'ye gönderebilirsiniz

//     fetch('employees.json')
//       .then(response => response.json())
//       .then(data => {
//         data.forEach(employees => {
//           const row = list.insertRow();
//           row.innerHTML = `<tr>
//               <td>${isim.value}</td>
//               <td>${soyisim.value}</td>
//               <td>${yas.value}</td>
//               <td>${maas.value}</td>
//               <td><a href="#none"><i class="fa-solid fa-xmark" style="font-size: 1.82rem; color: #ffffff;"></i></a>
//             </tr> `;
//         });
//       });
//   }
// }



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
    "lastname": `${inputVal}`,
    "age": `${yas.value}`,
    "salary": `${maas.value}`
  };

  var jsonData = JSON.stringify(data);
  console.log(jsonData);

  // console.log(isim.value)
  // console.log(inputVal)
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



// Verileri JSON formatında kaydetmek için bir dizi tanımlayın
let kisiler = [];

// Formdan verileri alın ve kisiler dizisine ekleme yapın
function addkisi() {
  event.preventDefault();

  let isim = document.getElementById('isim').value;
  let soyisim = document.getElementById('soyisim').value;
  let yas = document.getElementById('yas').value;
  let maas = document.getElementById('maas').value;

  let kisi = {
    isim: isim,
    soyisim: soyisim,
    yas: yas,
    maas: maas
  }

  kisiler.push(kisi);

  // Kisiler tablosuna yeni bir satır ekleyin
  let newRow = document.createElement('tr');

  newRow.innerHTML = `<td>${isim}</td>
                 <td>${soyisim}</td>
                 <td>${yas}</td>
                 <td>${maas}</td>
                 <td><a href="#none" onclick="deleteRow(this)"><i class="fa-solid fa-xmark" style="font-size: 1.82rem; color: #ffffff;"></i></a></td>`;

  document.getElementById('kisiler').appendChild(newRow);

  // Verileri JSON formatında kaydetmek için kisiler dizisini güncelleyin
  let jsonKisiler = JSON.stringify(kisiler);
  localStorage.setItem('kisiler', jsonKisiler);
}

// Tablodan satır silme işlemi
function deleteRow(row) {
  let index = row.parentNode.parentNode.rowIndex - 1; // index'i bulmak için

  // Tablodan kaydı sil
  document.getElementById('kisiler').deleteRow(index);

  // localStorage'den kaydı sil
  kisiler.splice(index, 1);
  let jsonKisiler = JSON.stringify(kisiler);
  localStorage.setItem('kisiler', jsonKisiler);
}

// Sayfa yüklendiğinde önceki verileri yükleme
window.onload = function () {
  let jsonKisiler = localStorage.getItem('kisiler');

  if (jsonKisiler) {
    kisiler = JSON.parse(jsonKisiler);

    kisiler.forEach(function (kisi) {
      let newRow = document.createElement('tr');

      newRow.innerHTML = `<td>${kisi.isim}</td>
                         <td>${kisi.soyisim}</td>
                         <td>${kisi.yas}</td>
                         <td>${kisi.maas}</td>
                         <td><a href="#none" onclick="deleteRow(this)"><i class="fa-solid fa-xmark" style="font-size: 1.82rem; color: #ffffff;"></i></a></td>`;

      document.getElementById('kisiler').appendChild(newRow);
    });
  }
}





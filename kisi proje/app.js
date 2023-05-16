const form = document.querySelector("#list-from");
const nameInput = document.querySelector("#isim");
const lastnameInput = document.querySelector("#soyisim");
const ageInput = document.querySelector("#yas");
const salaryInput = document.querySelector("#maas");
const list = document.querySelector("#kisiler");

// employees.json dosyasındaki verileri localStorage'a kaydetme
fetch('employees.json')
  .then(response => response.json())
  .then(data => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees'));
    if (!storedEmployees) {
      localStorage.setItem('employees', JSON.stringify(data));
      updateTable(data); // Tabloyu güncelleme
    } else {
      updateTable(storedEmployees); // Tabloyu güncelleme
    }
  })
  .catch(error => console.error(error));

// Form submit edildiğinde çalışacak kodlar
form.addEventListener("submit", function (event) {
  event.preventDefault(); // sayfa yenilemesini engelleme

  // Formdan verileri alalım
  const name = nameInput.value;
  const lastname = lastnameInput.value;
  const age = ageInput.value;
  const salary = salaryInput.value;

  if (name === "" || lastname === "" || age === "" || salary === "") {
    alert("Lütfen tüm alanları doldurunuz!");
  } else {
    // Alınan verileri bir JavaScript nesnesi olarak düzenleyelim
    const employee = {
      name,
      lastname,
      age,
      salary
    };
    // Yeni employee verisini localStorage'daki employees dizisine ekleyelim
    const employees = JSON.parse(localStorage.getItem('employees'));
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));

    // Formu temizleme
    form.reset();

    // Tabloyu güncelleme
    updateTable(employees);
  }
});// ...

// Tablodan bir satır silindiğinde çalışacak kodlar
function deleteRow(element) {
  const row = element.closest("tr");
  row.remove();

  const name = row.querySelector("td:first-child").textContent;
  const employees = JSON.parse(localStorage.getItem("employees"));
  const filteredEmployees = employees.filter(function (employee) {
    return employee.name !== name;
  });
  localStorage.setItem("employees", JSON.stringify(filteredEmployees));
}

// ...


// employees dizisindeki verileri tabloya yazdırma
function updateTable(employees) {
  const tableBody = document.querySelector("#kisiler");
  tableBody.innerHTML = ""; // Tablo öğelerini temizleme
  employees.forEach(function (employee) {
    let newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${employee.name}</td>
         <td>${employee.lastname}</td>
         <td>${employee.age}</td>
         <td>${employee.salary}</td>
         <td><a href="#none" onclick="deleteRow(this)"><i class="fa-solid fa-xmark" style="font-size: 1.82rem; color: #ffffff;"></i></a></td>`;
    tableBody.appendChild(newRow);
  });
}

// "employees" JSON dosyasındaki verileri alın
fetch("employees.json")
    .then(response => response.json())
    .then(data => {
        // JSON verilerine sahip olan data değişkeni kullanılabilir

        // HTML tablosunu oluşturun
        let tableBody = document.getElementById("employeeTableBody");
        data.forEach(employee => {
            let row = tableBody.insertRow(-1);
            let nameCell = row.insertCell(0);
            let titleCell = row.insertCell(1);
            let departmentCell = row.insertCell(2);
            nameCell.innerHTML = employee.name;
            titleCell.innerHTML = employee.title;
            departmentCell.innerHTML = employee.department;
        });
    })
    .catch(error => {
        console.error(error);
    });

var favDiv = document.getElementById("favdiv");

favDiv.addEventListener("click", function () {
    inputfunc();
});

function inputfunc() {
    var input = document.getElementById("select");
    var inputvalue = input.value;
    var text = document.getElementById("text");

    if (inputvalue == 1) {
        alert("Lütfen bir il seçiniz.");
    } else if (inputvalue == 2) {
        havadurumu("istanbul");
    } else if (inputvalue == 3) {
        havadurumu("ankara");
    } else if (inputvalue == 4) {
        havadurumu("hatay");
    } else if (inputvalue == 5) {
        havadurumu("antalya");
    }
}

function havadurumu(city) {
    const favButton = document.getElementById("favbutton");
    var apiKey = "7645a6b184db4cdeb6f131246231605";
    var apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=yes&alerts=no`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            var tableHTML = `
            <div>
        
                <table class="table">
                    <h2 id="name">${data.location.name}</h2>
                    <thead>
                        <tr>
                            <td class="thead-tds havadurumu">Hava Durumu Görsel</td>
                            <td class="thead-tds">Tarih</td>
                            <td class="thead-tds">Derece(°C)</td>
                            <td class="thead-tds">Hava Durumu</td>
                            <td class="thead-tds">Nem(%)</td>
                            <td class="thead-tds">Rüzgar(km/s)</td>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
        `;

            for (var i = 0; i < 7; i++) {
                tableHTML += `
                <tr>
                    <td class="havadurumu"><img src="${data.forecast.forecastday[i].day.condition.icon}"></td>
                    <td>${data.forecast.forecastday[i].date}</td>
                    <td>${data.forecast.forecastday[i].day.maxtemp_c}</td>
                    <td>${data.forecast.forecastday[i].day.condition.text}</td>
                    <td>${data.forecast.forecastday[i].day.avghumidity}</td>
                    <td>${data.forecast.forecastday[i].day.maxwind_kph}</td>
                </tr>
            `;
            }

            tableHTML += `
                    </tbody>
                </table>
            </div>
        `;

            text.innerHTML = tableHTML;
        })
        .catch(err => console.log(err));
}


fetch("http://api.weatherapi.com/v1/forecast.json?key=7645a6b184db4cdeb6f131246231605&q=antalya&days=7&aqi=yes&alerts=no")
    .then(Response => Response.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))

// icon değiştirme

function favicon() {
    var input = document.getElementById("select")
    var inputvalue = input.value
    if (inputvalue == 1) {
        alert("lütfen bir il seçiniz")
    } else {
        // function fav() {
        //     var element = document.getElementById("icon");
        //     element.classList.toggle("fa-solid")


        // }
        // function favtext() {

        // }

        // favtext()
    }
}
window.addEventListener('DOMContentLoaded', () => {
    const favDeleteButton = document.querySelector("#favdelete")
    if (!localStorage.getItem('weatherDataArray')) {
        favDeleteButton.style.display = 'none';
    }
});

// ${data.location.name},${data.forecast.forecastday[6].date},${data.forecast.forecastday[6].day.maxtemp_c},${data.forecast.forecastday[6].day.condition.text},${data.forecast.forecastday[6].day.avghumidity},${data.forecast.forecastday[6].day.maxwind_kph}



const select = document.querySelector("#select");
const weatherTable = document.getElementById("weatherTable");
const weathertablethead = document.querySelector("#theadinfo");
var favButton = document.getElementById("favbutton");
const favDeleteButton = document.getElementById("favdelete");
let weatherDataArray = [];

var favdiv = document.querySelector("#favdiv")

var selectedOptionValue; // Tıklama olayı dışında tanımlanan değişken

    favdiv.addEventListener("click", () => {
        selectedOptionValue = select.options[select.selectedIndex].text;
        // console.log(selectedOptionValue)
    });
    selectedOptionValue =  favdiv.addEventListener("click", () => {  selectedOptionValue = select.options[select.selectedIndex].text; });
    
      
       
   
console.log(selectedOptionValue)
favButton.addEventListener("click", () => {
    const selectedOptionValue1 = select.value;
    const favdiv = document.querySelector("#fadiv")
    
    const selectedOptionText = select.options[select.selectedIndex].text;
    const tabloinfo = document.querySelector("#name")
    const tablovalue = tabloinfo.value
    // console.log(tablovalue)
    favButton.addEventListener("click", () => {
    if (selectedOptionValue1 !== '1') {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=7645a6b184db4cdeb6f131246231605&q=${selectedOptionValue}&days=7&aqi=yes&alerts=no`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('API request failed');
                }
            })
            .then(data => {
                // Check if the data already exists in the array
                const existingIndex = weatherDataArray.findIndex(item => JSON.stringify(item) === JSON.stringify(data));

                if (existingIndex !== -1) {
                    // Remove the existing data from the array
                    weatherDataArray.splice(existingIndex, 1);
                }

                // Store the weather data in the array
                weatherDataArray.push(data);

                // Save the array to local storage
                localStorage.setItem('weatherDataArray', JSON.stringify(weatherDataArray));

                displayWeatherData();

                // Update the text div with the new data
                const textDiv = document.getElementById('text');
                textDiv.innerHTML = tableHTML; // Assuming `tableHTML` contains the HTML content you want to set
            })
            .catch(err => console.log(err));
    } 
})});


favButton.addEventListener("click", function () {
    const selectedOptionText = select.options[select.selectedIndex].text;

    const existingIndex = weatherDataArray.findIndex(item => item.location?.name === selectedOptionText);
    if (existingIndex !== -1) {
        // Remove the data from the array
        weatherDataArray.splice(existingIndex, 1);

        // Remove the data from local storage
        localStorage.setItem('weatherDataArray', JSON.stringify(weatherDataArray));

        // Refresh the table
        displayWeatherData();
    }
});

function displayWeatherData() {
    // Clear previous table content
    weatherTable.innerHTML = '';

    favDeleteButton.style.display = 'block';

    // Clear favinfo content
    const favInfo = document.getElementById('favinfo');
    favInfo.innerHTML = '';

    weatherDataArray.forEach(weatherData => {
        const locationName = weatherData.location.name;
        const forecastDays = weatherData.forecast?.forecastday;

        // Create table header for current location
        const tableHeader = document.createElement('thead');
        tableHeader.innerHTML = `
            <tr id="theadinfo">
                <th class="havadurumu">Hava Durumu Görsel</th>
                <th>Konum</th>
                <th>Tarih</th>
                <th>Derece(°C)</th>
                <th>Hava Durumu</th>
                <th>Nem(%)</th>
                <th>Rüzgar(km/s)</th>
            </tr>
        `;

        // Create table body for current location
        const tableBody = document.createElement('tbody');

        forecastDays.forEach(day => {
            const tableRow = document.createElement('tr');
            tableRow.innerHTML = `
                <td class="havadurumu"><img src="${day.day.condition.icon}"></td>
                <td>${locationName}</td>
                <td>${day.date}</td>
                <td>${day.day.maxtemp_c}</td>
                <td>${day.day.condition.text}</td>
                <td>${day.day.avghumidity}</td>
                <td>${day.day.maxwind_kph}</td>
            `;
            tableBody.appendChild(tableRow);
        });

        // Create table element for current location
        const locationTable = document.createElement('table');
        locationTable.className = "w-100 my-5"
        locationTable.appendChild(tableHeader);
        locationTable.appendChild(tableBody);

        // Append the table to the weatherTable element
        weatherTable.appendChild(locationTable);
    });

    // const favInfo = document.getElementById('favinfo');
    if (weatherDataArray.length === 0) {
        favInfo.innerHTML = '<p id="favinfo" class="mini-text muted">Daha hiçbir favori iller seçilmemiş</p>';
    } else {
        favInfo.innerHTML = '';
    }

}


favDeleteButton.addEventListener("click", () => {
    const selectedOptionText = select.options[select.selectedIndex].text;
    const favInfo = document.getElementById('favinfo');

    // Remove the data from the array and localStorage
    weatherDataArray = weatherDataArray.filter(item => item.location?.name !== selectedOptionText);
    localStorage.setItem('weatherDataArray', JSON.stringify(weatherDataArray));

    // Refresh the table
    displayWeatherData();

    if (!localStorage.getItem('weatherDataArray')) {
        favDeleteButton.style.display = 'none';
    }
    // Remove the data from the array
    weatherDataArray = weatherDataArray.filter(item => item.location?.name !== selectedOptionText);

    // Remove the data from localStorage if weatherDataArray is empty
    if (weatherDataArray.length === 0) {
        localStorage.removeItem('weatherDataArray');
    } else {
        // Update the data in localStorage
        localStorage.setItem('weatherDataArray', JSON.stringify(weatherDataArray));
    }

    // Clear the table content
    //   weathertablethead.innerHTML = "";
    //   favInfo.innerHTML = '  <p id="favinfo" class="mini-text muted">daha hiçbir favori iller seçilmemiş</p>';

    if (!localStorage.getItem('weatherDataArray')) {
        favInfo.innerHTML = '<p id="favinfo" class="mini-text muted">Daha hiçbir favori iller seçilmemiş</p>';
        // favDeleteButton.className ="ds-none"

        if (!localStorage.getItem('weatherDataArray')) {
            favDeleteButton.style.display = 'none';
        }

    }
});



const storedWeatherDataArray = localStorage.getItem('weatherDataArray');
if (storedWeatherDataArray) {
    weatherDataArray = JSON.parse(storedWeatherDataArray);
    displayWeatherData();
}

document.addEventListener('DOMContentLoaded', () => {
    const favButton = document.querySelector('#favbutton');
    favButton.style.display = 'none';
});
function favbuttonselect() {

    if (select.value !== "1") {
        favButton.style.display = "block";
    } else {
        favButton.style.display = "none";
    }


}
//http://api.weatherapi.com/v1/forecast.json?key=7645a6b184db4cdeb6f131246231605%20&q=istanbul&days=7&aqi=yes&alerts=no
//https://www.weatherapi.com/api-explorer.aspx#history
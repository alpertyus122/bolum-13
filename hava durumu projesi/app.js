


function inputfunc() {
    var input = document.getElementById("select")
    var inputvalue = input.value
    var text = document.getElementById("text")
    if (inputvalue == 1) {
        //hata lütfen il seçiniz
        alert("lütfen bir il seçiniz")
    } else if (inputvalue == 2) {


        function havadurumu() {

            fetch("http://api.weatherapi.com/v1/forecast.json?key=7645a6b184db4cdeb6f131246231605&q=istanbul&days=7&aqi=yes&alerts=yes")
                .then(Response => Response.json())
                .then(data => {
                    text.innerHTML = `
                    
                    <div>
                    <div  id="ds">
                    <button id="favbutton button" class="btn-outline-warning btn"><i class="fa-regular fa-star" style="color: #ffea00;"></i></button>
                </div>
                    <table class="table">
                    <h2>${data.location.name}</h2>
<thead>
<tr ><td class="thead-tds havadurumu">hava durumu gösrel </td><td class=" thead-tds">Tarih</td>  <td class="  thead-tds">Derece(°C) </td> <td class=" thead-tds">hava durumu</td> <td class=" thead-tds">Nem(%)</td> <td class=" thead-tds">Rüzgar(km/s)</td> </tr>
</thead>

<tbody class="table-group-divider">


<tr>
<td class="havadurumu"><img src="${data.forecast.forecastday[0].day.condition.icon}"><td > ${data.forecast.forecastday[0].date} </td> <td>${data.forecast.forecastday[0].day.maxtemp_c} </td><td>${data.forecast.forecastday[0].day.condition.text}</td><td>${data.forecast.forecastday[0].day.avghumidity}</td><td>${data.forecast.forecastday[0].day.maxwind_kph}</td>
</tr>

<tr>
<td class="havadurumu"><img src="${data.forecast.forecastday[1].day.condition.icon}"><td > ${data.forecast.forecastday[1].date} </td> <td>${data.forecast.forecastday[1].day.maxtemp_c} </td><td>${data.forecast.forecastday[1].day.condition.text}</td><td>${data.forecast.forecastday[1].day.avghumidity}</td><td>${data.forecast.forecastday[1].day.maxwind_kph}</td>
</tr>

<tr>
<td class="havadurumu"><img src="${data.forecast.forecastday[2].day.condition.icon}"><td > ${data.forecast.forecastday[2].date} </td> <td>${data.forecast.forecastday[2].day.maxtemp_c} </td><td>${data.forecast.forecastday[2].day.condition.text}</td><td>${data.forecast.forecastday[2].day.avghumidity}</td><td>${data.forecast.forecastday[2].day.maxwind_kph}</td>
</tr>

<tr>
<td class="havadurumu"><img src="${data.forecast.forecastday[3].day.condition.icon}"><td > ${data.forecast.forecastday[3].date} </td> <td>${data.forecast.forecastday[3].day.maxtemp_c} </td><td>${data.forecast.forecastday[3].day.condition.text}</td><td>${data.forecast.forecastday[3].day.avghumidity}</td><td>${data.forecast.forecastday[3].day.maxwind_kph}</td>
</tr>

<tr>
<td class="havadurumu"><img src="${data.forecast.forecastday[4].day.condition.icon}"><td > ${data.forecast.forecastday[4].date} </td> <td>${data.forecast.forecastday[4].day.maxtemp_c} </td><td>${data.forecast.forecastday[4].day.condition.text}</td><td>${data.forecast.forecastday[4].day.avghumidity}</td><td>${data.forecast.forecastday[4].day.maxwind_kph}</td>
</tr>

<tr>
<td class="havadurumu"><img src="${data.forecast.forecastday[5].day.condition.icon}"><td > ${data.forecast.forecastday[5].date} </td> <td>${data.forecast.forecastday[5].day.maxtemp_c} </td><td>${data.forecast.forecastday[5].day.condition.text}</td><td>${data.forecast.forecastday[5].day.avghumidity}</td><td>${data.forecast.forecastday[5].day.maxwind_kph}</td>
</tr>

<tr>
<td class="havadurumu"><img src="${data.forecast.forecastday[6].day.condition.icon}"><td > ${data.forecast.forecastday[6].date} </td> <td>${data.forecast.forecastday[6].day.maxtemp_c} </td><td>${data.forecast.forecastday[6].day.condition.text}</td><td>${data.forecast.forecastday[6].day.avghumidity}</td><td>${data.forecast.forecastday[6].day.maxwind_kph}</td>
</tr>


</tbody>
                    </table>
                    </div>
                    
                    
  

                    `
                })
                .catch(err => console.log(err))
        }
        havadurumu()
        // ${data.location.name},${data.forecast.forecastday[6].date},${data.forecast.forecastday[6].day.maxtemp_c},${data.forecast.forecastday[6].day.condition.text},${data.forecast.forecastday[6].day.avghumidity},${data.forecast.forecastday[6].day.maxwind_kph}

    }
    else if (inputvalue == 3) {

        function havadurumu() {
            fetch("http://api.weatherapi.com/v1/forecast.json?key=7645a6b184db4cdeb6f131246231605&q=ankara&days=7&aqi=yes&alerts=no")
                .then(Response => Response.json())
                .then(data => {
                    text.innerHTML = `
                    
                    <div>
                    <div  id="ds">
                    <button id="favbutton button" class="btn-outline-warning btn"><i class="fa-regular fa-star" style="color: #ffea00;"></i></button>
                </div>
                    <table class="table">
                    <h2>  ${data.location.name}</h2>
<thead>
<tr ><td class="thead-tds havadurumu">hava durumu gösrel</td><td class=" thead-tds">Tarih</td>  <td class="  thead-tds">Derece(°C) </td> <td class=" thead-tds">hava durumu</td> <td class=" thead-tds">Nem(%)</td> <td class=" thead-tds">Rüzgar(km/s)</td> </tr>
</thead>

<tbody class="table-group-divider">


<tr>
<td class="havadurumu"><img src="${data.forecast.forecastday[0].day.condition.icon}"><td > ${data.forecast.forecastday[0].date} </td> <td>${data.forecast.forecastday[0].day.maxtemp_c} </td><td>${data.forecast.forecastday[0].day.condition.text}</td><td>${data.forecast.forecastday[0].day.avghumidity}</td><td>${data.forecast.forecastday[0].day.maxwind_kph}</td>
</tr>

<tr>
<td class="havadurumu"><img src="${data.forecast.forecastday[1].day.condition.icon}"><td > ${data.forecast.forecastday[1].date} </td> <td>${data.forecast.forecastday[1].day.maxtemp_c} </td><td>${data.forecast.forecastday[1].day.condition.text}</td><td>${data.forecast.forecastday[1].day.avghumidity}</td><td>${data.forecast.forecastday[1].day.maxwind_kph}</td>
</tr>

<tr>
<td class="havadurumu"><img src="${data.forecast.forecastday[2].day.condition.icon}"><td > ${data.forecast.forecastday[2].date} </td> <td>${data.forecast.forecastday[2].day.maxtemp_c} </td><td>${data.forecast.forecastday[2].day.condition.text}</td><td>${data.forecast.forecastday[2].day.avghumidity}</td><td>${data.forecast.forecastday[2].day.maxwind_kph}</td>
</tr>

<tr>
<td class="havadurumu"><img src="${data.forecast.forecastday[3].day.condition.icon}"><td > ${data.forecast.forecastday[3].date} </td> <td>${data.forecast.forecastday[3].day.maxtemp_c} </td><td>${data.forecast.forecastday[3].day.condition.text}</td><td>${data.forecast.forecastday[3].day.avghumidity}</td><td>${data.forecast.forecastday[3].day.maxwind_kph}</td>
</tr>

<tr>
<td class="havadurumu"><img src="${data.forecast.forecastday[4].day.condition.icon}"><td > ${data.forecast.forecastday[4].date} </td> <td>${data.forecast.forecastday[4].day.maxtemp_c} </td><td>${data.forecast.forecastday[4].day.condition.text}</td><td>${data.forecast.forecastday[4].day.avghumidity}</td><td>${data.forecast.forecastday[4].day.maxwind_kph}</td>
</tr>

<tr>
<td class="havadurumu"><img src="${data.forecast.forecastday[5].day.condition.icon}"><td > ${data.forecast.forecastday[5].date} </td> <td>${data.forecast.forecastday[5].day.maxtemp_c} </td><td>${data.forecast.forecastday[5].day.condition.text}</td><td>${data.forecast.forecastday[5].day.avghumidity}</td><td>${data.forecast.forecastday[5].day.maxwind_kph}</td>
</tr>

<tr>
<td class="havadurumu"><img src="${data.forecast.forecastday[6].day.condition.icon}"><td > ${data.forecast.forecastday[6].date} </td> <td>${data.forecast.forecastday[6].day.maxtemp_c} </td><td>${data.forecast.forecastday[6].day.condition.text}</td><td>${data.forecast.forecastday[6].day.avghumidity}</td><td>${data.forecast.forecastday[6].day.maxwind_kph}</td>
</tr>


</tbody>
                    </table>
                    </div>
                    
                    
  

                    `
                })
                .catch(err => console.log(err))
        }
        havadurumu()
    }
    else if (inputvalue == 4) {
        function havadurumu() {
            fetch("http://api.weatherapi.com/v1/forecast.json?key=7645a6b184db4cdeb6f131246231605&q=hatay&days=7&aqi=yes&alerts=no")
                .then(Response => Response.json())
                .then(data => {
                    text.innerHTML = `
                    
                    <div>

                    <div  id="ds" >
                    <button id="favbutton button" class="btn-outline-warning btn"><i class="fa-regular fa-star" style="color: #ffea00;"></i></button>
                </div>

                    <table class="table">
                    <h2>  ${data.location.name}</h2>
<thead>
<tr ><td class="thead-tds havadurumu">hava durumu gösrel</td><td class=" thead-tds">Tarih</td>  <td class="  thead-tds">Derece(°C) </td> <td class=" thead-tds">hava durumu</td> <td class=" thead-tds">Nem(%)</td> <td class=" thead-tds">Rüzgar(km/s)</td> </tr>
</thead>

<tbody class="table-group-divider">


<tr>
<td class="havadurumu"><img src="${data.forecast.forecastday[0].day.condition.icon}"></td><td > ${data.forecast.forecastday[0].date} </td> <td>${data.forecast.forecastday[0].day.maxtemp_c} </td><td>${data.forecast.forecastday[0].day.condition.text}</td><td>${data.forecast.forecastday[0].day.avghumidity}</td><td>${data.forecast.forecastday[0].day.maxwind_kph}</td>
</tr>

<tr>
<td class="havadurumu"><img src="${data.forecast.forecastday[1].day.condition.icon}"></td><td > ${data.forecast.forecastday[1].date} </td> <td>${data.forecast.forecastday[1].day.maxtemp_c} </td><td>${data.forecast.forecastday[1].day.condition.text}</td><td>${data.forecast.forecastday[1].day.avghumidity}</td><td>${data.forecast.forecastday[1].day.maxwind_kph}</td>
</tr>

<tr>
<td class="havadurumu"><img src="${data.forecast.forecastday[2].day.condition.icon}"></td><td > ${data.forecast.forecastday[2].date} </td> <td>${data.forecast.forecastday[2].day.maxtemp_c} </td><td>${data.forecast.forecastday[2].day.condition.text}</td><td>${data.forecast.forecastday[2].day.avghumidity}</td><td>${data.forecast.forecastday[2].day.maxwind_kph}</td>
</tr>

<tr>
<td class="havadurumu"><img src="${data.forecast.forecastday[3].day.condition.icon}"></td><td > ${data.forecast.forecastday[3].date} </td> <td>${data.forecast.forecastday[3].day.maxtemp_c} </td><td>${data.forecast.forecastday[3].day.condition.text}</td><td>${data.forecast.forecastday[3].day.avghumidity}</td><td>${data.forecast.forecastday[3].day.maxwind_kph}</td>
</tr>

<tr>
<td class="havadurumu"><img src="${data.forecast.forecastday[4].day.condition.icon}"></td><td > ${data.forecast.forecastday[4].date} </td> <td>${data.forecast.forecastday[4].day.maxtemp_c} </td><td>${data.forecast.forecastday[4].day.condition.text}</td><td>${data.forecast.forecastday[4].day.avghumidity}</td><td>${data.forecast.forecastday[4].day.maxwind_kph}</td>
</tr>

<tr>
<td class="havadurumu"><img src="${data.forecast.forecastday[5].day.condition.icon}"></td><td > ${data.forecast.forecastday[5].date} </td> <td>${data.forecast.forecastday[5].day.maxtemp_c} </td><td>${data.forecast.forecastday[5].day.condition.text}</td><td>${data.forecast.forecastday[5].day.avghumidity}</td><td>${data.forecast.forecastday[5].day.maxwind_kph}</td>
</tr>

<tr>
<td class="havadurumu"><img src="${data.forecast.forecastday[6].day.condition.icon}"></td><td > ${data.forecast.forecastday[6].date} </td> <td>${data.forecast.forecastday[6].day.maxtemp_c} </td><td>${data.forecast.forecastday[6].day.condition.text}</td><td>${data.forecast.forecastday[6].day.avghumidity}</td><td>${data.forecast.forecastday[6].day.maxwind_kph}</td>
</tr>


</tbody>
                    </table>
                    </div>
                    
                    
  

                    `
                })
                .catch(err => console.log(err))
        }
        havadurumu()
    }
    else if (inputvalue == 5) {
        function havadurumu() {
            fetch("http://api.weatherapi.com/v1/forecast.json?key=7645a6b184db4cdeb6f131246231605&q=antalya&days=7&aqi=yes&alerts=no")
                .then(Response => Response.json())
                .then(data => {
                    text.innerHTML = `
                    
                    <div>

                      <div  id="ds" >
                    <button id="favbutton button" class="btn-outline-warning btn"><i class="fa-regular fa-star" style="color: #ffea00;"></i></button>
                </div>

               
                    <table class="table">
                    
                  <h2>  ${data.location.name}</h2>
<thead>
<tr ><td class="thead-tds havadurumu">hava durumu gösrel</td> <td class=" thead-tds">Tarih</td>  <td class="  thead-tds">Derece(°C) </td> <td class=" thead-tds">hava durumu</td> <td class=" thead-tds">Nem(%)</td> <td class=" thead-tds">Rüzgar(km/s)</td> </tr>
</thead>

<tbody class="table-group-divider">


  <tr>
  <td class="havadurumu"><img src="${data.forecast.forecastday[0].day.condition.icon}"></td> <td > ${data.forecast.forecastday[0].date} </td> <td>${data.forecast.forecastday[0].day.maxtemp_c} </td><td>${data.forecast.forecastday[0].day.condition.text}</td><td>${data.forecast.forecastday[0].day.avghumidity}</td><td>${data.forecast.forecastday[0].day.maxwind_kph}</td>
  </tr>

  <tr>
  <td  class="havadurumu"><img src="${data.forecast.forecastday[1].day.condition.icon}"></td><td > ${data.forecast.forecastday[1].date} </td> <td>${data.forecast.forecastday[1].day.maxtemp_c} </td><td>${data.forecast.forecastday[1].day.condition.text}</td><td>${data.forecast.forecastday[1].day.avghumidity}</td><td>${data.forecast.forecastday[1].day.maxwind_kph}</td>
  </tr>

  <tr>
  <td class="havadurumu"><img src="${data.forecast.forecastday[2].day.condition.icon}"></td><td > ${data.forecast.forecastday[2].date} </td> <td>${data.forecast.forecastday[2].day.maxtemp_c} </td><td>${data.forecast.forecastday[2].day.condition.text}</td><td>${data.forecast.forecastday[2].day.avghumidity}</td><td>${data.forecast.forecastday[2].day.maxwind_kph}</td>
  </tr>

  <tr>
  <td class="havadurumu"><img src="${data.forecast.forecastday[3].day.condition.icon}"></td><td > ${data.forecast.forecastday[3].date} </td> <td>${data.forecast.forecastday[3].day.maxtemp_c} </td><td>${data.forecast.forecastday[3].day.condition.text}</td><td>${data.forecast.forecastday[3].day.avghumidity}</td><td>${data.forecast.forecastday[3].day.maxwind_kph}</td>
  </tr>

  <tr>
  <td class="havadurumu"><img src="${data.forecast.forecastday[4].day.condition.icon}"></td><td > ${data.forecast.forecastday[4].date} </td> <td>${data.forecast.forecastday[4].day.maxtemp_c} </td><td>${data.forecast.forecastday[4].day.condition.text}</td><td>${data.forecast.forecastday[4].day.avghumidity}</td><td>${data.forecast.forecastday[4].day.maxwind_kph}</td>
  </tr>

  <tr>
  <td class="havadurumu"><img src="${data.forecast.forecastday[5].day.condition.icon}"></td><td > ${data.forecast.forecastday[5].date} </td> <td>${data.forecast.forecastday[5].day.maxtemp_c} </td><td>${data.forecast.forecastday[5].day.condition.text}</td><td>${data.forecast.forecastday[5].day.avghumidity}</td><td>${data.forecast.forecastday[5].day.maxwind_kph}</td>
  </tr>

  <tr>
  <td class="havadurumu"><img src="${data.forecast.forecastday[6].day.condition.icon}"></td><td> ${data.forecast.forecastday[6].date} </td> <td>${data.forecast.forecastday[6].day.maxtemp_c} </td><td>${data.forecast.forecastday[6].day.condition.text}</td><td>${data.forecast.forecastday[6].day.avghumidity}</td><td>${data.forecast.forecastday[6].day.maxwind_kph}</td>
  </tr>


</tbody>
                    </table>
                    </div>
                    
                    
  

                    `
                })
                .catch(err => console.log(err))
        }
        havadurumu()
    }




    // alert("seçilen değer:  " + inputvalue)
    // console.log(inputvalue)
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

// ${data.location.name},${data.forecast.forecastday[6].date},${data.forecast.forecastday[6].day.maxtemp_c},${data.forecast.forecastday[6].day.condition.text},${data.forecast.forecastday[6].day.avghumidity},${data.forecast.forecastday[6].day.maxwind_kph}


const select = document.getElementById('select');
const button = document.getElementById('button');
const weatherTable = document.getElementById('weatherTable');
let weatherDataArray = [];

button.addEventListener('click', () => {
    const selectedOptionValue = select.value;
    const selectedOptionText = select.options[select.selectedIndex].text;

    if (selectedOptionValue !== '1') {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=7645a6b184db4cdeb6f131246231605&q=${selectedOptionValue}&days=7&aqi=yes&alerts=no`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('API request failed');
                }
            })
            .then(data => {
                // Store the weather data in the array
                weatherDataArray.push(data);

                // Save the array to local storage
                localStorage.setItem('weatherDataArray', JSON.stringify(weatherDataArray));

                displayWeatherData(data, selectedOptionText);
            })
            .catch(err => console.log(err));
    }
});

function displayWeatherData(data, selectedOptionText) {
    // Clear previous table content
    weatherTable.innerHTML = '';

    // Create table header
    const tableHeader = document.createElement('thead');
    tableHeader.innerHTML = `
    <tr>
      <th>Konum</th>
      <th>Tarih</th>
      <th>Derece(°C)</th>
      <th>Hava Durumu</th>
      <th>Nem(%)</th>
      <th>Rüzgar(km/s)</th>
    </tr>
  `;

    // Create table body
    const tableBody = document.createElement('tbody');

    data.forecast?.forecastday?.forEach(day => {
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
      <td>${selectedOptionText}</td>
      <td>${day.date}</td>
      <td>${day.day.maxtemp_c}</td>
      <td>${day.day.condition.text}</td>
      <td>${day.day.avghumidity}</td>
      <td>${day.day.maxwind_kph}</td>
    `;
        tableBody.appendChild(tableRow);
    });

    weatherTable.appendChild(tableHeader);
    weatherTable.appendChild(tableBody);
}



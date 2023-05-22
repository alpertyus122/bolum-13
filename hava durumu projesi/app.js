


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
                    <table class="table">
<thead>
<tr ><td class="thead-tds">konum</td><td class=" thead-tds">Tarih</td>  <td class="  thead-tds">Derece(°C) </td> <td class=" thead-tds">hava durumu</td> <td class=" thead-tds">Nem(%)</td> <td class=" thead-tds">Rüzgar(km/s)</td> </tr>
</thead>

<tbody class="table-group-divider">


<tr>
<td>${data.location.name}</td><td > ${data.forecast.forecastday[0].date} </td> <td>${data.forecast.forecastday[0].day.maxtemp_c} </td><td>${data.forecast.forecastday[0].day.condition.text}</td><td>${data.forecast.forecastday[0].day.avghumidity}</td><td>${data.forecast.forecastday[0].day.maxwind_kph}</td>
</tr>

<tr>
<td>${data.location.name}</td><td > ${data.forecast.forecastday[1].date} </td> <td>${data.forecast.forecastday[1].day.maxtemp_c} </td><td>${data.forecast.forecastday[1].day.condition.text}</td><td>${data.forecast.forecastday[1].day.avghumidity}</td><td>${data.forecast.forecastday[1].day.maxwind_kph}</td>
</tr>

<tr>
<td>${data.location.name}</td><td > ${data.forecast.forecastday[2].date} </td> <td>${data.forecast.forecastday[2].day.maxtemp_c} </td><td>${data.forecast.forecastday[2].day.condition.text}</td><td>${data.forecast.forecastday[2].day.avghumidity}</td><td>${data.forecast.forecastday[2].day.maxwind_kph}</td>
</tr>

<tr>
<td>${data.location.name}</td><td > ${data.forecast.forecastday[3].date} </td> <td>${data.forecast.forecastday[3].day.maxtemp_c} </td><td>${data.forecast.forecastday[3].day.condition.text}</td><td>${data.forecast.forecastday[3].day.avghumidity}</td><td>${data.forecast.forecastday[3].day.maxwind_kph}</td>
</tr>

<tr>
<td>${data.location.name}</td><td > ${data.forecast.forecastday[4].date} </td> <td>${data.forecast.forecastday[4].day.maxtemp_c} </td><td>${data.forecast.forecastday[4].day.condition.text}</td><td>${data.forecast.forecastday[4].day.avghumidity}</td><td>${data.forecast.forecastday[4].day.maxwind_kph}</td>
</tr>

<tr>
<td>${data.location.name}</td><td > ${data.forecast.forecastday[5].date} </td> <td>${data.forecast.forecastday[5].day.maxtemp_c} </td><td>${data.forecast.forecastday[5].day.condition.text}</td><td>${data.forecast.forecastday[5].day.avghumidity}</td><td>${data.forecast.forecastday[5].day.maxwind_kph}</td>
</tr>

<tr>
<td>${data.location.name}</td><td > ${data.forecast.forecastday[6].date} </td> <td>${data.forecast.forecastday[6].day.maxtemp_c} </td><td>${data.forecast.forecastday[6].day.condition.text}</td><td>${data.forecast.forecastday[6].day.avghumidity}</td><td>${data.forecast.forecastday[6].day.maxwind_kph}</td>
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
    else if (inputvalue == 3) {

        function havadurumu() {
            fetch("http://api.weatherapi.com/v1/forecast.json?key=7645a6b184db4cdeb6f131246231605&q=ankara&days=7&aqi=yes&alerts=no")
                .then(Response => Response.json())
                .then(data => {
                    text.innerHTML = `
                    
                    <div>
                    <table class="table">
<thead>
<tr ><td class="thead-tds">konum</td><td class=" thead-tds">Tarih</td>  <td class="  thead-tds">Derece(°C) </td> <td class=" thead-tds">hava durumu</td> <td class=" thead-tds">Nem(%)</td> <td class=" thead-tds">Rüzgar(km/s)</td> </tr>
</thead>

<tbody class="table-group-divider">


<tr>
<td>${data.location.name}</td><td > ${data.forecast.forecastday[0].date} </td> <td>${data.forecast.forecastday[0].day.maxtemp_c} </td><td>${data.forecast.forecastday[0].day.condition.text}</td><td>${data.forecast.forecastday[0].day.avghumidity}</td><td>${data.forecast.forecastday[0].day.maxwind_kph}</td>
</tr>

<tr>
<td>${data.location.name}</td><td > ${data.forecast.forecastday[1].date} </td> <td>${data.forecast.forecastday[1].day.maxtemp_c} </td><td>${data.forecast.forecastday[1].day.condition.text}</td><td>${data.forecast.forecastday[1].day.avghumidity}</td><td>${data.forecast.forecastday[1].day.maxwind_kph}</td>
</tr>

<tr>
<td>${data.location.name}</td><td > ${data.forecast.forecastday[2].date} </td> <td>${data.forecast.forecastday[2].day.maxtemp_c} </td><td>${data.forecast.forecastday[2].day.condition.text}</td><td>${data.forecast.forecastday[2].day.avghumidity}</td><td>${data.forecast.forecastday[2].day.maxwind_kph}</td>
</tr>

<tr>
<td>${data.location.name}</td><td > ${data.forecast.forecastday[3].date} </td> <td>${data.forecast.forecastday[3].day.maxtemp_c} </td><td>${data.forecast.forecastday[3].day.condition.text}</td><td>${data.forecast.forecastday[3].day.avghumidity}</td><td>${data.forecast.forecastday[3].day.maxwind_kph}</td>
</tr>

<tr>
<td>${data.location.name}</td><td > ${data.forecast.forecastday[4].date} </td> <td>${data.forecast.forecastday[4].day.maxtemp_c} </td><td>${data.forecast.forecastday[4].day.condition.text}</td><td>${data.forecast.forecastday[4].day.avghumidity}</td><td>${data.forecast.forecastday[4].day.maxwind_kph}</td>
</tr>

<tr>
<td>${data.location.name}</td><td > ${data.forecast.forecastday[5].date} </td> <td>${data.forecast.forecastday[5].day.maxtemp_c} </td><td>${data.forecast.forecastday[5].day.condition.text}</td><td>${data.forecast.forecastday[5].day.avghumidity}</td><td>${data.forecast.forecastday[5].day.maxwind_kph}</td>
</tr>

<tr>
<td>${data.location.name}</td><td > ${data.forecast.forecastday[6].date} </td> <td>${data.forecast.forecastday[6].day.maxtemp_c} </td><td>${data.forecast.forecastday[6].day.condition.text}</td><td>${data.forecast.forecastday[6].day.avghumidity}</td><td>${data.forecast.forecastday[6].day.maxwind_kph}</td>
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
                    <table class="table">
<thead>
<tr ><td class="thead-tds">konum</td><td class=" thead-tds">Tarih</td>  <td class="  thead-tds">Derece(°C) </td> <td class=" thead-tds">hava durumu</td> <td class=" thead-tds">Nem(%)</td> <td class=" thead-tds">Rüzgar(km/s)</td> </tr>
</thead>

<tbody class="table-group-divider">


<tr>
<td>${data.location.name}</td><td > ${data.forecast.forecastday[0].date} </td> <td>${data.forecast.forecastday[0].day.maxtemp_c} </td><td>${data.forecast.forecastday[0].day.condition.text}</td><td>${data.forecast.forecastday[0].day.avghumidity}</td><td>${data.forecast.forecastday[0].day.maxwind_kph}</td>
</tr>

<tr>
<td>${data.location.name}</td><td > ${data.forecast.forecastday[1].date} </td> <td>${data.forecast.forecastday[1].day.maxtemp_c} </td><td>${data.forecast.forecastday[1].day.condition.text}</td><td>${data.forecast.forecastday[1].day.avghumidity}</td><td>${data.forecast.forecastday[1].day.maxwind_kph}</td>
</tr>

<tr>
<td>${data.location.name}</td><td > ${data.forecast.forecastday[2].date} </td> <td>${data.forecast.forecastday[2].day.maxtemp_c} </td><td>${data.forecast.forecastday[2].day.condition.text}</td><td>${data.forecast.forecastday[2].day.avghumidity}</td><td>${data.forecast.forecastday[2].day.maxwind_kph}</td>
</tr>

<tr>
<td>${data.location.name}</td><td > ${data.forecast.forecastday[3].date} </td> <td>${data.forecast.forecastday[3].day.maxtemp_c} </td><td>${data.forecast.forecastday[3].day.condition.text}</td><td>${data.forecast.forecastday[3].day.avghumidity}</td><td>${data.forecast.forecastday[3].day.maxwind_kph}</td>
</tr>

<tr>
<td>${data.location.name}</td><td > ${data.forecast.forecastday[4].date} </td> <td>${data.forecast.forecastday[4].day.maxtemp_c} </td><td>${data.forecast.forecastday[4].day.condition.text}</td><td>${data.forecast.forecastday[4].day.avghumidity}</td><td>${data.forecast.forecastday[4].day.maxwind_kph}</td>
</tr>

<tr>
<td>${data.location.name}</td><td > ${data.forecast.forecastday[5].date} </td> <td>${data.forecast.forecastday[5].day.maxtemp_c} </td><td>${data.forecast.forecastday[5].day.condition.text}</td><td>${data.forecast.forecastday[5].day.avghumidity}</td><td>${data.forecast.forecastday[5].day.maxwind_kph}</td>
</tr>

<tr>
<td>${data.location.name}</td><td > ${data.forecast.forecastday[6].date} </td> <td>${data.forecast.forecastday[6].day.maxtemp_c} </td><td>${data.forecast.forecastday[6].day.condition.text}</td><td>${data.forecast.forecastday[6].day.avghumidity}</td><td>${data.forecast.forecastday[6].day.maxwind_kph}</td>
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
                    <table class="table">
<thead>
<tr ><td class="thead-tds">konum</td> <td class=" thead-tds">Tarih</td>  <td class="  thead-tds">Derece(°C) </td> <td class=" thead-tds">hava durumu</td> <td class=" thead-tds">Nem(%)</td> <td class=" thead-tds">Rüzgar(km/s)</td> </tr>
</thead>

<tbody class="table-group-divider">


  <tr>
  <td>${data.location.name}</td> <td > ${data.forecast.forecastday[0].date} </td> <td>${data.forecast.forecastday[0].day.maxtemp_c} </td><td>${data.forecast.forecastday[0].day.condition.text}</td><td>${data.forecast.forecastday[0].day.avghumidity}</td><td>${data.forecast.forecastday[0].day.maxwind_kph}</td>
  </tr>

  <tr>
  <td>${data.location.name}</td><td > ${data.forecast.forecastday[1].date} </td> <td>${data.forecast.forecastday[1].day.maxtemp_c} </td><td>${data.forecast.forecastday[1].day.condition.text}</td><td>${data.forecast.forecastday[1].day.avghumidity}</td><td>${data.forecast.forecastday[1].day.maxwind_kph}</td>
  </tr>

  <tr>
  <td>${data.location.name}</td><td > ${data.forecast.forecastday[2].date} </td> <td>${data.forecast.forecastday[2].day.maxtemp_c} </td><td>${data.forecast.forecastday[2].day.condition.text}</td><td>${data.forecast.forecastday[2].day.avghumidity}</td><td>${data.forecast.forecastday[2].day.maxwind_kph}</td>
  </tr>

  <tr>
  <td>${data.location.name}</td><td > ${data.forecast.forecastday[3].date} </td> <td>${data.forecast.forecastday[3].day.maxtemp_c} </td><td>${data.forecast.forecastday[3].day.condition.text}</td><td>${data.forecast.forecastday[3].day.avghumidity}</td><td>${data.forecast.forecastday[3].day.maxwind_kph}</td>
  </tr>

  <tr>
  <td>${data.location.name}</td><td > ${data.forecast.forecastday[4].date} </td> <td>${data.forecast.forecastday[4].day.maxtemp_c} </td><td>${data.forecast.forecastday[4].day.condition.text}</td><td>${data.forecast.forecastday[4].day.avghumidity}</td><td>${data.forecast.forecastday[4].day.maxwind_kph}</td>
  </tr>

  <tr>
  <td>${data.location.name}</td><td > ${data.forecast.forecastday[5].date} </td> <td>${data.forecast.forecastday[5].day.maxtemp_c} </td><td>${data.forecast.forecastday[5].day.condition.text}</td><td>${data.forecast.forecastday[5].day.avghumidity}</td><td>${data.forecast.forecastday[5].day.maxwind_kph}</td>
  </tr>

  <tr>
  <td>${data.location.name}</td><td> ${data.forecast.forecastday[6].date} </td> <td>${data.forecast.forecastday[6].day.maxtemp_c} </td><td>${data.forecast.forecastday[6].day.condition.text}</td><td>${data.forecast.forecastday[6].day.avghumidity}</td><td>${data.forecast.forecastday[6].day.maxwind_kph}</td>
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


fetch("http://api.weatherapi.com/v1/forecast.json?key=7645a6b184db4cdeb6f131246231605&q=ankara&days=7&aqi=yes&alerts=no")
    .then(Response => Response.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))
    function favori(){
        var input = document.getElementById("select")
var inputvalue = input.value
if (inputvalue == 1) {
    alert("lütfen bir il seçiniz")
} else {
    function fav() {
        var element = document.getElementById("icon");
        element.classList.toggle("fa-solid")


    }
    fav()
}
    }


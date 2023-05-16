function havadurumu() {
    fetch("http://api.weatherapi.com/v1/current.json?key=7645a6b184db4cdeb6f131246231605&q=istanbul&aqi=yes")
        .then(Response => Response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

havadurumu()
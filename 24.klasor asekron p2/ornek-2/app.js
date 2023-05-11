function getTextFile() {

    fetch("example.txt")
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(err => console.log(err))

}
function getJsonFile() {

    fetch("example.json")
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.log(err))
}
function getExternalAPI() {
    fetch("https://api.fastforex.io/fetch-all?api_key=c987a44283-f80d4718a9-rudrxp")
        .then(response => response.json())
        .then(data => console.log(data.results.TRY))
        .catch(err => console.log(err))
}
// getTextFile()
// getJsonFile()
getExternalAPI()
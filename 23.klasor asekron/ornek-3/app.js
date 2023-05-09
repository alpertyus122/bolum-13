document.getElementById("change").addEventListener("click", change)


function change() {

    const xhr = new XMLHttpRequest()

    xhr.open("get", "https://api.fastforex.io/fetch-all?api_key=c987a44283-f80d4718a9-rudrxp")

    xhr.onload = function () {
        if (this.status) {
            const response = JSON.parse(this.responseText)

            const results = response.results.TRY
            const amount = Number(document.getElementById("amount").value)



            document.getElementById("tl").value = amount * results

        }
    }
    xhr.send()

}
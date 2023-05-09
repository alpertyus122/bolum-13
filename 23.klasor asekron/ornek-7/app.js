

class Request {
    constructor() {
        this.xhr = new XMLHttpRequest

    }

    get(url, callback) {

        this.xhr.open("GET", url)



        this.xhr.onload = () => {



            if (this.xhr.status === 200) {
                callback(null, this.xhr.responseText)
            }
            else {
                callback("hata oluştu", null)
            }
        }

        this.xhr.send()

    }
    post(url, data, callback) {
        this.xhr.open("POST", url)
        this.xhr.setRequestHeader("content-type", "application/json")

        this.xhr.onload = () => {
            if (this.xhr.status === 201) {
                callback(null, this.xhr.responseText)
            } else {
                callback("hata oluştu", null)
            }

        }
        this.xhr.send(JSON.stringify(data))
    }

}

const request = new Request()

// request.get("https://jsonplaceholder.typicode.com/albums/51", function (err, response) {
//     if (err === null) {
//         //başarılı
//         console.log(response)
//     } else {
//         //hata
//         console.log(err)
//     }
// })

request.post("https://jsonplaceholder.typicode.com/albums", { userId: 2, title: "thriller" }, function (err, album) {
    if (err === null) {
        console.log(album)
    }
    else {
        console.log(err)
    }
})



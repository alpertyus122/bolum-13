
class Request {

    async get(url) {



        const response = await fetch(url)

        const responsedata = await response.json()

        return responsedata

    }

    async post(url, data) {


        const response = await fetch(url, {

            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const responsedata = await response.json()

        return responsedata
    }



    async put(url, data) {






        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },

        })

        const responsedata = await response.json()

        return responsedata
    }

    async delet(url) {


        const response = await fetch('https://jsonplaceholder.typicode.com/albums/1', {
            method: 'DELETE',
        })


        return 'veri silme işlemi başarılı'
    }
}
const request = new Request()


// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(data => {
// albums = data
// console.log(albums)
// })
//    .catch(err => console.log(err))

// request.post("https://jsonplaceholder.typicode.com/albums", { userId: 1, title: "ta" })
    // .then(newAlbum => console.log(newAlbum))
    // .catch(err => console.log(err))

// request.put("https://jsonplaceholder.typicode.com/albums/10", { userId: 10, title: "lorem" })
    // .then(data => console.log(data))
    // .catch(err => console.log(err))
// 
// request.delet("https://jsonplaceholder.typicode.com/albums/1")
    // .then(message => console.log(message))
    // .catch(err => console.log(err))
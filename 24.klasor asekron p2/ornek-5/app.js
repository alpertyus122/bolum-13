
class Request {

    // get(url) {
    //     return new Promise((resovle, reject) => {
    //         fetch(url)
    //             .then(response => response.json())
    //             .then(data => resovle(data))
    //             .catch(err => reject(err))
    //     })

    // }

    // post(url, data) {

    //     return new Promise((resolve, reject) => {
    //         fetch(url, {
    //             method: 'POST',
    //             body: JSON.stringify(data),
    //             headers: {
    //                 'Content-type': 'application/json; charset=UTF-8',
    //             },
    //         })
    //             .then(response => response.json())
    //             .then(data => resolve(data))
    //             .catch(err => reject(err))
    //     })


    // }
    // put(url, data) {


    //     return new Promise((resolve, reject) => {
    //         fetch(url, {

    //             method: 'PUT',
    //             body: JSON.stringify(data),
    //             headers: {
    //                 'Content-type': 'application/json; charset=UTF-8',
    //             },

    //         })
    //             .then(response => response.json())
    //             .then(data => resolve(data))
    //             .catch(err => reject(err))
    //     })

    // }

    delet(url) {
        return new Promise((resolve, reject) => {
            fetch('https://jsonplaceholder.typicode.com/albums/1', {
                method: 'DELETE',
            }).then(response => resolve("veri silme işlemi başarılı"))
                .catch(err => reject(err))
        })


    }
}
const request = new Request()


// request.get("https://jsonplaceholder.typicode.com/albums")
//     .then(data => {
//         albums = data
//         console.log(albums)
//     })
//     .catch(err => console.log(err))

// request.post("https://jsonplaceholder.typicode.com/albums", { userId: 1, title: "Thriller" })
//     .then(newAlbum => console.log(newAlbum))
//     .catch(err => console.log(err))

// request.put("https://jsonplaceholder.typicode.com/albums/10", { userId: 10, title: "lorem" })
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

request.delet("https://jsonplaceholder.typicode.com/albums/1")
    .then(message => console.log(message))
    .catch(err => console.log(err))
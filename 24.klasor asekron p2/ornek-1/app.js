// function getData(data) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {

//             if (typeof data === "string") {
//                 //olumlu
//                 resolve(data)
//             }
//             else {
//                 //olumsuz
//                 reject(new Error("lütfen string bir değer giriniz"))
//             }
//         }, 1000)

//     })

// }


// getData("12").then(response => console.log("gelen değer" + " " + response))
//     .catch(err => console.error(err))


function addtow(number) {

    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (typeof number === "number") {
                resolve(number + 2)
            }
            else {
                reject(new Error("lütfen bir sayı girin"))
            }
        }, 2000)
    })

}
addtow("10")
    .then(response => {
        console.log(response)
        return response + 2
    }).then(response2 => console.log(response2))
    .catch(err => console.error(err))

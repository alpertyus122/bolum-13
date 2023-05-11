// async function test(data) {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("bu bir değerdir")
//         }, 1000)
//     })


//     let response = await promise


//     return response
// }


// test("merhaba").then(response => console.log(response))





// async function testData(data) {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof data === "string") {
//                 resolve(data)
//             }
//             else {
//                 reject(new Error("lütfen string bir değer girin"))
//             }
//         }, 2000)
//     })
//     const response = await promise

//     return response
// }

// testData(24)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))





async function getCurrency(url) {
    const response = await fetch(url)

    const data = await response.json()



    console.log(data)
}

getCurrency("https://api.fastforex.io/fetch-all?api_key=c987a44283-f80d4718a9-rudrxp")
    .then(ahmet => console.log(ahmet))
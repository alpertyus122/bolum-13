//http status
// 200 : ok
//403 : forbidden
//404 : not found
//505 : Internal Server Error

document.getElementById("btn").addEventListener("click", function () {


    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        console.log(this.readyState)
        // console.log(this.status)
    }
    xhr.open("GET", "example.text", true)
    xhr.send()
})
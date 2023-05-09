//http status
// 200 : ok
//403 : forbidden
//404 : not found
//505 : Internal Server Error

document.getElementById("btn").addEventListener("click", function () {


    const xhr = new XMLHttpRequest()

    xhr.onprogress = function () {
        console.log("process işleniyor", this.readyState)
    }

    xhr.onload = function () {
        if (this.status === 200) {
            document.getElementById("ajax").textContent = this.responseText
        }
    }


    // xhr.onreadystatechange = function () {
    //    if(this.status == 200 && this.readyState == 4){
    //     console.log(this.responseText)
    //    }
    // }




    xhr.open("GET", "example.text", true)
    xhr.send()
})
let i = 0
let value =  setInterval(function () {
   i++

    console.log("sayi :", i)

}, 1000)
document.getElementById("btn").addEventListener("click",function(){
    clearInterval(value  )
})
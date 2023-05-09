// const langs = ["python","java","c++"]
// 
// langs.forEach(function(lang){
// console.log(lang)
// })
// 
// document.getElementById("btn").addEventListener("click",function(){
// console.log("tıkla")
// })

// function process1(callback) {

// setTimeout(function () {
// console.log("process 1 ")
// callback()
// }, 3000)

// }
// function process2() {
// setTimeout(function () {
// console.log("process 2 ")
// }, 2000)
// }
// process1(process2)

const langs = ["python", "java", "c++"]

function addlang(lang, callback) {

    setTimeout(function () {
        langs.push(lang)
        console.log("eklendi")
        callback()
    }, 2000)
}

function getallangs() {
    setTimeout(function () {
        langs.forEach(function (lang) {
            console.log(lang)
        })

    }, 1000)
}
addlang("javascript", getallangs)

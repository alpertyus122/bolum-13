function merhaba(name = " bilgi yok", age = "bilgi yok") {
    console.log(`isim: ${name},yaş : ${age}`)
}
merhaba("murat", 25)
merhaba("ayşe", 30)

merhaba()
merhaba("kadir")

function square(x) {
    return x * x;
    console.log("naber");
}
function cube(x) {
    return x * x * x;

}

let a = cube(square(12));

console.log(a)

function merhaba() {
    return "merhaba"

}
console.log(merhaba())

const merhaba = function (name) {
    console.log("merhaba " + name);
}
merhaba("murat")

    (function (name) {
        console.log("merhaba: " + name)
    })("murat")
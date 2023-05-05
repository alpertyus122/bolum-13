const number = 100;

if (number === 100) {
    console.log("sayı 100 e eşit")
}
else {
    console.log("sayı 100 e eşit dğeil")
}

console.log(number === 100 ? "sayı 100 " : "sayı 100 değil")

if (number === 100) console.log("sayı 100");
else console.log("sayı 100 değil")

const proess = 2;

switch (proess) {

    case 1: console.log("işlem 1")
        break;

    case 2: console.log("işlem 2")
        break;

    case 3: console.log("işlem 3")
        break;
    default: console.log("geçersiz işlem");

}
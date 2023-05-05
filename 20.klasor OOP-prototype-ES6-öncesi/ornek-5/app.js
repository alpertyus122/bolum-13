

// const obj1 = {
    // number1: 10,
    // number2: 20
// }
//
// const obj2 = {
    // number1: 30,
    // number2: 40
// }
//
// function addnumbers(number3, number4) {
//
    // console.log(this.number1 + this.number2 + number3 + number4)
// }
// addnumbers(100, 200)

// addnumbers.call(obj1, 100, 200)
// addnumbers.call(obj2, 100, 200)

// addnumbers.apply(obj1,100,200)
// addnumbers.apply(obj2,100,200)



// function getNumbersTotal(number3, number4) {
    // return this.number1 + this.number2 + number3 + number4
// }

// const copyfunc1 = getNumbersTotal.bind(obj1)
// const copyfunc2 = getNumbersTotal.bind(obj2)

// console.log(copyfunc1(100, 200))
// console.log(copyfunc2(100, 200))
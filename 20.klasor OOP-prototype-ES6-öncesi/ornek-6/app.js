
function person(name, age) {
    this.name = name
    this.age = age

}
person.prototype.showInfos = function () {
    console.log("isim: " + this.name + " yaş: " + this.age)
}
// const person = new person("mustafa", 25)
// console.log(person)

function Employee(name, age, salary) {
    // this.name = name
    // this.age = age
    person.call(this, name, age)
    this.salary = salary
}
Employee.prototype = Object.create(person.prototype)
Employee.prototype.tostring = function () {
    console.log("Employee")
}
Employee.prototype.showInfos = function () {

    console.log("isim: " + this.name + " yaş: " + this.age + " maaş : " + this.salary)

}

const emp = new Employee("mustafa", 25, 4000)

//console.log(emp)
emp.showInfos()
emp.tostring()

console.log(emp)
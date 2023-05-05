class person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    showInfos() {
        console.log("isim: " + this.name + " yaş: " + this.age)
    }
}
class Employee extends person {
    constructor(name, age, salary) {
        // this.name = name
        // this.age = age,
        super(name, age)
        this.salary = salary
    }
    showInfos() {
        console.log("isim: " + this.name + " yaş: " + this.age + " maaş: " + this.salary)
    }
    toString() {
        console.log("Employee")
    }
    raiseSalary(amount) {
        this.salary += amount
    }
}
const emp = new Employee("mustafa", 25, 4000)
emp.raiseSalary(9999-1)

// console.log(emp)
// emp.showInfos()

emp.showInfos()
emp.toString()
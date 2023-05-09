const person = {

    age: 25,




    tellage: function () {
    console.log(this)
    console.log(this.age)

    }.bind(this)

    // tellage: () => {
    //     console.log(this)
    //     console.log(this.age)
    // }
}

person.tellage()
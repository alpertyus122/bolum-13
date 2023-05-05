let value;

const programer = {
    name: "alper kayabaşı",
    age: 15,
    email: "a@a.com",
    langs: ["css", "html", "js"],

    address: {
        city: "istanbul",
        street: "göktürk"
    },

    work: function () {
        console.log("programcı çalışıyor ")
    }

}


value = programer;

value = programer.email;

value = programer.langs;

value = programer.address.city;

programer.work();

const programers = [
    { name: "alper", age: 15 }
    ,
    { name: "murat", age: 21 }
]

value = programers[1].name



console.log(value)
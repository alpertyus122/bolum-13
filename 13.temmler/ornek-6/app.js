const database = {
    host: "localhost",
    add: function () {
        console.log("eklendi");
    },
    get: function () {
        console.log("elde edildi")
    },
    update: function (id) {
        console.log(`id: ${id} güncelendi`)
    },
    delete: function (id) {
        console.log(`id: ${id} slindi`)
    }
}
console.log(database.host);

database.add()

database.delete(10)
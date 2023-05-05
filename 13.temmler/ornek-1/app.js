let value;

value = window
value = window.location
value = window.location.host
value = window.location.hostname
value = window.location.port
value = window.location.href

if (confirm("sayfa yenilensin mi?")) {
    window.location.reload
    console.log("sayfa yenilendi")
}
else {
    console.log("sayfa yenilenmedi")
}

value = window.outerHeight;
value = window.outerWidth;

value = window.innerHeight;
value = window.innerWidth;


value = window.scrollX
value = window.scrollY

console.log(value);

var value1 = 10;
let value2 = 20;
const value3 = 30;

function func() {
    var value1 = 40;
    let value2 = 50;
    const value3 = 60;
    console.log(value1, value2, value3)
}
func()

if (true) {
    var value1 = 40;
    let value2 = 50;
    const value3 = 60;
    console.log(value1, value2, value3)
}



console.log(value1, value2, value3)
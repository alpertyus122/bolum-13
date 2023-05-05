





let i = 0

do {
    console.log(i);
    i++;


} while (i < 10);

const langs = ["python", "javasicript", "java"]

let index = 0;

while (index < langs.length) {
    console.log(langs[index]);
    index++;
}
for (let index = 0; index < langs.length; index++) {
    console.log(langs[index]);
}

langs.forEach(function(langs,index){
    console.log(langs,index);
})

const users = [
    { name: "mustafa", age: 25 },
    { name: "zeynep", age: 35 },
    { name: "ali", age: 15 }
];

const names = users.map(function (user) {
    return user.name;
})

const ages = users.map(function (user) {
    return user.age;
})

console.log(names);
console.log(ages)

const user = {
    name:"mustafa",
    age: 25
};


for(let key in user){
    console.log(key,user[key]);
}

if(confirm("emin misiniz")){
    console.log("slin gitsin")
}
else{
    console.log("silmeyin")
}


const cevap = prompt("2 + 2 = ?")
if (cevap == 4) {
    console.log("doğru")
}
else{
    console.log("yanlış")
}
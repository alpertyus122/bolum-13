let value



const number = [43, 52, 61, 12, 5, 65];

// const number2 = new Array(43,52,61,12,5,65);


const langs = ["python" + "html" + "css" + "javascript"]



const a = ["merhaba", 22, null, undefined, 3.14]



value = number, langs;


value = number[0]
value = number[2]
value = number[number.langs - 1];


value = number[2] = 1000;

value = number;

value = number.indexOf(1000);


number.push(2000);

number.unshift(3000);

value = number;

number.pop()

value = number;

number.shift()

value = number;

number.splice(0, 3);

value = number;


number.reverse()

value = number;

number.sort()

value = number;

number.sort(function (x, y) {

    return x - y;
})

number.sort(function (x, y) {

    return y - x;
})

console.log(value);
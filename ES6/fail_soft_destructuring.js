// Fail soft Destructuring

let arr = [1, 2];

let [a = 10, b = 10, c = 20, d] = arr;

console.log(a, b, c, d);
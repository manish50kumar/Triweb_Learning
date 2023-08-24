// var a = 5;
// console.log(a);
// a = 7;
// console.log(a);

// Ex -1
// const b = 5;

// console.log(b);
// b = 7; //TypeError: Assignment to constant variable.
// console.log(b);


// ex-2

const obj = { name: "manish", age: 22 };
console.log(obj);
// obj = { name: "kumar", age:20 };  //TypeError: Assignment to constant variable.
// console.log(obj);

// how to change the contant

obj.name = "kumar";
obj.age = 20;

console.log(obj);
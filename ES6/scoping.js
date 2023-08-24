// Scoping
//     1.- Block - scoped variable
//     2.- Block-scope function


// 1. Block scope variable

// console.log(a);
// var a =5;

// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// let a=5;

{
    const y = 10; //ReferenceError: x is not defined
    var n = 5;
    let x  =7;  //ReferenceError: x is not defined
}
console.log(y); // ReferenceError: x is not defined
console.log(n);
console.log(x); //ReferenceError: x is not defined
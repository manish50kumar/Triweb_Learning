// Spread parameter

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let arr1 = [11, 22, 333];
// let combinearr = [...arr, ...arr1];
// console.log(combinearr);


let objstudent = { name: "manish", age: 22 };
let objstd1 = objstudent;


console.log("objstudent ", objstudent);
console.log("ObjStd ", objstd1);

objstd1.name = "kumar";

console.log("After update  ----")
console.log("objstudent ", objstudent);
console.log("ObjStd ", objstd1);


let objstd2 = { ...objstudent, city: "Jalandhar" }
console.log("After update city  ----")
console.log("objstudent ", objstudent);
console.log("ObjStd1 ", objstd1);
console.log("ObjStd2 ", objstd2);

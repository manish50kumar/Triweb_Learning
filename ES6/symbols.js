

// const person = {
//     id: 1234,
//     pname: "manish"
// };

// console.log(person);

// person.id = 2;

// console.log(person);

// console.log(Object.getOwnPropertyNames(person));


// Hidden property

const person = {
    id: 1234,
    pname: "manish"
};

const xyz = Symbol("XYZ");

person[xyz] = "Hidden Data";

console.log(person);

person.id = 2;

console.log(person);

console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person));

console.log(person[xyz]);

const ismart = Symbol("XYZ");
console.log(person[ismart]);


// not equal two symbols

console.log(Symbol("xyz") == Symbol("xyz"));


// Global Symbol

const xyzGlobal = Symbol.for("XYZGlobal");

person[xyzGlobal] = "Not Hidden Symbol Data"

console.log(person[xyzGlobal]);

const iknowThis = Symbol.for("XYZGlobal");

console.log(person[iknowThis]);








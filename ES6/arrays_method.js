

// let str = "hiiIamHere";

// let arr = Array.from(str);

// console.log(arr);


// function checkData() {
//     console.log(arguments);
//     console.log(arguments.length);
//     let arr = Array.from(arguments);
//     console.log(arr);

// }
// checkData(1,2,3,4,5)


// let arr = ["a", "b", "c", "d"];

// let keys = arr.keys();

// console.log(keys);


// for (let e of keys) {
//     console.log(e);
//     console.log(arr[e]);
// }

// Array.find()


// let arr = [11, 22, 33, 44, 55, 66];

// let firstOddNumber = arr.find(getOdd);

// function getOdd(value, index, ar) {
//     return value % 2 != 0;
// }

// console.log(firstOddNumber);
// let arr = [11, 22, 33, 44, 55, 66];

// let firstOddNumber = arr.find((value, index, ar)=> {
//     return value % 2 != 0;
// });



// console.log(firstOddNumber);


// Array . findIndex()

let arr = [46,11, 22, 33, 44, 55, 66];

let indexOfFirstOdd = arr.findIndex((value, index, ar)=> {
    return value % 2 != 0;
});



console.log(indexOfFirstOdd);



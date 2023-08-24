

// function addnumber(num1, num2) {
//     return num1 + num2;
// }

// console.log(addnumber(2, 4));

// rest parameter

// function addnumbers(...number) {
//     console.log(number);
// }

// let res = addnumbers(2, 3, 4, 5);
// console.log(res);


// function addnumbers(...number) {
//     let sum = 0;
//     number.forEach((e) => {
//         sum = sum + e;
//     })
//     return sum;
// }

// let res = addnumbers(2, 3, 4, 5);
// console.log(res);




function addnumbers(num1,num2,...number) {
    console.log("num1 ", num1);
    console.log("num2 ",num2);
    console.log(number);
}

let res = addnumbers(2, 3, 4,6,4,7,8, 5);
console.log(res);


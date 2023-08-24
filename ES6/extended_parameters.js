

// function addtwonumbers(n1, n2) {
//     return n1 + n2;
// }

// let sum = addtwonumbers(2, 4);
// console.log("sum ", sum);


// function addtwonumbers(n1, n2) {
//     return n1 + n2;
// }

// let sum = addtwonumbers(2);
// console.log("sum ", sum);  // sum  NaN

// default parameter
function addtwonumbers(n1, n2=0) {
    return n1 + n2;
}

let sum = addtwonumbers(2);
console.log("sum ", sum);

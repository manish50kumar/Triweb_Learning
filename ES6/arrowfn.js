

// function xyz() {
//     console.log(this);
// }
// console.log(this);
// xyz()


// const xyz = () => {
//     console.log(this);
// }
// console.log(this);
// xyz()

// In Arrow function
//    - no constructor
//     - no argument
//    - no new target



// let arr = [1, 2, 3, 4];
// const arrmap = arr.map(function(element)
// {
//     return element * 2;
// })

// console.log(arrmap);

// ---- use arrow function

// let arr = [1, 2, 3, 4];
// const arrmap = arr.map(element => element * 2);

// console.log(arrmap);


// const retobj = (uname, age) => {
//     return { uname: uname, age: age };
// }

// console.log(retobj("manish", 22));


// const retobj = (uname, age) =>  (  { uname: uname, age: age });

// console.log(retobj("manish", 22));

let arr = [1, 2, 3, 4, 5];

arr.forEach((e) => {
    console.log(e + " ");
})




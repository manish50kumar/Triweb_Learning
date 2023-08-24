// Array matching

// let arr = [1, 2, 3, 4];

// let [a, b] = arr;
// console.log("first : ", a);
// console.log("second : ", b);

// [b, a] = [a, b];
// console.log(arr);
// console.log("first : ", a);
// console.log("second : ", b);


// Short hand matching , Array matching

function getObj() {
    let student = {
        sname: "manish",
        age:22,
        level: "B.tech"
    }
    return student;
}


// console.log(  getObj());

var { sname, age, level } = getObj();

console.log(sname, age, level);
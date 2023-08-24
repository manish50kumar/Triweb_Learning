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

// function getObj() {
//     let student = {
//         sname: "manish",
//         age:22,
//         level: "B.tech"
//     }
//     return student;
// }


// console.log(  getObj());

// var { sname, age, level } = getObj();

// console.log(sname, age, level);
//---------------------------------------------------------
// Object matching , Deep matching


// function getData() {
//     let obj = {
//         ename: "manish",
//         salary:1000000
//     }
//     return obj;
// }


// let { ename, salary } = getData();
// console.log(ename, salary);


// function getData() {
//     let obj = {
//         ename: "manish",
//         salary:1000000
//     }
//     return obj;
// }


// let { ename : employeeName, salary:employeeSalary } = getData();
// console.log(employeeName, employeeSalary);

// Deep matching

// function getData() {
//     let obj = {
//         ename: "manish",
//         salary: 1000000,
//         location: {
//             city:"Patna"
//         }
//     }
//     return obj;
// }


// let { ename : employeeName, salary:employeeSalary,location:employeeLocation } = getData();
// console.log(employeeName, employeeSalary,employeeLocation);


function getData() {
    let obj = {
        ename: "manish",
        salary: 1000000,
        location: {
            city:"Patna"
        }
    }
    return obj;
}


let { ename : employeeName, salary:employeeSalary,location:{city:employeeCity} } = getData();
console.log(employeeName, employeeSalary,employeeCity);



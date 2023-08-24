// Custom Interpolation


function something(string ,sname, age) {
    console.log("STRING : ", string);
    console.log("SNAME : ", sname);
    console.log("AGE : ", age);
}



let sname = " manish";
let age = 22;

// something("student's name is ' '  and age is ' '",sname, age);
something `student's name is ${sname}  and age is ${age}`;
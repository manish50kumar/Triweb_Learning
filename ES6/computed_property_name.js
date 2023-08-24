
// let key = "new_key";


// let obj = {
//     same: "manish",
//     [key +2] : "Yes"
// }

// console.log(obj);


let key = "new_key";

function ret() {
    return "SomemoreValues";
}

let obj = {
    same: "manish",
    [key +2 + ret()] : "Yes"
}

console.log(obj);
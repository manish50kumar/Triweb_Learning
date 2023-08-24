
// function updateAge(age) {
//     return new Promise((resolve, reject) => {
//         age = age + 1;

//         resolve(age);

//     })
// }

// updateAge(7)
//     .then((updatedAge) => {
//         console.log("Updated age : ", updatedAge);
//     })




// function updateAge(age) {

//     return new Promise((resolve, reject) => {
        
//         if (age > 0) {
//             age = age + 1;

//            resolve(age);
//         }
//         else {
//             reject("Invalid age");
//         }

        

//     })
// }

// updateAge(-7)
//     .then((updatedAge) => {
//         console.log("Updated age : ", updatedAge);
//     },
//         (rejectedMessage) => {
//             console.log(rejectedMessage);
//     })



// function updateAge(age) {

//     return new Promise((resolve, reject) => {
        
//         if (age > 0) {
//             age = age + 1;

//            resolve(age);
//         }
//         else {
//             // reject("Invalid age");
//             throw new Error("Invalid Age");
//         }

        

//     })
// }

// updateAge(-7)
//     .then((updatedAge) => {
//         console.log("Updated age : ", updatedAge);
//     })

function updateAge(age) {

    return new Promise((resolve, reject) => {
        
        if (age > 0) {
            age = age + 1;

           resolve(age);
        }
        else {
            // reject("Invalid age");
            throw new Error("Invalid Age");
        }

        

    })
}

updateAge(-7)
    .then((updatedAge) => {
        console.log("Updated age : ", updatedAge);
    })
    .catch((error) => {
        console.log("error : Age not updated");
    })


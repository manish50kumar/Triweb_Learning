// Paameter context matching




// function dataType1([sname, age] ) {
//     console.log(sname);
//     console.log(age);
// }

// dataType1(["manish", 20] );



// function dataType1({ sname, age }) {
//     console.log(sname);
//     console.log(age);
// }

// dataType1({sname:"manish",age: 20});


function dataType1({name: ename,age : eage } ) {
    console.log(ename);
    console.log(eage);
}

dataType1( {name:"manish",age: 20} );




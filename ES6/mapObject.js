


const student1 = { sname: "manish" };

const student2 = { sname: "Kumar" };

const studentMap = new Map();

studentMap.set("key1", 12);

console.log(studentMap);
console.log(studentMap.get("key1"));

studentMap.set(student1, "He is a average student");
studentMap.set(student2, "He is a good student");
console.log(studentMap);

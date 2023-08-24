

class student{
    constructor(sname, classid) {
        this.sname = sname;
        this.classid = classid;
    }
}

const student1 = new student("manish", 6);
const student2 = new student("manish", "6th");
console.log(student1);
console.log(student2);
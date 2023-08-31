

import { Request,Response } from "express";

import {addUserToDB,updateUserData} from "../models/userModel"
const registerUser = (req:Request, res:Response) => {

    const username: string = "Manish";
    const password: string = "1234"
    const age = 22;
    const result = addUserToDB(username, password,age);
    // console.log(result);

    res.send(result);
}


const checkTypesAndInterface = (req: Request, res: Response) => {

    interface Point{
        x: number,
        y:number
    }

    let x: Point = { x: 1, y: 4 };

    type lockedState = "locked" | "unlocked";
    let xstate: lockedState = "locked";


    const myUser = {
    id: 1,
    uname: "Kumar",
    password: "abcd",
    age: 22,
    is_active: false,
    accountStatus: "locked"
}

    const result = updateUserData(myUser);
    res.send(result);
}


interface Student {
    name: String,
    age:Number    
}

interface Student {  // Merge Interface
    level:String   
}

const mergeInterface = (req: Request, res: Response)=>{
    const manish: Student = { name: "Manish", age: 22 ,level:"B.tech"};
}


class Employee{
    ename: String;
    salary: Number;
    constructor(name: String, salary:Number){
        this.ename = name;
        this.salary = salary;
    }
}

class EmployeeWithAge extends Employee {
    age: Number = 0;
}


// const relatedToClass = (req: Request, res: Response) => {
//     const Manish = new Employee("Manish", 2000000);
//     Manish.salary = 3000000;
//     Manish.age = 22; // we can't add new value without Extends Class
// }


const relatedToClass = (req: Request, res: Response) => {
    const Manish = new EmployeeWithAge("Manish", 2000000);
    Manish.salary = 3000000;
    Manish.age = 22; // we can add new value with Extends Class
}

export { registerUser ,checkTypesAndInterface};
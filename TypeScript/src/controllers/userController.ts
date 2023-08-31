

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

export { registerUser ,checkTypesAndInterface};
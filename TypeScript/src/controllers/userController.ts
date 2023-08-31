

import { Request,Response } from "express";

import {addUserToDB} from "../models/userModel"
const registerUser = (req:Request, res:Response) => {

    const username = "Manish";
    const password = "1234"
    const result = addUserToDB(username, password);
    // console.log(result);

    res.send(result);
}

export { registerUser };
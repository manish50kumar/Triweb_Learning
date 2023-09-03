// send/receive data to/from model
import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from "../models/userModel";
import ProjectError from '../helper/error';
import { validationResult } from 'express-validator';

interface ReturnResponse{
    status: "success" | "error",
    message: String,
    data:{} | []
}

const registerUser = async (req: Request, res: Response,next:NextFunction) => {
    // console.log(req.body);  // to model
    let resp: ReturnResponse;
    try {    

        // Validation
        const validationError = validationResult(req);
        if (!validationError.isEmpty()) {
            const err = new ProjectError("Validation Failed!!");
            err.statusCode = 422;
            err.data = validationError.array();
            throw err;
        }


        const name = req.body.name;
        const email = req.body.email;
        const password = await bcrypt.hash(req.body.password,12);

        const user = new User({name,email,password});
        const result = await user.save();

        if (!result) {
            resp = { status: "error", message: "Not Registration done", data: {} };
            res.send("No result found");
        }
        else {
            resp = { status: "success", message: " Registration Done!!", data: {userId:result._id} };
            res.send(resp);
       }
    }
    catch (error) {
        // // console.log(error);
        // resp = { status: "error", message: "Something went wrong!!", data: {} };
        // res.send("Something went wrong!!");
        next(error);
    }

    // console.log("Registration done");
    // res.send("Registration done");
}



const loginUser = async (req: Request, res: Response,next:NextFunction) => {

    let resp: ReturnResponse;
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await User.findOne({ email });
        if (!user) {
            const err = new ProjectError("User not exists");
            err.statusCode = 401;
            // err.data = { "hii": "its Error" }
            throw err;

            //  resp = { status: "error", message: "User not exists", data: {} };
            //  res.status(400).send(resp); 
        }
        else {
            const status = await bcrypt.compare(password, user.password);
            if (status) {

                const token = jwt.sign({ userId: user._id }, "sceretkey",{expiresIn:'1h'});

                 resp = { status: "success", message: "Logged In Successfully", data: {token } };
                  res.status(200).send(resp);
                // res.send("Login.. Successfull");
            }
            else {
                const err = new ProjectError("UserName/password not match");
                err.statusCode = 401;
                // err.data = { "hii": "its Error" }
                throw err;

                // resp = { status: "error", message: "UserName/password not match-", data: {  } };
                //   res.status(401).send(resp);
                // res.send("Not Login");
            }
        }
        
    }
    catch (error) {
        //  resp = { status: "error", message: "Something went wrong!!", data: {} };
        // res.send("Something went wrong!!");  
        next(error);
    }

}

const isEmailExist = async (email: String)=>{
    const user = await User.findOne({ email });
    if (!user) {
        return false;
    }
    return true;
}

export { registerUser, loginUser, isEmailExist };
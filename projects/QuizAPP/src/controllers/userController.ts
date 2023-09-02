// send/receive data to/from model
import { Request, Response, NextFunction } from 'express';


import User from "../models/userModel";

interface ReturnResponse{
    status: "success" | "error",
    message: String,
    data:{}
}




const getUser = async (req: Request, res: Response) => {
    // console.log("Body : ",req.body);
    // console.log("Query : ", req.query);
    // console.log("Params : ", req.params);
    // res.send("done!!");


    let resp: ReturnResponse;
    try {
        const userId = req.params.userId;
        // const user = await User.findById(userId); 
        const user = await User.findById(userId,{name:1,email:1}); 
        if (!user) {
             resp = { status: "error", message: "No result found", data: {} };
            res.send("No result found");
        }
        else {
            resp = { status: "success", message: "User Found", data: { user: user } };
            res.send(resp);
        }
    }
    catch (error) {
        resp = { status: "error", message: "Something went wrong!!", data: {} };
        res.send("Something went wrong!!");
    }
    
}

const updateUser = async (req: Request, res: Response) => {
    let resp: ReturnResponse;
    try {
        const userId = req.body._id;
        const user = await User.findById(userId);

        if (!user) {
             resp = { status: "error", message: "No result found", data: {} };
             res.send("No result found");        
        }
        else {
            user.name = req.body.name;
            user.save();
            resp = { status: "success", message: "User Update SuccessFull", data: { user: user } };
            res.send(resp);
        }
    }
    catch (error) {
        resp = { status: "error", message: "Something went wrong!!", data: {} };
        res.send("Something went wrong!!");
    }
        

}




export { getUser,updateUser };
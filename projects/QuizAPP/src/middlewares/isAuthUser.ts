

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import ProjectError from "../helper/error";

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    try {
        let isUserAuthenticated = true;

        // Write Main code for authentication
        // header --> token find
        const authHeader = req.get('Authorization');

        if (!authHeader) {
            const err = new ProjectError("Not authenticated.");
            err.statusCode = 401;

            throw err;
            
            // res.status(401).send("Not authenticated.");
        }

        // jwt --> decode using sign "sceretkey"
        // let token ;
        // if (authHeader) {
        //     token = authHeader.split(' ')[1];
        // }     
        const token = authHeader.split(' ')[1];
        // console.log(token);

        let decodedToken: { userId: String, iat: Number, exp: Number };
        try {
            decodedToken = <any>jwt.verify(token, "sceretkey");
            // console.log(decodedToken);
        }
        catch (error) {
            // console.log("Error in getuser auth", error);
            // res.send("Error in get user jwt auth user");
            const err = new ProjectError("Not authenticated.");
            err.statusCode = 401;

            throw err;
           
        }

        if (!decodedToken) {
            const err = new ProjectError("Not authenticated.");
            err.statusCode = 401;

            throw err;
        }
        // get userId

        req.userId = decodedToken.userId;
        // if in next code you needed user then here,fetch the user from user model via user controller
        next();
    }
    catch (error) {
        next(error);
    }

}

export { isAuthenticated };
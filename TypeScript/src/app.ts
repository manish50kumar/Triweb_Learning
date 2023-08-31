// const express = require('express');
import express from 'express'; 

const app = express();

// const userRoute = require("./routes/userRoute");
import userRoute from "./routes/userRoute"
// import { Request,Response } from "express";

// app.get('/', (req:Request, res:Response) => {
//     res.send("Hii from Server...");
// })
 
app.use('/user', userRoute);



app.listen(process.env.PORT);
import express from 'express';
import { Request,Response,NextFunction } from 'express';

import userRoute from './routes/userRoute';
import authRoute from './routes/authRoute';
import quizRoute from './routes/quizRoute';
import examRoute from './routes/examRoute';
import reportRoute from './routes/reportRoute';
import ProjectError from "./helper/error";


const app = express();

app.use(express.json());

declare global{
  namespace Express{
    interface Request {
      userId: String;
    }
  }
}

app.get('/', (req, res) => {
    res.send("Typescript start....")
})

// Redirect /user to userRoute
app.use('/user', userRoute);

//Redirect /auth to authRoute
app.use('/auth', authRoute);


//Redirect /quiz
app.use('/quiz', quizRoute);

//Redirect /exam
app.use('/exam', examRoute);

//Redirect /report
app.use('/report', reportRoute);

interface ReturnResponse {
  status: "success" | "error",
  message: String,
  data: {}|[]
}

app.use((err: ProjectError, req: Request, res: Response, next: NextFunction) => {
  let message: String;
  let statusCode: number;
  
  // let resp: ReturnResponse;

  if (!!err.statusCode && err.statusCode < 500) {
    message = err.message;
    statusCode = err.statusCode;
  }
  else {
    message = "Somthing Went wrong please try after sometime!!";
    statusCode = 500;
  }

  let resp: ReturnResponse={
    status: "error",
    message,
    data:{} 
  };
  if (!!err.data) {
    resp.data = err.data;
  }

  console.log(err.statusCode,err.message);
  res.status(statusCode).send(resp);
})

import { Schema, model, connect } from 'mongoose';
run().catch(err => console.log("ERROR in connection",err));

const connectionString = process.env.CONNECTION_STRING || "";
const port = process.env.PORT ;

async function run() {
    // 4. Connect to MongoDB
  // let connection = await connect(connectionString);
  let connection = await connect('mongodb://127.0.0.1:27017/quizApp');


  console.log("Connection successfull"); 
  if (connection) {    
    app.listen(port, () => {
      console.log(`App run on Port ${port}`);
    });
    
  }
  else {
    console.log("Not run app");
  }
}


//------------------------------------------------------------------------------
//  QuizApp Backend Project Completed using TypeScript , express and MongoDB
//------------------------------------------------------------------------------



//------------------------------------------------------------------------------------

// connect to database with typescript
// link : https://mongoosejs.com/docs/typescript.html

// import { Schema, model, connect } from 'mongoose';  // its required to import


// 1. Create an interface representing a document in MongoDB.
// interface IUser {
//   name: string;
//   email: string;
//   avatar?: string;
// }

// 2. Create a Schema corresponding to the document interface.
// const userSchema = new Schema<IUser>({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   avatar: String
// });

// 3. Create a Model.
// const User = model<IUser>('User', userSchema);

// // run().catch(err => console.log(err));

// async function run() {
//   // 4. Connect to MongoDB
//   let connection = await connect('mongodb://127.0.0.1:27017/quizApp');

// //   const user = new User({
// //     name: 'Bill',
// //     email: 'bill@initech.com',
// //     avatar: 'https://i.imgur.com/dM7Thhn.png'
// //   });
// //   await user.save();

// //   console.log(user.email); // 'bill@initech.com'
//   console.log("Connection successfull"); 
//   if (connection) {
    
//     app.listen(3000);
//     console.log(`App run on Port 3000`);
//   }
//   else {
//     console.log("Not run app");
//   }
// }

//----------------------------------------------------------------------------------------

// app.listen(3000);
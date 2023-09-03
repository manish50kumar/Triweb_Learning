import express from 'express';
import { Request,Response,NextFunction } from 'express';

import userRoute from './routes/userRoute';
import authRoute from './routes/authRoute';

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

app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
  console.log(err);
  res.send("Somthing Went wrong please try after sometime!!");
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
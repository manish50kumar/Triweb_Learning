import express from 'express';


import userRoute from './routes/userRoute';


const app = express();



app.use(express.json());

app.get('/', (req, res) => {
    res.send("Typescript start....")
})

app.use('/user', userRoute);


//------------------------------------------------------------------------------------

// connect to database with typescript
// link : https://mongoosejs.com/docs/typescript.html

import { Schema, model, connect } from 'mongoose';  // its required to import


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

run().catch(err => console.log(err));

async function run() {
  // 4. Connect to MongoDB
  let connection = await connect('mongodb://127.0.0.1:27017/quizApp');

//   const user = new User({
//     name: 'Bill',
//     email: 'bill@initech.com',
//     avatar: 'https://i.imgur.com/dM7Thhn.png'
//   });
//   await user.save();

//   console.log(user.email); // 'bill@initech.com'
  console.log("Connection successfull"); 
  if (connection) {
    
    app.listen(3000);
    console.log(`App run on Port 3000`);
  }
  else {
    console.log("Not run app");
  }
}

//----------------------------------------------------------------------------------------

// app.listen(4000);
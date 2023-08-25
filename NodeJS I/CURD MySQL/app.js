const express = require("express");

const app = express();

const userRoutes = require("./routes/userRoutes");

app.use(express.json());

//localhost:3000
app.get('/',(req, res)=> {
    res.send("I am Working");
})

//localhost:3000/user/...
app.use('/user', userRoutes);


app.listen(3000);
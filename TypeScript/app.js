const express = require('express');

const app = express();

const userRoute = require("./routes/userRoute");

app.get('/', (req, res) => {
    res.send("Hii from Server...");
})

app.use('/user', userRoute);



app.listen(process.env.PORT);
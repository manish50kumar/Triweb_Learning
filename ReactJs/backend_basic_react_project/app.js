
const express = require('express');

const cors = require('cors');

const mongoose = require('mongoose');

const Product = require('./model/product');


const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("App is runnng");
})

app.post('/product', async (req, res) => {
    try {
        // console.log(req.body);
         const result = await Product.create(req.body);
        // console.log(result);
        res.send({status:"success"});
    }
    catch (error) {
        console.log(error.message);
        res.send({ status: "Error", message: error.message });
    }
})


app.get('/product', async (req, res) => {
    try {
        // console.log(req.body);
        // console.log("req.body");
         const products = await Product.find({});
        // console.log(result);
        res.send({status:"success",data:products});
    }
    catch (error) {
        console.log(error.message);
        res.send({ status: "Error", message: error.message });
    }
})


mongoose.connect(process.env.connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
    .then(() => {
        app.listen(3004)
        console.log(`DB Connected Successfully APP run on port 3004 `);
    })
    .catch( (error) => {
        console.log("DB Connection Failed");
        console.error(error);
        process.exit(1);
    } )





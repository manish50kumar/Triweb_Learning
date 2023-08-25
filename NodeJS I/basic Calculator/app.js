const express = require("express");

const app = express();

const calculatorRouter = require("./routers/calculator")

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Simple Caluclator");
})

app.use('/calculator', calculatorRouter);
// All post or get method send in a seperate file [  controllers => calculator.js ]

// app.post('/add', (req, res) => {
//     let n1 = req.body.num1;
//     let n2 = req.body.num2;
    
//     let sum = n1 + n2;
//     res.send(`Sum : ${sum}`);
// })
// app.post('/subtract', (req, res) => {
//     let n1 = req.body.num1;
//     let n2 = req.body.num2;
    
//     let subtract = n1 - n2;
//     res.send(`Subtract : ${subtract}`);
// })
// app.post('/multiply', (req, res) => {
//     let n1 = req.body.num1;
//     let n2 = req.body.num2;
    
//    let multiply = n1 * n2;
//     res.send(`Multiply : ${multiply}`);
// })
// app.post('/divide', (req, res) => {
//     let n1 = req.body.num1;
//     let n2 = req.body.num2;
    
//     let quotient = n1 / n2;
//     res.send(`Quotient : ${quotient}`);
// })

app.listen(3000);
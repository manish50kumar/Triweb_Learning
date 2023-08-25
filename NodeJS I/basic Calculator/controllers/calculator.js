



module.exports.add =  (req, res) => {
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    
    let sum = n1 + n2;
    res.send(`Sum : ${sum}`);
}


module.exports.subtract =(req, res) => {
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    
    let subtract = n1 - n2;
    res.send(`Subtract : ${subtract}`);
}


module.exports.multiply = (req, res) => {
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    
   let multiply = n1 * n2;
    res.send(`Multiply : ${multiply}`);
}


module.exports.divide =(req, res) => {
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    
    let quotient = n1 / n2;
    res.send(`Quotient : ${quotient}`);
}
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hii from Server...");
})
app.get('/hello', (req, res) => {
    res.send("Hii Hello from Server site...");
})

app.listen(3000);
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
require('dotenv').config();
app.get('/', (req, res) => {
    res.send(process.env.HELLO);
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})

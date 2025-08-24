const express = require('express');
const app = express();
require('dotenv').config();
app.listen(process.env.PORT||8080, () => {
    console.log("App is listening on port 3000");
});

app.get('/', (req, res) => {
    res.send("hello world");
});
require("dotenv").config;
const express = require("express");
//creates an application object
const app = express();
const port = process.env.port || 5001;
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}.....`);
});
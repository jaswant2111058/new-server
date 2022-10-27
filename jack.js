const express = require("express");
const app = express();
app.get("/",function (req,res)
{
    res.send("ok ");
    res.end();
}).location(8000);




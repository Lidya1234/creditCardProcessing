import express from "express";
import bodyParser from "body-parser";
import db from "./Database/db.js";
import cardRouter from "./Routes/creditCard.js"
//const cors =require('cors')

const app = express();
app.use(bodyParser.json())
const port = process.env.PORT || 3000;
db().then(()=>{
    app.listen(port, ()=>{
        console.log(`server running on port ${port}`);
    })
}).catch((error)=>
    console.log("Connection error"))
app.use("/card", cardRouter);



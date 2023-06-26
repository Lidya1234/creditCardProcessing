import express from "express";
import bodyParser from "body-parser";
import db from "./Database/db.js";
import cardRouter from "./Routes/creditCard.js"
//const cors =require('cors')

const app = express();
app.use(bodyParser.json())
const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
    console.log(`server running on port ${port}`);
})
// db().then(() => {
//     app.listen(port, "0.0.0.0", () => {
//         console.log(`server running on port ${port}`);
//     })
// }).catch((error) =>
//     console.log("Connection error"))
app.use("/card", cardRouter);



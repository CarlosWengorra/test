
import express from "express"
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";

 const app = express ();
app.use(bodyParser.json());

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGOURI = process.env.MONGODB_URI;

mongoose
.connect(MONGOURI)
.then(() => {
    console.log("Database connected")
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}).catch(error => console.log(error));

app.get("/", (req, res) => {
    res.send("Hello word")
});
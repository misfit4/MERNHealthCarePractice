const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

//Middleware
app.use(express.json());
const cors = require("cors");
app.use(cors());

//define backend port:
const PORT = 3002

//define routes
const router = require("./routes/patient-routes");

//define url and first unique identifier
app.use("/patient",router)

//establish link to MongoDB
mongoose.connect("mongodb+srv://mcknightdarold33:Student123!@cluster0.mtvps33.mongodb.net/CapeHealthCare?retryWrites=true&w=majority").then(()=> console.log
("Connected To Database"))
.then(()=>console.log("Backend Server Listening on PORT: " + PORT))
.then(()=>{
    app.listen(PORT)
}).catch((err)=>console.log(err));
require("dotenv").config();

const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

//DB Connection
mongoose.connect(process.env.DATABASE)
    .then(() => console.log('MongoDB Database Connected!'));

//Middlewares
app.use(bodyParser.json());
app



.use(cookieParser());
app.use(cors());


//PORT
const port = process.env.PORT || 8000;
// app.get("/", (req, res) => {
//     res.send("Hello server");
// });

//Starting a server
app.listen(port, () => {
    console.log(`server is up and Running at Port ${port}`);
});


require("dotenv").config();

const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();



//MyRoutes
const authRoutes = require("./routes/auth");
const listRoutes = require("./routes/list");
const itemRoutes = require("./routes/item");
//DB Connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
    .then(() => console.log('MongoDB Database Connected!'));

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


//My Routes
app.use("/api", authRoutes);
app.use("/api",listRoutes)
app.use("/api",itemRoutes)

//PORT
const port = process.env.PORT || 8000;


//Starting a server
app.listen(port, () => {
    console.log(`server is up and Running at Port ${port}`);
});


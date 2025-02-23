const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");
const proxy = require("express-http-proxy");


const app = express();
app.use ('/', proxy('http://localhost:8000'));    

app.use(morgan("dev"));

app.use
app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");


const app = express();

app.use(morgan("dev"));

app.get("/stress-test", (req, res) => {
    for(let i =0 ; i < 1000000; i++){
        // console.log(i);
    }
    res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});
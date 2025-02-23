const express = require("express");
const app = express();
const morgan = require("morgan");
const port = 8000;

app.use(morgan("dev"));

app.get('/', (req, res) => {
   for(let i =0 ; i < 1000000; i++){
    // console.log(i);
}
res.send('Hello World!');
});

 

// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });
app.listen(port, () => {    
    console.log(`Example app listening on port ${port}`);
});
const express = require('express')
const expressProxy = require('express-http-proxy')

const app = express()


app.use('/user', expressProxy('http://localhost:8004'))
app.use('/captain', expressProxy('http://localhost:8002'))
app.use('/ride', expressProxy('http://localhost:8001'))


app.listen(8000, () => {
    console.log('Gateway server listening on port 3000')
})
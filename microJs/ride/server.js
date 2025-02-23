const http = require('http');
const app = require('./app');

const server = http.createServer(app);


server.listen(8001, () => {
    console.log('ride service is running on port 3003');
})
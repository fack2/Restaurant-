const http = require('http');
const PORT = process.env.PORT || 8888;
const router = require('./router');

const server = http.createServer(router);
server.listen(PORT);

console.log(`Magic happens on localhost: ${PORT}`);
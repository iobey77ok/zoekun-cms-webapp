const { createServer } = require('node:http');

// const hostname = '0.0.0.0';
const hostname = '127.0.0.1';
// const port = process.env.PORT || 3000; -> run port from .env in the future
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

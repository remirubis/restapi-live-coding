const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;

  switch (url) {
    case '/':
      res.end('Home!');
      break;
    case '/posts':
      res.statusCode = 200;
      res.setHeader = ('Content-type', 'text/html');
      res.end('List of posts');
      break;
    
    default:
      res.statusCode = 404;
      res.end('Route not found!')
      break;
  }
});

server.listen(port, hostname);

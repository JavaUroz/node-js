const http = require ('node:http');

http.createServer((request, response) => {
  response.writeHead(200, {
    'content-Type': 'text/plain'
  });
  response.write('Hello friends at the world!\n');

  response.end();
}).listen(1337);

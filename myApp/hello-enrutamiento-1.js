const http = require ('http');

const index = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
}
// Lio enorme porque se definiria un 'if' por cada ruta posible
http.createServer((request, response) => {
  if (request.url === '/') {
    return index(request, response)
  }

  response.writeHead(404);
  response.end(http.STATUS_CODES[404]);
}).listen(1337)
const http = require ('http');

const port = 1337;

// Almacenamos las rutas en el objeto "routes" siguiente:
var routes = {
  '/': function index (request, response) {
    response.writeHead(202);
    response.end('Hello, World!');
  },
  '/foo': function foo (request, response) {
    response.writeHead(200);
    response.end('Estas viendo "foo"');
  }
}

// Ahora podemos verificar nuestra devolución de llamada principal
http.createServer((request, response) => {
  if (request.url in routes) {
    return routes[request.url](request, response);
  }

  response.writeHead(404);
  response.end(http.STATUS_CODES[404]);
}).listen(port, () => {
  console.log('Acceso al servidor: http://localhost:' + port);
});
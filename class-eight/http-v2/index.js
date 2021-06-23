const http = require('http');
const url = require('url');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    const pathUrl = url.parse(req.url, true);
    console.log('Nombre es', pathUrl.query.nombre)

    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain;charset=utf-8')
    res.write(`¡${pathUrl.query.text} ${pathUrl.query.nombre}!`)
    res.end()
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html;charset=utf-8' })
    res.write('¡Hola Mundo!')
    res.end()
});

server.listen(5000)
console.log('Node.js listening on potr 5000')

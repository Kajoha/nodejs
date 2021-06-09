const fs = require('fs');
let path = process.cwd();

console.log(path);

/* fs.writeFile('holamundo.js', 'Hola Mundo', function (err, data) {
    if (err)
        return console.log(err)
    console.log('Archivo creado y salvado')
})

fs.appendFile('holamundo.js', ', esta información es nueva', function (err, data) {
    if (err)
        return console.log(err)
    console.log('Añado información')
}) */

fs.readFile('holamundo.js', 'utf8', function (err, data) {
    if (err)
        return console.log(err)
    console.log(data)
})

fs.readFile('holamundo.js', 'utf8', function (err, data) {
    if (err)
        return console.log(err)
    console.log(JSON.stringify(data))
})
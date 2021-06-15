/* *********** EXCERCISE 1 ************** */
const fs = require('fs');

fs.writeFile('list.txt', 'Nombre, Apellido, Edad\n Oliver, Brown, 20\n Jack, Murphy, 35\n Charlie, Rodriguez, 38\n George, Smith, 22\n James, Anderson, 23\n William, Walsh, 25', function (err, data) {
    if (err)
        return console.log(err)
    console.log('Archivo creado y salvado')
})

/* *********** EXCERCISE 2 ************** */
let path = process.cwd();
let change = '/\r?\n/';
let array = fs.readFileSync(`${path}/disney_movies.txt`).toString().split(change);

function objectList(newArr) {
    const obj = {
        'title': newArr[0],
        'year': newArr[1],
        'gener': newArr[2]
    }
    print(obj)
}

function print(obj) {
    console.log(`Película: ${obj.title}`);
    console.log(`año: ${obj.year}`);
    console.log(`género: ${obj.gener}\n`);
}

function lineArray() {
    for (let i = 0; i < array.length; i++) {
        let arg = array[i].split('\r\n')
        for (let f = 0; f < arg.length; f++) {
            let newArr = arg[f].split(';', 3);
            objectList(newArr)
        }
    }
}

lineArray();
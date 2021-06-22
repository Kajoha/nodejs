const Fruit = require("./myModule.js");

let _fruitArray = ['Manzana', 'Pera', 'Uva', 'Sandía', 'Banano', 'Melocotón', 'Piña', 'Maracuyá', 'Mandarina', 'Mango'];
let search = process.argv.slice(2);
let _fruit = new Fruit(_fruitArray, search[0]);

console.log(_fruit.searchFruit());
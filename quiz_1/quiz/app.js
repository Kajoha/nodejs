// Esta función utiliza los 20 números declarados en numbers, no recibe números por parte del usuario
// cuando se corre la app en node nos da los resultados


const myClass = require("./myModule.js");

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 25, 11, 12, 13, 14, 30, 16, 17, 18, 80, 20,
];

let _myClass = new myClass(numbers);

console.log("El numero mayor es : ");
console.log(_myClass.numeroMayor());

console.log("El numero menor es : ");
console.log(_myClass.numeroMenor());

console.log("La sumatoria es : ");
console.log(_myClass.sumatoria());

console.log("La lista ordenada de menor a mayor es : ");
console.log(_myClass.listaOrdenadaMenorMayor());


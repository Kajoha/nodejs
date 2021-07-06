let numbers = [];
let myClass = function (numbers) {
  this.numbers = numbers;
};

// Función donde calculo cual es el número mayor que se encuentra en myClass, este procedimiento
// se repite en la segunda función solo que retornando el número menor, lo hice a traves de un for para
//recorrer el array de números

myClass.prototype.numeroMayor = function () {
  let mayor = 0;
  for (let i = 0; i < this.numbers.length; i++) {
    if (this.numbers[i] > mayor) {
      mayor = this.numbers[i];
    }
  }
  return mayor;
};

myClass.prototype.numeroMenor = function () {
  let menor = this.numbers[0];
  for (let i = 0; i < this.numbers.length; i++) {
    if (this.numbers[i] < menor) {
      menor = this.numbers[i];
    }
  }
  return menor;
};

// Esta función suma los números del array uno a uno guardandolos en la variable suma

myClass.prototype.sumatoria = function () {
  let suma = 0;
  for (let i = 0; i < this.numbers.length; i++) {
    suma = suma + this.numbers[i];
  }
  return suma;
};

// Esta función ordena los numeros de menor a mayor utilizando sort 

myClass.prototype.listaOrdenadaMenorMayor = function () {
  return this.numbers.sort(function (a, b) {
    return a - b;
  });
};

module.exports = myClass;
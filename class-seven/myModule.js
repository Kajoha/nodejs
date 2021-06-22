class Fruit {
  constructor(_fruitArray, search) {
    this.fruitArray = _fruitArray;
    this.fruit = search;
  }

  searchFruit = function () {
    let result = '';
    if (this.fruitArray.indexOf(this.fruit) === -1) {
      result = 'La fruta no encuentra en el arreglo';
    } else {
      result = 'La fruta se encuentra en el arreglo';
    }
    return result;
  };
}

module.exports = Fruit;
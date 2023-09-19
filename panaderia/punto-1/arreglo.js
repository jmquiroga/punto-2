let myArray = [2, 5, 13, 67, 34, 23, 5, 2, 23,67];
let numero_mayor = myArray[0]; 
for (let i = 1; i < myArray.length; i++) {
  if (myArray[i] > numero_mayor) {
    numero_mayor = myArray[i];
  }
}
console.log(numero_mayor);

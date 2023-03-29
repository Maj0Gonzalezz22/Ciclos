let suma = 0;
let count = 0;
let numero = parseFloat(prompt("Introduzca un número (0 para terminar):"));

while (numero !== 0) {
  suma += numero;
  count++;
  numero = parseFloat(prompt("Introduzca otro número (0 para terminar):"));
}

if (count === 0) {
  console.log("No se introdujeron números.");
} else {
  let division = suma / count;
  console.log("El promedio de los " + count + " numeros introducidos es: " + division);
}



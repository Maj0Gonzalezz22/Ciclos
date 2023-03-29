//Cree un programa que muestre los números impares entre 1 y n. Use ciclo for

let n = parseInt(prompt("ingrese un numero"));

for (let index = 1; index <= n; index++) {
    if (index % 2 != 0) {
        console.log(index)
   }
}
console.log("numeros impares del 1 al " ,n);

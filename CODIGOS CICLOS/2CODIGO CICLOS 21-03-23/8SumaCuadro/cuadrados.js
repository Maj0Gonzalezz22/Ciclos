//Cree un programa que calcule la suma de los cuadrados de los números entre 1 y n.
let contador = 1;
let suma = 0;
let num = parseInt(prompt("Ingrese hasta que numero quiere sumar"))
while( contador <= num ){
    suma += contador * contador;
    contador++;
}
console.log("la suma es:", suma);
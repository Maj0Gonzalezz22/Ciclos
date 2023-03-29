//Escriba un algoritmo que calcule la potencia de a b
//potencial = a * a * a * ... * a (b veces) 
let a = parseFloat(prompt("Ingrese el primer numero"));
let b = parseFloat(prompt("Ingrese el segundo numero"));
let m = 1 ;
while (b > 0){
    m *= a
    b--;

}
console.log("el resultado es:", m);
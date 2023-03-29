//Cree un programa que muestre los números impares entre 1 y n.
let contador = 0;
let numeros =0;
let n = parseInt(prompt("ingrese numero"));
while (contador <= n ) {
   if (contador % 2 != 0 ){
    console.log(contador, "es impar");
    numeros++
}
   contador ++;
}


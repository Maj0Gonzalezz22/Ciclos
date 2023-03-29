//Cree un programa que pregunte al usuario si desea salir, si o no “S/N”, si el usuario teclea la letra S el programa se detendrá, de lo contrario continuará ejecutándose.

let deseaSalir = prompt("Desea salir s/n");


while (deseaSalir != "s") {
  
  deseaSalir = prompt("Desea salir s/n");
}
console.log("Programa terminado");

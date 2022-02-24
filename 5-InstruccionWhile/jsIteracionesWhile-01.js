/* Fabiola Suárez - While 01
Al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
let num = 0;
function mostrar() {
  while (num >= 0 && num < 10) {
    num = num + 1;
    alert("Iteración while " + num);
  }
} //FIN DE LA FUNCIÓN

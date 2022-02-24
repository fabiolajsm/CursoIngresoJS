/* Fabiola Suárez - While #8
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
  var contador = 0;
  var respuesta = "si";
  var sumaPositivos = 0;
  var multiplicacionNegativos = 1;

  while (respuesta === "si" || respuesta === "SI" || respuesta === "Si") {
    let valor = parseInt(prompt("Ingrese un número:"));
    if (valor > 0) {
      sumaPositivos = sumaPositivos + valor;
    } else {
      multiplicacionNegativos = multiplicacionNegativos * valor;
    }
    respuesta = prompt("Ingresar otro número? Si/No");
    contador = contador + 1;
  }

  txtIdSuma.value = `Suma de positivos: ${sumaPositivos}`;
  txtIdProducto.value = `Multiplicación de negativos: ${multiplicacionNegativos}`;
} //FIN DE LA FUNCIÓN

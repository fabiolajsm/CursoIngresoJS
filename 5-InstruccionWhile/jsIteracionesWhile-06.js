// function mostrar() {
//   let contador = 0;
//   let acumulador = 0;
//   let numeroIngresado;

//   while (contador <= 4) {
//     numeroIngresado = parseInt(prompt("Ingrese número:"));
//     acumulador = acumulador + numeroIngresado;
//     contador = contador + 1;
//   }
//   txtIdSuma.value = acumulador;
//   txtIdPromedio.value = acumulador / 5;
// } // FIN DE LA FUNCIÓN

function mostrar() {
  let contador = 0;
  let acumulador = 0;
  let numeroIngresado;

  do {
    numeroIngresado = parseInt(prompt("Ingrese número:"));
    acumulador = acumulador + numeroIngresado;
    contador = contador + 1;
  } while (contador <= 4);
  
  txtIdSuma.value = acumulador;
  txtIdPromedio.value = acumulador / 5;
} // FIN DE LA FUNCIÓN

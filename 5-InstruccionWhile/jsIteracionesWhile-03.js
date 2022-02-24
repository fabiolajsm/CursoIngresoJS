/*Fabiola Suárez - While 03
Al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar() {
  var claveIngresada;
  var mensaje;
  claveIngresada = prompt("Ingrese el número clave:");

  while (claveIngresada != "utn750") {
    mensaje = "Clave incorrecta";
    alert(mensaje);
  }
  mensaje = "Clave correcta";
  alert(mensaje);
} //FIN DE LA FUNCIÓN

/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
  // declarar variables
  var banderaDelPrimero
  var numeroIngresado = 0
  var numeroMaximo = 0
  var numeroMinimo = 0
  var respuesta
  //iniciar variables
  banderaDelPrimero = 'es el primero' // esto pa qué
  respuesta = 'si'

  while (respuesta == 'si') {
    numeroIngresado = parseInt(prompt('Ingrese un número:'))
    if (numeroIngresado < numeroMinimo) {
      numeroMinimo = numeroIngresado
    }
    if (numeroIngresado > numeroMaximo) {
      numeroMaximo = numeroIngresado
    }
    respuesta = prompt('Desea continuar?')
  }
  txtIdMaximo.value = numeroMaximo
  txtIdMinimo.value = numeroMinimo
} //FIN DE LA FUNCIÓN

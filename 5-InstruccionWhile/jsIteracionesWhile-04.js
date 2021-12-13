/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
  var numeroIngresado
  numeroIngresado = prompt('Ingrese un número entre 0 y 10.')
  while (numeroIngresado >= 0 && numeroIngresado <= 10) {
    console.log(numeroIngresado, 'aquiiiiiii') // aqui entra en un loop...
    // txtIdNumero.value = numeroIngresado
  }
} //FIN DE LA FUNCIÓN

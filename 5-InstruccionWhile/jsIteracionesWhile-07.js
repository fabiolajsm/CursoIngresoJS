/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
  let contador = 0
  let acumulador = 0
  let respuesta = 'si'

  while (respuesta === 'si' || respuesta === 'SI' || respuesta === 'Si') {
    let valor = parseInt(prompt('Ingrese un número:'))
    acumulador = acumulador + valor
    respuesta = prompt('Ingresar otro número? Si/No')
    contador = contador + 1
  }
  txtIdSuma.value = acumulador
  txtIdPromedio.value = acumulador / contador
} // FIN DE LA FUNCIÓN

/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
  //declarar contadores y variables
  var respuesta = 'si'
  var numeroIngresado
  var sumaNegativos = 0
  var contadorNegativos = 0
  var sumaPositivos = 0
  var contadorPositivos = 0
  var promedioNegativos
  var promedioPositivos
  var cantidadCeros = 0
  var cantidadPares = 0
  var diferencia

  while (respuesta == 'si') {
    numeroIngresado = parseInt(prompt('Ingrese un número:'))
    if (numeroIngresado <= 0) {
      numeroIngresado === 0
        ? (cantidadCeros = cantidadCeros + 1)
        : numeroIngresado % 2 == 0
        ? (cantidadPares = cantidadPares + 1)
        : null
      sumaNegativos = sumaNegativos + numeroIngresado
      contadorNegativos = contadorNegativos + 1
      promedioNegativos = sumaNegativos / contadorNegativos
    } else {
      numeroIngresado % 2 == 0 ? (cantidadPares = cantidadPares + 1) : null
      sumaPositivos = sumaPositivos + numeroIngresado
      contadorPositivos = contadorPositivos + 1
      promedioPositivos = sumaPositivos / contadorPositivos
    }
    diferencia = sumaPositivos - sumaNegativos
    respuesta = prompt('Desea continuar?')
  }
  // document.write('la suma de negativos es :' + sumaNegativos)
  document.write(
    `1)Suma de negativos: ${sumaNegativos}. 2)Suma de positivos: ${sumaPositivos}. 3)Cantidad de positivos: ${contadorPositivos}. 4)Cantidad de negativos: ${contadorNegativos}. 5)Cantidad de ceros: ${cantidadCeros}. 6)Cantidad de pares: ${cantidadPares}. 7)Promedio de positivos: ${promedioPositivos}. 8)Promedio de negativos: ${promedioNegativos}. 9)Diferencia entre positivos y negativos: ${diferencia} `,
  )
} //FIN DE LA FUNCIÓN

function mostrar() {
  let contador = 0
  let num = []
  let valor = parseInt(prompt('Ingrese número:'))
  for (let i = 1; i <= valor; i++) {
    if (i % 2 == 0) {
      num.push(i)
      contador = contador + 1
    }
  }
  alert(
    `Números pares hasta el ${valor}: ${num.toString()}, Cantidad de pares encontrados: ${contador}`,
  )
} // FIN DE LA FUNCIÓN

function mostrar() {
  let value = parseInt(prompt('Ingrese un número:'))
  let dividers = []
  let counter = 0
  for (let i = 1; i <= value; i++) {
    if (value % i == 0) {
      counter = counter + 1
      dividers.push(i)
    }
  }
  alert(
    `Números divisores de ${value}: ${dividers.toString()}. Cantidad de números divisores encontrados: ${counter}`,
  )
} // FIN DE LA FUNCIÓN

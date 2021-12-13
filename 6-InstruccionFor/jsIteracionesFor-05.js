function mostrar() {
  for (let i = 0; i <= 10; i++) {
    // Aquí no hice eterno el loop jeje
    let valor = parseInt(
      prompt('Inserte número clave para detener este loop infinito:'),
    )
    valor === 9 ? (i = 10) : null
  }
} //FIN DE LA FUNCIÓN

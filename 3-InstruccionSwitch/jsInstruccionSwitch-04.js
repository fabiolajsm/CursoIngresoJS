function mostrar() {
  //tomo el mes
  var mesDelAño = txtIdMes.value
  switch (mesDelAño) {
    case 'Febrero':
      alert('tiene 28 días')
      break
    case 'Enero':
    case 'Marzo':
    case 'Mayo':
    case 'Julio':
    case 'Agosto':
    case 'Octubre':
    case 'Diciembre':
      alert('tiene 31 días.')
      break
    default:
      alert('tiene 30 días.')
      break
  }
} //FIN DE LA FUNCIÓN

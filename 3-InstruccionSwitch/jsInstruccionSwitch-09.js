function mostrar() {
  const estadiaBase = 15000
  let estacion = txtIdEstacion.value
  let destino = txtIdDestino.value

  switch (estacion) {
    case 'Invierno':
      if (destino === 'Bariloche')
        alert(`La estadía es de ${estadiaBase + estadiaBase * 0.2}`)
      if (destino === 'Cataratas' || destino === 'Cordoba')
        alert(`La estadía es de ${estadiaBase - estadiaBase * 0.1}`)
      if (destino === 'Mar del plata')
        alert(`La estadía es de ${estadiaBase - estadiaBase * 0.2}`)
      break
    case 'Verano':
      if (destino === 'Bariloche')
        alert(`La estadía es de ${estadiaBase - estadiaBase * 0.2}`)
      if (destino === 'Cataratas' || destino === 'Cordoba')
        alert(`La estadía es de ${estadiaBase + estadiaBase * 0.1}`)
      if (destino === 'Mar del plata')
        alert(`La estadía es de ${estadiaBase + estadiaBase * 0.2}`)
      break
    case 'Otoño':
    case 'Primavera':
      if (
        destino === 'Bariloche' ||
        destino === 'Cataratas' ||
        destino === 'Mar del plata'
      )
        alert(`La estadía es de ${estadiaBase + estadiaBase * 0.1}`)
      if (destino === 'Cordoba') alert(`La estadía es de ${estadiaBase}`)
      break
    default:
      break
  }
} //FIN DE LA FUNCIÓN

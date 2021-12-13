function mostrar() {
  //tomo la edad
  let edad = txtIdEdad.value
  let select = estadoCivil.value
  if (edad < 18 && select !== 'Soltero') {
    return alert('Es muy pequeño para NO ser soltero.')
  } else {
    alert('Genial')
  }
} //FIN DE LA FUNCIÓN

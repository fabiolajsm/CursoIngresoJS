function mostrar() {
  let value = parseInt(prompt('Ingrese un número:'))
  let primo = true
  if (value == 0 || value == 1 || value == 4) {
    primo = false
  }
  for (let i = 2; i < value / 2; i++) {
    if (value % i == 0) {
      primo = false
    }
  }
  alert(`El número ${value} ${primo ? 'es' : 'no es'} primo`)
} //FIN DE LA FUNCIÓN

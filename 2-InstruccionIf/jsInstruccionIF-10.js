function mostrar() {
  //Genero el número RANDOM entre 1 y 10
  let random = Math.round(Math.random() * 10)
  if (random >= 9) {
    alert(`Su nota es ${random}, EXCELENTE`)
  } else if (random >= 4) {
    alert(`Su nota es ${random}, APROBÓ`)
  } else {
    alert(`Su nota es ${random}, Vamos, la próxima se puede`)
  }
} //FIN DE LA FUNCIÓN

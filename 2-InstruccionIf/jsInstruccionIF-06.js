function mostrar() {
  //tomo la edad
  let edad = txtIdEdad.value;
  if (edad >= 18) {
    alert("Eres mayor de edad");
  } else if (edad >= 17 || edad >= 13) {
    alert("Eres un adolescente");
  } else if (edad > 17 || edad < 13) {
    alert("Eres niña/o");
  }
} //FIN DE LA FUNCIÓN

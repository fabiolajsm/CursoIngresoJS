function mostrar() {
  //tomo la edad
  let edad = txtIdEdad.value;
  let select = estadoCivil.value;
  if (edad < 18 && select !== "Soltero") {
    return null;
  } else if (select === "Soltero" && edad >= 18) {
    alert("Es soltero y no es menor.");
  } else {
    alert("Genial");
  }
} //FIN DE LA FUNCIÓN

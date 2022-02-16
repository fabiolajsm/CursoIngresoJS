function mostrar() {
  var destinoIngresado = txtIdDestino.value;
  switch (destinoIngresado) {
    case "Bariloche":
      alert("Hace frío y calor");
      break;
    case "Cataratas":
      alert("Hace calor");
      break;
    case "Mar del plata":
      alert("Hace frío y calor");
      break;
    case "Ushuaia":
      alert("Hace frío.");
      break;
    default:
      break;
  }
} //FIN DE LA FUNCIÓN

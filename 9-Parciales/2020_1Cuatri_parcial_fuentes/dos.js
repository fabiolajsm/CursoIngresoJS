function mostrar() {
  let seguirComprando;
  let tipoValidad;
  let cantidadDeBolsas;
  let precioPorBolsa;
  let descuento;
  let cantidadArena;
  let cantidadCal;
  let cantidadCemento;

  // A mostrar:
  let importeAPagar;
  let importeConDescuento;
  let totalAPagar;
  let tipoConMasCantidad;
  let tipoMasCaro;

  seguirComprando = "si";
  totalAPagar = 0;
  importeAPagar = 0;
  tipoMasCaro = 0;
  descuento = 0;
  importeConDescuento = 0;
  cantidadArena = 0;
  cantidadCal = 0;
  cantidadCemento = 0;

  do {
    tipoValidad = prompt("Inserte un tipo de validad(arena, cal o cemento)");
    while (
      tipoValidad !== "arena" &&
      tipoValidad !== "cal" &&
      tipoValidad !== "cemento"
    ) {
      alert("Inserte un tipo de validad válido (arena, cal o cemento)");
      tipoValidad = prompt("Inserte un tipo de validad(arena, cal o cemento)");
    }

    cantidadDeBolsas = prompt("Inserte la cantidad de bolsas a comprar: ");
    cantidadDeBolsas = parseInt(cantidadDeBolsas);

    precioPorBolsa = prompt("Inserte el precio por bolsa: ");
    precioPorBolsa = parseInt(precioPorBolsa);

    seguirComprando = prompt("Desea agregar otro producto? (si, no)");
    switch (seguirComprando) {
      case "no":
      case "No":
        seguirComprando = "no";
        break;
      default:
        seguirComprando = "si";
        break;
    }

    // a) El importe total a pagar , bruto sin descuento y...
    importeAPagar = cantidadDeBolsas * precioPorBolsa + importeAPagar;

    // Descuentos:
    // b) El importe total a pagar con descuento(solo si corresponde)
    if (cantidadDeBolsas > 10 && cantidadDeBolsas < 30) {
      descuento = 15;
      descuento = (importeAPagar * descuento) / 100;
      importeConDescuento += importeAPagar - descuento;
    }
    if (cantidadDeBolsas > 30) {
      descuento = 25;
      descuento = (importeAPagar * descuento) / 100;
      importeConDescuento += importeAPagar - descuento;
    }
    if (cantidadDeBolsas < 11) {
      importeConDescuento += importeAPagar;
    }
    // c) Informar el tipo con mas cantidad de bolsas.
    //d) El tipo mas caro
    switch (tipoValidad) {
      case "arena":
        cantidadArena += cantidadDeBolsas;
        if (precioPorBolsa > tipoMasCaro) {
          tipoMasCaro = "arena";
        }
        break;
      case "cal":
        cantidadCal += cantidadDeBolsas;
        if (precioPorBolsa > tipoMasCaro) {
          tipoMasCaro = "cal";
        }
        break;
      case "cemento":
        cantidadCemento += cantidadDeBolsas;
        if (precioPorBolsa > tipoMasCaro) {
          tipoMasCaro = "cemento";
        }
        break;
    }
    if (cantidadArena > cantidadCal && cantidadArena > cantidadCemento) {
      tipoConMasCantidad = "Arena";
    }
    if (cantidadCal > cantidadArena && cantidadCal > cantidadCemento) {
      tipoConMasCantidad = "Cal";
    }
    if (cantidadCemento > cantidadArena && cantidadCemento > cantidadCal) {
      tipoConMasCantidad = "Cemento";
    }
    totalAPagar += importeAPagar;
    importeAPagar = 0;
    cantidadDeBolsas = 0;
  } while (seguirComprando === "si");

  document.write(
    " a) El importe total a pagar es : " +
      totalAPagar +
      "<br> b) El importe total a pagar con descuento es: " +
      importeConDescuento +
      "<br> c) El tipo con mas cantidad de bolsas es: " +
      tipoConMasCantidad +
      "<br> d) El tipo mas caro es:  " +
      tipoMasCaro
  );
}

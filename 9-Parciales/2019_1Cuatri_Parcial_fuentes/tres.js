function mostrar() {
  let precio;
  let porcentajeDescuento;
  let precioFinal;

  precio = prompt("Ingrese el precio:");
  precio = parseInt(precio);

  porcentajeDescuento = prompt(
    "Ingrese el porcentaje de descuento(en numeros enteros):"
  );
  while (porcentajeDescuento < 1) {
    porcentajeDescuento = prompt(
      "Ingrese el porcentaje de descuento(en numeros enteros):"
    );
  }
  porcentajeDescuento = parseInt(porcentajeDescuento);
  porcentajeDescuento = (precio * porcentajeDescuento) / 100;

  precioFinal = precio - porcentajeDescuento;
  elPrecioFinal.value = precioFinal;
}

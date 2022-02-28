function mostrar() {
  let count;
  let tipo;
  let precio;
  let cantidadDeUnidades;
  let marca;
  let fabricante;
  count = 1;

  // A mostrar:
  let fabricanteJabonCaro;
  let cantidadAlcohol;
  let cantidadJabonCaro;
  let precioJabonCaro;
  let precioAlcohol;

  let cantidadBarbijo;
  let precioBarbijo;
  let cantidadDeJabon;
  let precioJabon;

  let totalDeLosPedidos;
  let cantidadTotal;
  let promedioPorCompra;
  let tipoConMasUnidades;

  cantidadAlcohol = 0;
  cantidadJabonCaro = 0;
  precioJabonCaro = undefined;
  precioAlcohol = 0;
  cantidadBarbijo = 0;
  precioBarbijo = 0;
  cantidadDeJabon = 0;
  precioJabon = 0;

  totalDeLosPedidos = 0;
  cantidadTotal = 0;
  cantidadDeUnidades = 0;

  while (count < 6) {
    tipo = prompt(
      "Ingrese un producto de prevención de contagio (barbijo, jabón o alcohol)"
    );
    while (tipo !== "barbijo" && tipo !== "jabón" && tipo !== "alcohol") {
      alert("Inserte un producto válido (barbijo, jabón o alcohol)");
      tipo = prompt(
        "Ingrese un producto de prevención de contagio (barbijo, jabón o alcohol)"
      );
    }
    precio = prompt("Inserte un precio (entre 100 y 300)");
    while (precio > 300 || precio < 100) {
      precio = prompt("Inserte un precio válido (entre 100 y 300)");
    }
    precio = parseInt(precio);

    cantidadDeUnidades = prompt(
      "Inserte la cantidad de unidades (hasta 1000 unidades):"
    );
    while (cantidadDeUnidades < 1 || cantidadDeUnidades > 1000) {
      cantidadDeUnidades = prompt(
        "Inserte una cantidad de unidad válido (hasta 1000 unidades)"
      );
    }
    cantidadDeUnidades = parseInt(cantidadDeUnidades);

    marca = prompt("Ingrese la marca del producto:");
    fabricante = prompt("Ingrese el/la fabricante del producto:");

    // a) Del más caro de los jabones, la cantidad de unidades y el fabricante
    switch (tipo) {
      case "jabón":
        cantidadDeJabon += cantidadDeUnidades;
        precioJabon = precio;
        if (precio < precioJabonCaro || precioJabonCaro === undefined) {
          fabricanteJabonCaro = fabricante;
          precioJabonCaro = precio;
          cantidadJabonCaro += cantidadDeUnidades;
        }
        break;
      case "alcohol":
        cantidadAlcohol += cantidadDeUnidades;
        precioAlcohol = precio;
        break;
      // c) Cuántas unidades de barbijo hay en total
      case "barbijo":
        cantidadBarbijo += cantidadDeUnidades;
        precioBarbijo = precio;
        break;
    }
    // b) Del tipo con mas unidades, el promedio por compra
    if (
      cantidadAlcohol > cantidadBarbijo &&
      cantidadAlcohol > cantidadDeJabon
    ) {
      tipoConMasUnidades = "Alcohol";
      totalDeLosPedidos = totalDeLosPedidos + precioAlcohol;
      promedioPorCompra = totalDeLosPedidos / cantidadAlcohol;
    }
    if (
      cantidadBarbijo > cantidadAlcohol &&
      cantidadBarbijo > cantidadDeJabon
    ) {
      tipoConMasUnidades = "Barbijo";
      totalDeLosPedidos = totalDeLosPedidos + precioBarbijo;
      promedioPorCompra = totalDeLosPedidos / cantidadBarbijo;
    }
    if (
      cantidadDeJabon > cantidadBarbijo &&
      cantidadDeJabon > cantidadDeJabon
    ) {
      tipoConMasUnidades = "Jabón";
      totalDeLosPedidos = totalDeLosPedidos + precioJabon;
      promedioPorCompra = totalDeLosPedidos / cantidadDeJabon;
    }

    cantidadTotal += cantidadDeUnidades;
    count += 1;
  }
  document.write(
    " a) Del más caro de los jabones, la cantidad de unidades es: " +
      cantidadJabonCaro +
      " y el fabricante es: " +
      fabricanteJabonCaro +
      "<br> b) Del tipo con más unidades, el promedio por compra es: " +
      promedioPorCompra +
      "<br> c) Unidades de barbijo que hay en total: " +
      cantidadBarbijo
  );
}

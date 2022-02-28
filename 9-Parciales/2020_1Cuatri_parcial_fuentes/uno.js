function mostrar() {
  let count;
  let tipo;
  let precio;
  let cantidadDeUnidades;
  let marca;
  let fabricante;
  count = 1;

  // A mostrar:
  let fabricanteAlcoholBarato;
  let cantidadAlcohol;
  let cantidadAlcoholBarato;
  let precioAlcoholBarato;
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
  cantidadAlcoholBarato = 0;
  precioAlcoholBarato = undefined;
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

    // a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
    switch (tipo) {
      case "alcohol":
        cantidadAlcohol += cantidadDeUnidades;
        precioAlcohol = precio;
        if (precio < precioAlcoholBarato || precioAlcoholBarato === undefined) {
          fabricanteAlcoholBarato = fabricante;
          precioAlcoholBarato = precio;
          cantidadAlcoholBarato += cantidadDeUnidades;
        }
        break;
      // c) Cuántas unidades de jabones hay en total
      case "jabón":
        cantidadDeJabon += cantidadDeUnidades;
        precioJabon = precio;
        break;
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
    " a) Del más barato de los alcoholes, la cantidad de unidades es: " +
      cantidadAlcoholBarato +
      " y el fabricante es: " +
      fabricanteAlcoholBarato +
      "<br> b) Del tipo con mas unidades, el promedio por compra es: " +
      promedioPorCompra +
      "<br> c) Unidades de jabones que hay en total: " +
      cantidadDeJabon
  );
}

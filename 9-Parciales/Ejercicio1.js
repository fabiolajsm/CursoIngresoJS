// Fabiola Suárez - Ejercicio 1 (Exámen)
// División K.
// Se puede realizar en cualquier archivo de código fuente
// 1- Una casa de computación que se especializa en venta de insumos importados desea calcular ciertas métricas en base a las ventas de sus productos.

// Se ingresa de cada venta: (Ingresa mínimo 5 ventas)
// -Nombre del producto.
// -Género: (Memorias – Discos – Motherboards)
// -Tipo de Venta: (Online – Local)
// -Importe: (No pueden ser números negativos ni mayor a los 30000)
// Se pide:
// A- El más barato de “Discos” con su importe .
// B- De la venta más cara, el nombre del producto y tipo.
// C- La cantidad de ventas que sean de “Memorias” y cuesten menos de $850.
function mostrat() {
  let count;
  let nombre;
  let genero;
  let tipo;
  let importe;

  // A mostrar:
  let barato;
  let importeDelBarato;
  let productoCaro;
  let tipoCaro;
  let cantidadMemorias;

  let precioDisco;
  let precioMemoria;
  let precioMotherboards;

  count = 0;
  importe = 0;
  precioDisco = 0;
  precioMemoria = 0;
  precioMotherboards = 0;
  cantidadMemorias = 0;

  do {
    nombre = prompt("Ingrese el nombre del producto:");
    genero = prompt(
      "Ingrese el género (solo válido para Memorias, Discos, Motherboards)"
    );
    while (
      genero !== "Memorias" &&
      genero !== "Discos" &&
      genero !== "Motherboards"
    ) {
      genero = prompt(
        "Error. Ingrese un género válido (solo Memorias, Discos, Motherboards)"
      );
    }

    tipo = prompt(
      "Ingrese el tipo de venta (solo contamos con Online y Local)"
    );
    while (tipo !== "Online" && tipo !== "Local") {
      tipo = prompt("Error. Ingrese un tipo de venta válido (Online o Local)");
    }

    importe = prompt("Inserte un importe (no mayor a 30000)");
    importe = parseInt(importe);
    while (importe < 0 || importe > 30000) {
      importe = prompt("Error. Inserte un importe válido (no mayor a 30000)");
    }
    importe = parseInt(importe);
    // A- El más barato de “Discos” con su importe:
    switch (genero) {
      case "Discos":
        barato = nombre;
        importeDelBarato = precio;
        precioDisco = precioDisco;
        if (precio < importeDelBarato) {
          barato = nombre;
          importeDelBarato = precio;
        }
        break;
      case "Memorias":
        // C- La cantidad de ventas que sean de “Memorias” y cuesten menos de $850.
        precioMemoria = precio;
        if (precio < 850) {
          cantidadMemorias += 1;
        }
        break;
      case "Motherboards":
        precioMotherboards = precio;
        break;
    }
    // B- De la venta más cara, el nombre del producto y tipo.
    if (precioDisco > precioMemoria && precioDisco > precioMotherboards) {
      productoCaro = "Disco";
      tipoCaro = tipo;
    }
    if (precioMemoria > precioDisco && precioMemoria > precioMotherboards) {
      productoCaro = "Memoria";
      tipoCaro = tipo;
    }
    if (
      precioMotherboards > precioDisco &&
      precioMotherboards > precioMemoria
    ) {
      productoCaro = "Motherboards";
      tipoCaro = tipo;
    }
  } while (count < 6);

  document.write(
    " a) El más barato de “Discos” con su importe: " +
      importeDelBarato +
      "<br> b) De la venta más cara, el nombre del producto es : " +
      productoCaro +
      " y el tipo: " +
      tipoCaro +
      "<br> c) La cantidad de ventas de “Memorias” que cuestan menos de $850 es de: " +
      cantidadMemorias
  );
}

/// Como deberia ser:
// 1- Una casa de computación que se especializa en venta de insumos importados desea calcular ciertas métricas en base a las ventas de sus productos.
// Se ingresa de cada venta: (Ingresa mínimo 5 ventas)
// -Nombre del producto.
// -Género: (Memorias – Discos – Motherboards)
// -Tipo de Venta: (Online – Local)
// -Importe: (No pueden ser números negativos ni mayor a los 30000)
// Se pide:
// A- El más barato de “Discos” con su importe .
// B- De la venta más cara, el nombre del producto y tipo.
// C- La cantidad de ventas que sean de “Memorias” y cuesten menos de $850.

function mostrar() {
  let contador;
  let nombreProducto;
  let generoProducto;
  let tipoVenta;
  let importe;

  // A
  let nombreDiscoBarato;
  let importeDiscoBarato;
  let banderaDiscoBarato = true;
  // B
  let nombreVentaMasCara;
  let tipoVentaMasCara;
  let importeVentaMasCara = 0;
  let banderaVentaMasCara = true;
  // C
  let cantidadMemorias;
  cantidadMemorias = 0;

  contador = 1;

  while (contador < 6) {
    do {
      nombreProducto = prompt("Ingrese el nombre del producto: ");
    } while (nombreProducto === "");
    do {
      generoProducto = prompt(
        "Ingrese el genero del producto (solo válido para Memorias, Discos, Motherboards): "
      );
    } while (
      generoProducto !== "Memorias" &&
      generoProducto !== "Discos" &&
      generoProducto !== "Motherboards"
    );
    do {
      tipoVenta = prompt("Ingrese el tipo de venta (Online o Local): ");
    } while (tipoVenta !== "Online" && tipoVenta !== "Local");
    do {
      importe = prompt("Ingrese el importe: ");
      importe = parseInt(importe);
    } while (isNaN(importe) || importe < 0 || importe > 30000);

    // A- El más barato de “Discos” con su importe:
    switch (generoProducto) {
      case "Discos":
        if (banderaDiscoBarato === true) {
          nombreDiscoBarato = nombreProducto;
          importeDiscoBarato = importe;
          banderaDiscoBarato = false;
        }
        if (importe < importeDiscoBarato) {
          nombreDiscoBarato = nombreProducto;
          importeDiscoBarato = importe;
        }
        break;
      case "Memorias":
        // C- La cantidad de ventas que sean de “Memorias” y cuesten menos de $850.
        if (importe < 850) {
          cantidadMemorias += 1;
        }
        break;
    }

    // B- De la venta más cara, el nombre del producto y tipo.
    if (banderaVentaMasCara === true) {
      nombreVentaMasCara = nombreProducto;
      tipoVentaMasCara = generoProducto;
      importeVentaMasCara = importe;
      banderaVentaMasCara = false;
    } else {
      if (importe > importeVentaMasCara) {
        nombreVentaMasCara = nombreProducto;
        tipoVentaMasCara = generoProducto;
        importeVentaMasCara = importe;
      }
    }
    contador++;
    if (contador === 6) {
      do {
        continuarAgregando = prompt("Desea agregar otra venta? (si, no)");
      } while (continuarAgregando !== "no" && continuarAgregando !== "si");
      switch (continuarAgregando) {
        case "si":
          contador = 5;
          break;
        default:
          break;
      }
    }
  }

  document.write(
    ` A- El más barato de “Discos” es ${nombreDiscoBarato} y su importe es ${importeDiscoBarato}. <br>
      B- De la venta más cara, el nombre del producto es ${nombreVentaMasCara} y el tipo es ${tipoVentaMasCara}. <br>
      C- La cantidad de ventas de “Memorias” que cuestan menos de $850 es: ${cantidadMemorias}.
    `
  );
}

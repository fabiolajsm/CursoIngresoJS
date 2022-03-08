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
  let continuarAgregando;
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
  continuarAgregando = false;

  while (contador < 6 || continuarAgregando === true) {
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
    continuarAgregando = false;
  }
  
  if (contador === 5) {
    do {
      continuarAgregando = prompt("Desea agregar otra venta? (si, no)");
    } while (continuarAgregando !== "no" && continuarAgregando !== "si");
    switch (continuarAgregando) {
      case "no":
        continuarAgregando = false;
        break;
      default:
        continuarAgregando = true;
        break;
    }
  }

  document.write(
    ` A- El más barato de “Discos” es ${nombreDiscoBarato} y su importe es ${importeDiscoBarato}. <br>
      B- De la venta más cara, el nombre del producto es ${nombreVentaMasCara} y el tipo es ${tipoVentaMasCara}. <br>
      C- La cantidad de ventas de “Memorias” que cuestan menos de $850 es: ${cantidadMemorias}.
    `
  );
}

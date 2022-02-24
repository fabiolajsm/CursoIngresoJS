function mostrar() {
  let contador;
  let tipoProducto;
  let precio;
  let cantidadUnidades;
  let marca;
  let fabricante;
  let productosCargados;

  // Variables para mostrar:
  let numero;
  let caro;
  let másUnidades;
  let promedioPorCompra; // ???
  let barbijosComprados = 0;

  contador = 1;
  productosCargados = [];

  while (contador <= 3) {
    tipoProducto = prompt(
      "Cargue 5 productos de prevención de contagio (barbijo , jabón o alcohol):"
    );
    if (
      tipoProducto === "barbijo" ||
      tipoProducto === "jabón" ||
      tipoProducto === "alcohol"
    ) {
      precio = prompt(
        "Ingresar el precio del producto (entre 100 y 300 pesos)"
      );
      precio = parseInt(precio);

      if (precio >= 100 && precio <= 300) {
        cantidadUnidades = prompt(
          "Ingrese cantidad de unidades (no deben ser más de 1000 unidades)"
        );
        cantidadUnidades = parseInt(cantidadUnidades);
        if (cantidadUnidades > 0 && cantidadUnidades <= 1000) {
          marca = prompt("Ingrese el nombre de la marca de su producto:");
          fabricante = prompt(
            "Ingrese el nombre de el/la fabricante del producto:"
          );
          contador += 1;
          alert("Producto ingresado correctamente.");
          productosCargados.push({
            tipoProducto,
            precio,
            cantidadUnidades,
            marca,
            fabricante,
          });
        } else {
          cantidadUnidades = prompt(
            "Ingrese cantidad de unidades (no deben ser más de 1000 unidades)"
          );
        }
      }
    } else {
      alert(
        "Recuerde ingresar sólo productos de prevención de contagio (barbijo , jabón o alcohol)"
      );
      tipoProducto = prompt(
        "Cargue un producto de prevención de contagio (barbijo , jabón o alcohol):"
      );
    }
  }

  if (productosCargados) {
    console.log(productosCargados, "productos cargadosssss");
    for (let i = 0; i <= productosCargados.length; i++) {
      switch (productosCargados[i].tipoProducto) {
        case "jabón":
          numero = Math.max(
            productosCargados[i].precio,
            productosCargados[i + 1].precio
          );
          caro = productosCargados.find((e) => e.precio === numero);
          alert(
            `a) Del más caro de los jabones, esta es la cantidad de unidades: ${caro.cantidadUnidades}, y el/la fabricante es: ${fabricante}`
          );
          break;
        case "barbijo":
          barbijosComprados =
            barbijosComprados +
            productosCargados[i].tipoProducto.cantidadUnidades[i];
          console.log(productosCargados[i].tipoProducto.cantidadUnidades[i]);
          break;
        default:
          break;
      }
      //   másUnidades = Math.max(
      //     productosCargados[i].cantidadUnidades,
      //     productosCargados[i + 1].cantidadUnidades
      //   );

      // Mostrar lo que se pide:
    }
  }
}

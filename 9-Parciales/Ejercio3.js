// Fabiola Suárez - Ejercicio 3 (Exámen)
// División K.

// 3- De 5 personas que suben a un avión necesitamos tomar y validar los siguientes datos:

// nombre , asiento [1 al 100],importe del pasaje de 0 a 300000, sexo [m,f o nb] y edad [1 a 100].

// a)Informar el último asiento ingresado con el nombre  y su importe.
// b)La edad promedio de las mujeres.
// c)el maximo importe ingresado por un pasaje de un pasajero sexo nb.
// d)el minimo importe ingresado por un pasaje de un pasajero sexo f.

// Pedir datos por prompt y mostrar por document.write o console.log

function mostrar() {
  let count;
  count = 1;

  let nombre;
  let asiento;
  let importe;
  let sexo;
  let edad;

  // A mostrar:
  let ultimoAsientoIngresado;
  let cantidadMujeres;
  let edadMujeres;
  let promedioEdadMujeres;
  let maximoImporteNb;
  let minimoImporteF;

  cantidadMujeres = 0;
  edadMujeres = 0;
  maximoImporteNb = 0;
  minimoImporteF = 0;

  while (count < 6) {
    nombre = prompt("Ingrese su nombre:");

    asiento = prompt("Ingrese su número de asiento:");
    asiento = parseInt(asiento);
    while (asiento > 100 || asiento < 1) {
      asiento = prompt(
        "Error. Ingrese un número de asiento válido (del 1 al 100): "
      );
      asiento = parseInt(asiento);
    }

    importe = prompt("Ingrese el importe de su pasaje:");
    importe = parseInt(importe);
    while (importe > 300000 || importe < 1) {
      importe = prompt("Error. Ingrese un importe válido (del 1 al 300000): ");
      importe = parseInt(importe);
    }

    sexo = prompt("Ingrese su sexo (f , m o nb)");
    while (sexo !== "f" && sexo !== "m" && sexo !== "nb") {
      sexo = prompt("Error. Inserte un sexo válido: f, m o nb");
    }

    edad = prompt("Ingrese su edad:");
    edad = parseInt(edad);
    while (edad > 100 || edad < 1) {
      edad = prompt("Ingrese su edad: ");
      edad = parseInt(edad);
    }

    switch (sexo) {
      case "f":
        cantidadMujeres = cantidadMujeres + 1;
        edadMujeres = edadMujeres + edad;
        minimoImporteF = importe;
        break;
      case "nb":
        // c) El maximo importe ingresado por un pasaje de un pasajero sexo nb.
        maximoImporteNb = importe;
        if (importe > maximoImporteNb) {
          maximoImporteNb = importe;
        }
        break;
    }

    // a)Informar el último asiento ingresado con el nombre y su importe.
    // es el mismo asiento e importe...
    ultimoAsientoIngresado = asiento;
    // b)La edad promedio de las mujeres.
    promedioEdadMujeres = edadMujeres / cantidadMujeres;
    // d) El minimo importe ingresado por un pasaje de un pasajero sexo f.
    if (sexo === "f" && importe < minimoImporteF) {
      minimoImporteF = importe;
    }
    count += 1;
  }
  document.write(
    " a) El nombre del último asiento ingresado es: " +
      ultimoAsientoIngresado +
      "y su importe " +
      importe +
      "<br> b) La edad promedio de las mujeres es: " +
      promedioEdadMujeres +
      "<br> c) El maximo importe ingresado por un pasaje de un pasajero del sexo nb es: " +
      maximoImporteNb +
      "<br> d) El minimo importe ingresado por un pasaje de un pasajero del sexo f es: " +
      minimoImporteF
  );
}

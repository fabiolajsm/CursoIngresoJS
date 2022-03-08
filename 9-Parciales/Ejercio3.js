// Fabiola Suárez - Ejercicio 3 (Exámen)
// División K.

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

// Como deberia ser :
// 3- De 5 personas que suben a un avión necesitamos tomar y validar los siguientes datos:
// nombre , asiento [1 al 100],importe del pasaje de 0 a 300000, sexo [m,f o nb] y edad [1 a 100].

// a)Informar el último asiento ingresado con el nombre  y su importe.
// b)La edad promedio de las mujeres.
// c)el maximo importe ingresado por un pasaje de un pasajero sexo nb.
// d)el minimo importe ingresado por un pasaje de un pasajero sexo f.

// Pedir datos por prompt y mostrar por document.write o console.log

function mostrar() {
  let contador;
  let nombre;
  let asiento;
  let importePasaje;
  let sexo;
  let edad;

  // A
  let nombreUltimoAsiento;
  let importeUltimoAsiento;
  // B
  let cantidadMujeres = 0;
  let edadMujeres = 0;
  let promedioEdadMujeres = 0;
  // C
  let banderaMaximoImporteNB = true;
  let importeMaximoNB = 0;
  // D
  let banderaMinimoImporteF = true;
  let minimoImporteF = 0;

  contador = 1;
  importePasaje = 0;
  importeUltimoAsiento = 0;

  while (contador < 6) {
    do {
      nombre = prompt("Ingrese su nombre: ");
    } while (nombre === "");

    do {
      asiento = prompt("Ingrese su asiento: ");
      asiento = parseInt(asiento);
    } while (isNaN(asiento) || asiento < 1 || asiento > 100);

    do {
      importePasaje = prompt("Ingrese el importe de su pasaje: ");
      importePasaje = parseInt(importePasaje);
    } while (
      isNaN(importePasaje) ||
      importePasaje < 0 ||
      importePasaje > 300000
    );

    do {
      sexo = prompt("Ingrese su sexo (f , m o nb):");
    } while (sexo !== "f" && sexo !== "m" && sexo !== "nb");

    do {
      edad = prompt("Ingrese su edad: ");
      edad = parseInt(edad);
    } while (isNaN(edad) || edad < 1 || edad > 100);
    // a) Informar el último asiento ingresado con el nombre  y su importe.
    nombreUltimoAsiento = nombre;
    importeUltimoAsiento = importePasaje;

    switch (sexo) {
      case "f":
        cantidadMujeres += 1;
        edadMujeres = edadMujeres + edad;
        // d) El minimo importe ingresado por un pasaje de un pasajero sexo f.
        if (banderaMinimoImporteF === true) {
          minimoImporteF = importePasaje;
          banderaMinimoImporteF = false;
        }
        if (importePasaje < minimoImporteF) {
          minimoImporteF = importePasaje;
        }
        break;
      case "nb":
        // c) El maximo importe ingresado por un pasaje de un pasajero sexo nb.
        if (banderaMaximoImporteNB === true) {
          importeMaximoNB = importePasaje;
          banderaMaximoImporteNB = false;
        }
        if (importePasaje > importeMaximoNB) {
          importeMaximoNB = importePasaje;
        }
        break;
    }

    // b) La edad promedio de las mujeres.
    promedioEdadMujeres = edadMujeres / cantidadMujeres;
    contador++;
  }
  document.write(
    ` A- El último asiento ingresado fue el de ${nombreUltimoAsiento} y su importe fue ${importeUltimoAsiento}. <br>
      B- La edad promedio de las mujeres es: ${promedioEdadMujeres}. <br>
      C- El maximo importe ingresado por un pasaje de un pasajero del sexo nb fue de $${importeMaximoNB}. <br>
      D- El minimo importe ingresado por un pasaje de un pasajero del sexo femenino fue de: $${minimoImporteF}
    `
  );
}

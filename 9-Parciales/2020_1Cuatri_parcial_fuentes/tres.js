function mostrar() {
  let siguientePasajero;
  let nombre;
  let edad;
  let sexo;
  let cantidadMujeres;
  let cantidadHombres;
  let estadoCivil;
  let temperaturaCorporal;

  siguientePasajero = "si";
  cantidadMujeres = 0;
  cantidadHombres = 0;

  // A mostrar:
  let mayorTemperatura = 0;
  let personaConMayorTemperatura;
  let mayoresDeEdadViudos = 0;
  let cantidadHombresSolterosYViudos = 0;
  let mayoresDeEdadConMasTemperatura = 0;
  let solteros = 0;
  let edadSolteros = 0;
  let promedioEdadSolteros = 0;


  do {
    nombre = prompt("Ingrese su nombre:");
    edad = prompt("Ingrese su edad:");
    edad = parseInt(edad);

    while (edad > 99 || edad < 1 || typeof edad !== "number") {
      // typeof no sirve, ignoremoslo
      edad = prompt("Ingrese su edad: ");
      edad = parseInt(edad);
    }

    sexo = prompt("Ingrese su sexo (f o m)");
    while (sexo !== "f" && sexo !== "F" && sexo !== "m" && sexo !== "M") {
      alert("Inserte un sexo válido: f o m");
      sexo = prompt("Ingrese su sexo (f o m)");
    }

    switch (sexo) {
      case "f":
      case "F":
        cantidadMujeres = cantidadMujeres + 1;
        break;
      default:
        cantidadHombres = cantidadHombres + 1;
        break;
    }

    estadoCivil = prompt("Ingrese su estado civil(soltero, casado o viudo)");
    while (
      estadoCivil !== "soltero" &&
      estadoCivil !== "casado" &&
      estadoCivil !== "viudo"
    ) {
      alert("Inserte un estadoCivil válido: (soltero, casado o viudo)");
      estadoCivil = prompt("Ingrese su estadoCivil (soltero, casado o viudo)");
    }

    temperaturaCorporal = prompt(
      "Ingrese su temperatura corporal (Escriba un número, ej: 37)"
    );
    temperaturaCorporal = parseInt(temperaturaCorporal);
    while (temperaturaCorporal < 35 || temperaturaCorporal > 39) {
      temperaturaCorporal = prompt(
        "No tiene la temperatura ideal para entrar, tiene que estar dentro de 36 hasta los 39. Confirme su temperaturaCorporal: "
      );
      temperaturaCorporal = parseInt(temperaturaCorporal);
    }

    siguientePasajero = prompt("Desea agregar otro pasajero/a? (si, no)");
    switch (siguientePasajero) {
      case "no":
      case "No":
        siguientePasajero = "no";
        break;
      default:
        siguientePasajero = "si";
        break;
    }
    // a) El nombre de la persona con más temperatura.
    if (mayorTemperatura < temperaturaCorporal) {
      mayorTemperatura = temperaturaCorporal;
      personaConMayorTemperatura =
        nombre +
        " es la persona con más temperatura, teniendo " +
        temperaturaCorporal +
        " grados";
    }
    // b) Cuantos mayores de edad estan viudos.
    if (edad > 17 && estadoCivil === "viudo") {
      mayoresDeEdadViudos = mayoresDeEdadViudos + 1;
    }
    // c) La cantidad de hombres que hay solteros o viudos
    if (
      ((sexo === "m" || sexo === "M") && estadoCivil === "viudo") ||
      estadoCivil === "soltero"
    ) {
      cantidadHombresSolterosYViudos = cantidadHombresSolterosYViudos + 1;
    }
    // d) Cuantas personas de la tercera edad( más de 60 años), tienen más de 38 de temperatura.
    if (edad > 59 && temperaturaCorporal > 38) {
      mayoresDeEdadConMasTemperatura = mayoresDeEdadConMasTemperatura + 1;
    }
    // e) El promedio de edad entre los hombres solteros.
    if ((sexo === "m" || sexo === "M") && estadoCivil === "soltero") {
      edadSolteros = edadSolteros + edad;
      solteros = solteros + 1;
      promedioEdadSolteros = edadSolteros / solteros;
    }
  } while (siguientePasajero == "si");
}

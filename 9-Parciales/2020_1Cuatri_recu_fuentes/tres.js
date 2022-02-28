function mostrar() {
  let siguientePasajero;
  let nombre;
  let nacionalidad;
  let edad;
  let sexo;
  let estadoCivil;
  let temperaturaCorporal;

  let cantidadMujeres;
  let cantidadHombres;

  siguientePasajero = "si";
  cantidadMujeres = 0;
  cantidadHombres = 0;

  // A mostrar:
  let mayorTemperatura = 0;
  let personaConMayorTemperatura;
  let mayoresDeEdadSolteros = 0;
  let cantidadMujeresSolterasYViudas = 0;
  let mayoresDeEdadConMasTemperatura = 0;
  let casadas = 0;
  let edadCasadas = 0;
  let promedioEdadCasadas = 0;

  do {
    nombre = prompt("Ingrese su nombre:");
    nacionalidad = prompt("Ingrese su nacionalidad:");
    edad = prompt("Ingrese su edad:");
    edad = parseInt(edad);

    while (edad > 99 || edad < 1 || typeof edad !== "number") {
      edad = prompt("Error. Ingrese una edad válida(entre 1 a 99 años)");
      edad = parseInt(edad);
    }

    sexo = prompt("Ingrese su sexo (f o m)");
    while (sexo !== "f" && sexo !== "F" && sexo !== "m" && sexo !== "M") {
      sexo = prompt("Error. Inserte un sexo válido (f o m)");
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
      estadoCivil = prompt(
        "Error. Inserte un estado civil válido: (soltero, casado o viudo)"
      );
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
    // a) La nacionalidad de la persona con mayor temperatura:
    if (mayorTemperatura < temperaturaCorporal) {
      mayorTemperatura = temperaturaCorporal;
      personaConMayorTemperatura = nacionalidad;
    }
    // b) Cuantos mayores de edad estan solteros.
    if (edad > 17 && estadoCivil === "soltero") {
      mayoresDeEdadSolteros = mayoresDeEdadSolteros + 1;
    }
    // c) La cantidad de mujeres que hay solteras o viudas.
    if (
      ((sexo === "f" || sexo === "F") && estadoCivil === "viudo") ||
      estadoCivil === "soltero"
    ) {
      cantidadMujeresSolterasYViudas = cantidadMujeresSolterasYViudas + 1;
    }
    // d) Cuantas personas de la tercera edad( más de 60 años), tienen más de 38 de temperatura.
    if (edad > 60 && temperaturaCorporal > 38) {
      mayoresDeEdadConMasTemperatura = mayoresDeEdadConMasTemperatura + 1;
    }
    // e) El promedio de edad entre las mujeres casadas.
    if ((sexo === "f" || sexo === "F") && estadoCivil === "casado") {
      edadCasadas += edad;
      casadas += 1;
      promedioEdadCasadas = edadCasadas / casadas;
    }
  } while (siguientePasajero == "si");
  // Mostrar
  document.write(
    " a) La nacionalidad de la persona con mayor temperatura es: " +
      personaConMayorTemperatura +
      "<br> b) La cantidad de mayores de edad solteros es: " +
      mayoresDeEdadSolteros +
      "<br> c) La cantidad de mujeres que hay solteras o viudas es: " +
      cantidadMujeresSolterasYViudas +
      "<br> d) Cantidad de personas de la tercera edad (más de 60 años) que tienen más de 38 de temperatura: " +
      mayoresDeEdadConMasTemperatura +
      "<br> e) El promedio de edad entre las mujeres casadas es:  " +
      promedioEdadCasadas
  );
}

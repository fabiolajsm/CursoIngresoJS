// b)
// Cuantos mayores de edad estan viudos.
// c)
// La cantidad de hombres que hay solteros o viudos.
// d)
// Cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
// e)
// El promedio de edad entre los hombres solteros.

function mostrar() {
  let siguientePasajero;
  let nombre;
  let edad;
  let sexo;
  let cantidadMujeres;
  let cantidadHombres;
  let estadoCivil;
  let soltero;
  let casado;
  let viudo;
  let pasajeros = [];
  let persona;
  let temperaturaCorporal;

  // A mostrar:
  let mayorTemperatura;

  siguientePasajero = "si";
  cantidadMujeres = 0;
  cantidadHombres = 0;
  soltero = 0;
  casado = 0;
  viudo = 0;

  do {
    nombre = prompt("Ingrese su nombre:");
    edad = prompt("Ingrese su edad: ");
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

    switch (estadoCivil) {
      case "soltero":
        soltero = soltero + 1;
        break;
      case "casado":
        casado = casado + 1;
        break;
      case "viudo":
        viudo = viudo + 1;
        break;
      default:
        alert("Inserte un estado civil válido: (soltero, casado o viudo)");
        estadoCivil = prompt(
          "Ingrese un estado civil válido: (soltero, casado o viudo)"
        );
        break;
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

    // Aqui defino a la persona:
    persona = { nombre, edad, sexo, estadoCivil, temperaturaCorporal };
    pasajeros.push(persona);
    console.log(persona, "personaa");
    console.log(pasajeros, "pasajerossss");

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
    // for (let i = 0; i < pasajeros.length; i++) {
    //   if (pasajeros[i].temperaturaCorporal > mayorTemperatura) {
    //     mayorTemperatura = pasajeros[i].temperaturaCorporal;
    //     console.log(mayorTemperatura, "Mayor temperatura");
    //   }
    // }
  } while (siguientePasajero == "si");
}

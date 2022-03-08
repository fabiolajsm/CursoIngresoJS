// Fabiola Suárez - Ejercicio 2 (Exámen)
// División K.

function mostrar() {
  let agregarAlumno;
  let division;
  let legajo;
  let recursante;
  let nota;

  let cantidadA;
  let cantidadB;
  let cantidadC;

  // A mostrar:
  let masAspirantes;
  let nombreRecursante;
  let mayorNotaRecursante;
  let nombreDelNoRecursante;
  let menorNotaDelNoRecursante;

  agregarAlumno = "si";
  cantidadA = 0;
  cantidadB = 0;
  cantidadC = 0;

  do {
    division = prompt("Ingrese su división (A, B o C):");
    while (division !== "A" && division !== "B" && division !== "C") {
      division = prompt("Error. Ingrese una división válida (A, B o C):");
    }
    legajo = prompt("Ingrese su legajo (del 1 al 10000):");
    legajo = parseInt(legajo);
    while (legajo > 10000 || legajo < 1) {
      legajo = prompt("Error. Ingrese un legajo válido (del 1 al 10000):");
      legajo = parseInt(legajo);
    }

    recursante = prompt("Es recursante? (si o no)");
    while (recursante !== "si" && recursante !== "no") {
      recursante = prompt("Error. Es recursante? (solo diga si o no):");
    }

    nota = prompt("Ingrese su nota:");
    nota = parseInt(nota);

    agregarAlumno = prompt("Desea agregar otro alumno/a? (si, no)");
    switch (agregarAlumno) {
      case "no":
      case "No":
        agregarAlumno = "no";
        break;
      default:
        agregarAlumno = "si";
        break;
    }
    // Lógica:
    switch (division) {
      case "A":
        cantidadA += 1;
        break;
      case "B":
        cantidadB += 1;
        break;
      case "C":
        cantidadC += 1;
        break;
    }
    // a) La división con más aspirantes.
    if (cantidadA > cantidadB && cantidadA > cantidadC) {
      masAspirantes = "División A";
    }
    if (cantidadB > cantidadA && cantidadB > cantidadC) {
      masAspirantes = "División B";
    }
    if (cantidadC > cantidadA && cantidadC > cantidadB) {
      masAspirantes = "División C";
    }
    // b) El nombre del recursante con mayor nota.
    if (recursante === "si") {
      nombreRecursante = nombre;
      mayorNotaRecursante = nota;
      if (nota > mayorNotaRecursante) {
        nombreRecursante = nombre;
        mayorNotaRecursante = nota;
      }
    }
    // c) El nombre del que No es recursante y tiene la menor nota.
    if (recursante === "no") {
      nombreDelNoRecursante = nombre;
      menorNotaDelNoRecursante = nota;
      if (nota < menorNotaDelNoRecursante) {
        nombreDelNoRecursante = nombre;
        menorNotaDelNoRecursante = nota;
      }
    }
    document.write(
      " a) La división con más aspirantes es la " +
        masAspirantes +
        "<br> b) El nombre del recursante con mayor nota es : " +
        nombreRecursante +
        "<br> c) El nombre del que No es recursante y tiene la menor nota." +
        nombreDelNoRecursante
    );
  } while ((agregarAlumno = "si"));
}

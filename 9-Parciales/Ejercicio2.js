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

// Como deberia ser:
// 2- Nos ingresan una cantidad indeterminada de alumnos inscriptos en programación 1,
// validando los datos ingresados:
// División [A,B, C] ,nombre del alumno ,legajo [del 1 al 10000] , si es recursante o no y nota.
// Informar:
// a)La división con más aspirantes.
// b)el nombre recursante con mayor nota
// c)el nombre del que No es recursante y tiene  la menor nota.
// Pedir datos por prompt y mostrar por document.write o console.log

function mostrar() {
  let agregarAlumno;
  let division;
  let nombre;
  let legajo;
  let recursante;
  let nota;

  // A
  let divisionA;
  let divisionB;
  let divisionC;
  let masAspirantes;
  // B
  let recursanteMayorNota;
  let banderaRecursante;
  let nombreRecursante;
  // C
  let menorNota;
  let banderaMenorNota;
  let alumnoMenorNota;

  agregarAlumno = true;
  divisionA = 0;
  divisionB = 0;
  divisionC = 0;
  banderaRecursante = true;
  banderaMenorNota = true;

  while (agregarAlumno === true) {
    do {
      nombre = prompt("Ingrese el nombre del alumno/a: ");
    } while (nombre === "");
    do {
      division = prompt("Ingrese la división (A, B o C):");
    } while (division !== "A" && division !== "B" && division !== "C");
    do {
      legajo = prompt("Ingrese su legajo (del 1 al 10000):");
      legajo = parseInt(legajo);
    } while (isNaN(legajo) || legajo < 1 || legajo > 10000);
    do {
      recursante = prompt("Es recursante? (si o no)");
    } while (recursante !== "si" && recursante !== "no");
    do {
      nota = prompt("Ingrese su nota: ");
      nota = parseInt(nota);
    } while (isNaN(nota) || nota < 1 || nota > 10);

    // a) La división con más aspirantes.
    switch (division) {
      case "A":
        divisionA += 1;
        break;
      case "B":
        divisionB += 1;
        break;
      case "C":
        divisionC += 1;
        break;
    }

    if (divisionA > divisionB && divisionA > divisionC) {
      masAspirantes = "División A";
    }
    if (divisionB > divisionA && divisionB > divisionC) {
      masAspirantes = "División B";
    }
    if (divisionC > divisionA && divisionC > divisionB) {
      masAspirantes = "División C";
    }
    // b) El nombre recursante con mayor nota.
    switch (recursante) {
      case "si":
        if (banderaRecursante === true) {
          nombreRecursante = nombre;
          recursanteMayorNota = nota;
          banderaRecursante = false;
        }
        if (nota > recursanteMayorNota) {
          nombreRecursante = nombre;
          recursanteMayorNota = nota;
        }
        break;
      // c) El nombre del que No es recursante y tiene la menor nota.
      case "no":
        if (banderaMenorNota === true) {
          alumnoMenorNota = nombre;
          menorNota = nota;
          banderaMenorNota = false;
        }
        if (nota < menorNota) {
          alumnoMenorNota = nombre;
          menorNota = nota;
        }
        break;
    }

    do {
      agregarAlumno = prompt("Desea agregar otra alumno? (si, no)");
    } while (agregarAlumno !== "no" && agregarAlumno !== "si");
    switch (agregarAlumno) {
      case "si":
        agregarAlumno = true;
        break;
      case "no":
        agregarAlumno = false;
        break;
    }
  }
  document.write(
    ` A- La división con más aspirantes es la ${masAspirantes}. <br>
      B- El nombre recursante con mayor nota es: ${nombreRecursante}. <br>
      C- El nombre del que No es recursante y tiene la menor nota es: ${alumnoMenorNota}.
    `
  );
}

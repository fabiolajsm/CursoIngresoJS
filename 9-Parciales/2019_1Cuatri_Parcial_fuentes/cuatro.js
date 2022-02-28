function mostrar() {
  let numeroUno;
  let numeroDos;
  let resta;

  numeroUno = prompt("Ingrese un numero");
  numeroDos = prompt("Ingrese un numero");

  numeroUno = parseInt(numeroUno);
  numeroDos = parseInt(numeroDos);

  if (numeroUno === numeroDos) {
    alert(numeroUno + ", " + numeroDos);
  }
  if (numeroUno > numeroDos) {
    resta = numeroUno - numeroDos;
    alert(`La resta de ${numeroUno} con ${numeroDos} es igual a : ${resta}`);
    if (resta > 10) {
      alert(`La resta es ${resta} y superó el 10`);
    }
  } else {
    alert(`ok!`);
  }
}

function mostrar() {
  let nombreUno;
  let nombreDos;
  let pesoUno;
  let pesoDos;
  let sumaPesos;
  let promedioPeso;
  let mensaje;

  nombreUno = prompt("Ingrese su nombre:");
  nombreDos = prompt("Ingrese el nombre de su pareja:");

  pesoUno = prompt("Ingrese su peso:");
  pesoDos = prompt("Ingrese el peso de su pareja:");

  pesoUno = parseInt(pesoUno);
  pesoDos = parseInt(pesoDos);

  sumaPesos = pesoUno + pesoDos;
  promedioPeso = sumaPesos / 2;

  mensaje = `Ustedes se llaman ${nombreUno} y ${nombreDos}. Pesan ${pesoUno} y ${pesoDos} kilos, que sumados son ${sumaPesos} kilos y el promedio de peso ${promedioPeso} ".`;
  alert(mensaje);
}

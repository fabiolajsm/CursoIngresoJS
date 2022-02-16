/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar(total) {
  const precioUno = parseInt(txtIdPrecioUno.value);
  const precioDos = parseInt(txtIdPrecioDos.value);
  const precioTres = parseInt(txtIdPrecioTres.value);
  const suma = precioUno + precioDos + precioTres;

  if (total !== true) {
    alert(suma);
  } else {
    return suma;
  }
}

function Promedio() {
  let suma = Sumar(true);
  alert(suma / 3);
}

function PrecioFinal() {
  let suma = Sumar(true);
  alert(suma + suma * 0.21);
}

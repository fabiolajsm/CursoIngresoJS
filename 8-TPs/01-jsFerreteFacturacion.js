/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar(total) {
  const p1 = parseInt(txtIdPrecioUno.value)
  const p2 = parseInt(txtIdPrecioDos.value)
  const p3 = parseInt(txtIdPrecioTres.value)
  const sum = p1 + p2 + p3

  if (total !== true) {
    alert(sum)
  } else {
    return sum
  }
}

function Promedio() {
  let suma = Sumar(true)
  alert(suma / 3)
}

function PrecioFinal() {
  let suma = Sumar(true)
  alert(suma + suma * 0.21)
}

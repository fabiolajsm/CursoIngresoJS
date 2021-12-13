/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
  let importe = parseInt(txtIdImporte.value)
  var descuento = importe * 0.25
  alert(
    `Tu importe inicial es de ${importe}$ con el descuento del 25% queda en ${
      importe - descuento
    }`,
  )
  txtIdResultado.value = importe - descuento
}

/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
// function mostrarAumento() {
//   let importe = parseInt(txtIdImporte.value)
//   var descuento = importe * 0.25
//   if (!importe) return alert('Inserte un importe')
//   alert(
//     `Tu importe inicial es de ${importe}$ con el descuento del 25% queda en ${
//       importe - descuento
//     }`,
//   )
//   txtIdResultado.value = importe - descuento
// }

function mostrarAumento() {
  let importe = parseInt(txtIdImporte.value)
  if (!importe) return alert('Inserte un importe')
  else {
    let porcentaje = prompt('Inserte un porcentaje de descuento:')
    porcentaje = parseInt(porcentaje)
    let descuento = (importe * porcentaje) / 100

    alert(
      `Tu importe inicial es de ${importe}$ con el descuento del ${porcentaje}% queda en ${
        importe - descuento
      }`,
    )
    txtIdResultado.value = importe - descuento
  }
}

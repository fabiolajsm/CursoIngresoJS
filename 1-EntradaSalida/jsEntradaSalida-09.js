/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
// function mostrarAumento() {
//   let sueldo = parseInt(txtIdSueldo.value)
//   var aumento = sueldo * 0.1
//   alert(
//     `Tu sueldo inicial es de ${sueldo}$ con el aumento del 10% queda en ${
//       sueldo + aumento
//     }`,
//   )
//   txtIdResultado.value = sueldo + aumento
// }

function mostrarAumento() {
  var sueldo = parseInt(txtIdSueldo.value)

  if (!sueldo) return alert('Inserte un sueldo')
  else {
    var porcentaje = prompt('Inserte el porcentaje de aumento:')
    porcentaje = parseInt(porcentaje)
    var aumento = sueldo * porcentaje

    alert(
      `Tu sueldo inicial es de ${sueldo}$ con el aumento del ${porcentaje}% queda en ${
        sueldo + aumento
      }`,
    )
    txtIdResultado.value = sueldo + aumento
  }
}

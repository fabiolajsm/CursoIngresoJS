/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
  let sueldo = parseInt(txtIdSueldo.value)
  var aumento = sueldo * 0.1
  alert(
    `Tu sueldo inicial es de ${sueldo}$ con el aumento del 10% queda en ${
      sueldo + aumento
    }`,
  )
  txtIdResultado.value = sueldo + aumento
}

/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
  let num1 = parseInt(txtIdNumeroUno.value) // parseFloat para decimales
  let num2 = parseInt(txtIdNumeroDos.value)
  alert(`${num1 + num2}`)
}

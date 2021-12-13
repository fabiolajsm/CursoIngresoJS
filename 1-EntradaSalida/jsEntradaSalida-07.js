/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

// Ver como poner el num1 y 2 como valor global, pq no agarra...
function sumar() {
  num1 = parseInt(txtIdNumeroUno.value)
  num2 = parseInt(txtIdNumeroDos.value)
  alert(`${num1 + num2}`)
}

function restar() {
  num1 = parseInt(txtIdNumeroUno.value)
  num2 = parseInt(txtIdNumeroDos.value)
  alert(`${num1 - num2}`)
}

function multiplicar() {
  num1 = parseInt(txtIdNumeroUno.value)
  num2 = parseInt(txtIdNumeroDos.value)
  alert(`${num1 * num2}`)
}

function dividir() {
  num1 = parseInt(txtIdNumeroUno.value)
  num2 = parseInt(txtIdNumeroDos.value)
  alert(`${num1 / num2}`)
}

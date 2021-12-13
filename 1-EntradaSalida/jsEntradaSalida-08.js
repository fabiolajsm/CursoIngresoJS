/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto() {
  let num1 = txtIdNumeroDividendo.value
  let num2 = txtIdNumeroDivisor.value
  alert(`El resto es ${num1 % num2}`)
}

/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {
  var sexoIngresado
  sexoIngresado = prompt('ingrese f ó m .')
  if (sexoIngresado === 'f' || sexoIngresado === 'm') {
    txtIdSexo.value = sexoIngresado
  } // qué pide pra usar el while? si le pongo while sea f o m va a entrar en un loop
} //FIN DE LA FUNCIÓN

/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
  let largo = txtIdLargo.value;
  let ancho = txtIdAncho.value;
  let terreno = largo * ancho;
  alert(terreno * 3);
}
function Circulo() {
  const radio = txtIdRadio.value * 2;
  alert(radio * 3);
}
function Materiales() {
  const largo = txtIdLargo.value;
  const ancho = txtIdAncho.value;
  
}

/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() {
  let temperatura = txtIdTemperatura.value;
  let centigrados = (temperatura - 32) * 5;
  centigrados = centigrados / 9;
  return alert(`${temperatura} Fahrenheit son ${centigrados} centígrados.`);
}

function CentigradosFahrenheit() {
  let temperatura = txtIdTemperatura.value;
  let fahrenheit = (temperatura - 32) * 5;
  fahrenheit = fahrenheit / 9;
  return alert(`${temperatura} centígrados son ${fahrenheit} Fahrenheit.`);
}

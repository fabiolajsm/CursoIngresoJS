function mostrar() {
  let lado1;
  let lado2;
  let lado3;
  let perimetro;

  lado1 = prompt("Ingrese los lados del triángulo");
  while (lado1 < 1) {
    lado1 = prompt(
      "Error. Ingrese un valor númerico válido para el lado del triángulo:"
    );
  }
  lado1 = parseInt(lado1);
  lado2 = prompt("Ingrese los lados del triángulo");
  while (lado2 < 1) {
    lado2 = prompt(
      "Error. Ingrese un valor númerico válido para el lado del triángulo:"
    );
  }
  lado2 = parseInt(lado2);

  lado3 = prompt("Ingrese los lados del triángulo");
  while (lado3 < 1) {
    lado3 = prompt(
      "Error. Ingrese un valor númerico válido para el lado del triángulo:"
    );
  }
  lado3 = parseInt(lado3);

  perimetro = lado1 + lado2 + lado3;
  alert("El perímetro del triángulo es: " + perimetro);
}

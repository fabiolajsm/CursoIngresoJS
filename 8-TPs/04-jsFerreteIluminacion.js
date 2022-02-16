/*4.	Fabiola Suárez - TP #4

Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
/* Fabiola Suárez - TP #4 */
// Versión con switch =>
function CalcularPrecio() {
  let precioLampara;
  let cantidadDeLamparas;
  let selectMarca;
  let precioFinal;
  let porcentaje;
  let precioConDescuento;
  let impuesto;

  precioLampara = 35;
  cantidadDeLamparas = parseInt(txtIdCantidad.value);
  selectMarca = Marca.value;
  precioFinal = precioLampara * cantidadDeLamparas;

  // A:
  if (cantidadDeLamparas >= 6) {
    porcentaje = 50;
  }
  // B:
  if (cantidadDeLamparas === 5) {
    switch (selectMarca) {
      case "ArgentinaLuz":
        porcentaje = 40;
        break;
      default:
        porcentaje = 30;
        break;
    }
  }
  // C:
  if (cantidadDeLamparas === 4) {
    switch (selectMarca) {
      case "ArgentinaLuz":
      case "FelipeLamparas":
        porcentaje = 25;
        break;
      default:
        porcentaje = 20;
        break;
    }
  }
  // D :
  if (cantidadDeLamparas === 3) {
    switch (selectMarca) {
      case "ArgentinaLuz":
        porcentaje = 15;
        break;
      case "FelipeLamparas":
        porcentaje = 10;
        break;
      default:
        porcentaje = 5;
        break;
    }
  }

  // Calculamos el precio:
  precioConDescuento = precioFinal - (precioFinal * porcentaje) / 100;

  // E :
  if (precioConDescuento >= 120) {
    impuesto = (precioFinal * 10) / 100;
    precioFinal = precioFinal + impuesto;
    alert("IIBB Usted pago " + impuesto);
  }

  // Aquí muestro el precio con descuento en el input que tiene propiedad "readonly"
  if (precioConDescuento === 0) {
    txtIdprecioDescuento.value = "No se aplica ningún descuento";
  } else {
    txtIdprecioDescuento.value = precioConDescuento;
  }
}

// Clase =>
// function CalcularPrecio() {
//   let cantidadDeLamparas;
//   let marca;
//   let descuentoCalculado;
//   let PrecioLampara;
//   let preciocondescuento;
//   let PrecioBruto;
//   let porcentaje;
//   let impuesto;
//   let precioFinal;

//   cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
//   cantidadDeLamparas = parseInt(cantidadDeLamparas);

//   marca = document.getElementById("Marca").value;

//   PrecioLampara = 35;

//   PrecioBruto = cantidadDeLamparas * PrecioLampara;

//   if (cantidadDeLamparas > 5) {
//     //A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%.
//     porcentaje = 50;
//   } else {
//     if (cantidadDeLamparas == 5) {
//       //B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
//       if (marca == "ArgentinaLuz") {
//         porcentaje = 40;
//       } else {
//         porcentaje = 30;
//       }
//     } else {
//       if (cantidadDeLamparas == 4) {
//         //C.Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
//         if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
//           porcentaje = 25;
//         } else {
//           porcentaje = 20;
//         }
//       } else {
//         if (cantidadDeLamparas == 3) {
//           //D.Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
//           if (marca == "ArgentinaLuz") {
//             porcentaje = 15;
//           } else {
//             if (marca == "FelipeLamparas") {
//               porcentaje = 10;
//             } else {
//               porcentaje = 5;
//             }
//           }
//         } else {
//           porcentaje = 0;
//         }
//       }
//     }
//   }
// }

// Versión1 =>
// function CalcularPrecio() {   => el porcentaje cambiarlo a una variable, en el A poner un if else? cambiar la arquitectura
//   let precioLampara = 35;
//   let cantidadDeLamparas = parseInt(txtIdCantidad.value);
//   let precio = precioLampara * cantidadDeLamparas;
//   let precioConDescuento = 0;
//   let selectMarca = Marca.value;

//   // A:
//   if (cantidadDeLamparas >= 6) {
//     precioConDescuento = precio - precio * 0.5;
//   }
//   // B:
//   if (cantidadDeLamparas === 5) {
//     if (selectMarca === "ArgentinaLuz") {
//       precioConDescuento = precio - precio * 0.4;
//     } else {
//       precioConDescuento = precio - precio * 0.3;
//     }
//   }
//   // C:
//   if (cantidadDeLamparas === 4) {
//     if (selectMarca === "ArgentinaLuz" || selectMarca === "FelipeLamparas") {
//       precioConDescuento = precio - precio * 0.25;
//     } else {
//       precioConDescuento = precio - precio * 0.2;
//     }
//   }
//   // D:
//   if (cantidadDeLamparas === 3) {
//     if (selectMarca === "ArgentinaLuz") {
//       precioConDescuento = precio - precio * 0.15;
//     } else if (selectMarca === "FelipeLamparas") {
//       precioConDescuento = precio - precio * 0.1;
//     } else {
//       precioConDescuento = precio - precio * 0.05;
//     }
//   }
//   // E:
//   if (precioConDescuento >= 120) {
//     precio = precio + precio * 0.1;
//     alert("IIBB Usted pago " + precio * 0.1);
//   }
//   // Aquí muestro el precio con descuento en el input con propiedad readonly
//   if (precioConDescuento === 0) {
//     txtIdprecioDescuento.value = "No se aplica ningún descuento";
//   } else {
//     txtIdprecioDescuento.value = precioConDescuento;
//   }
// }

// A: https://www.onlinegdb.com/SptKdByDcB
// => https://www.onlinegdb.com/tVQKYqT3r
// https://www.onlinegdb.com/1zT2FSwil

var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");



function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);;
  var l = 0;
  var xm, ym;
  var colorsito = "#FAA";
  var espacio = ancho / lineas;
  console.log(espacio);

  for(l = 0; l < lineas; l++)
  {
    ym = espacio * l;
    xm = espacio * (l+1);
    dibujarLinea(colorsito, 0, ym ,xm ,300);
    dibujarLinea(colorsito, xm, 0, 300, ym);
    dibujarLinea(colorsito, 0, 300-xm, xm, 0);
    dibujarLinea(colorsito, ym, 300, 300, 300-ym);
  }

  dibujarLinea(colorsito, 1, 1, 1, 299);
  dibujarLinea(colorsito, 1, 299, 299, 299);
  dibujarLinea(colorsito, 1, 1, 299, 1);
  dibujarLinea(colorsito, 299, 1, 299, 299);

}

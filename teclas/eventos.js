var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);
document.addEventListener("mouseup", dibujarMouseUp);
document.addEventListener("mousedown", dibujarMouseDown);

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;
var xMouse = 0;
var yMouse = 0;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarMouseUp(evento)
{
  var colorcito = "green";
  x = evento.layerX;
  y = evento.layerY;
  dibujarLinea(colorcito, x, y, xMouse, yMouse, papel);
  console.log(evento);

}
function dibujarMouseDown(evento)
{
  xMouse = evento.layerX;
  yMouse = evento.layerY;

}





function dibujarTeclado(evento)
{
  var colorcito = "green";
  var movimiento = 1;
  switch (evento.keyCode) {
    case teclas.UP:
      dibujarLinea(colorcito, x, y,x, y - movimiento, papel );
      y = y - movimiento;
      break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y,x, y + movimiento, papel );
      y = y + movimiento;
      break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y,x - movimiento, y, papel);
      x = x - movimiento;
      break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y,x + movimiento, y, papel);
      x = x + movimiento;
      break;
    default:
    break;
  }
}

var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var vaca =
{
  url: "vaca.png",
  cargaOk: false,
  xVaca: 0,
  yVaca: 0
};

var fondo =
{
  url: "tile.png",
  cargaOk: false
};
var cerdo =
{
  url: "cerdo.png",
  cargaOk: false,
  xCerdo: 0,
  yCerdo: 0
};
var pollo =
{
  url: "pollo.png",
  cargaOk: false,
  xPollo: 0,
  yPollo: 0
};


fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

document.addEventListener("keydown", moverCerdo);
var cantidad = aleatorio(5, 25);

function cargarFondo()
{
  fondo.cargaOk = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOk = true;
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargaOk = true;
  dibujar();
}

function cargarPollos()
{
  pollo.cargaOk = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOk)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOk)
  {
    for (var v = 0; v<cantidad; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      x = x*60;
      y = y*60;
      papel.drawImage(vaca.imagen, x, y);
    }
  }

  if(pollo.cargaOk)
  {
    for (var v = 0; v<cantidad; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      x = x*60;
      y = y*60;
      papel.drawImage(pollo.imagen, x, y);
    }
  }
  if(cerdo.cargaOk)
  {
    papel.drawImage(cerdo.imagen, cerdo.xCerdo, cerdo.yCerdo);
  }
}

function moverCerdo(evento)
{
    var movimiento = 10;
    switch (evento.keyCode) {
      case teclas.UP:
        cerdo.yCerdo = cerdo.yCerdo - movimiento;
        dibujar();
        break;
      case teclas.DOWN:
        cerdo.yCerdo = cerdo.yCerdo + movimiento;
        dibujar();
        break;
      case teclas.LEFT:
        cerdo.xCerdo = cerdo.xCerdo - movimiento;
        dibujar();
        break;
      case teclas.RIGHT:
        cerdo.xCerdo = cerdo.xCerdo + movimiento;
        dibujar();
        break;
      default:
        break;
      }
}
function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random()*(max - min +1)) + min;
  return resultado;
}

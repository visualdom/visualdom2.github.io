class Pakiman
{
  constructor(nombre, vida, ataque)
  {
    this.imagen = new Image();
    this.vida = vida;
    this.ataque = ataque;
    this.nombre = nombre;

    this.imagen.src = imagenes[this.nombre];
  }
  hablar(){
    alert(this.nombre);
  }
  mostrar()
  {
    document.body.appendChild(this.imagen);
    document.write("<br /><strong> " + this.nombre + "</strong><br /> ");
    document.write("Vida " + this.vida + "<br />");
    document.write("Ataque " + this.ataque + "<br /><hr />");
  }
}


/*Recogemos el boton que hará que se muestre nuestro menú hamburguesa*/
let boton = document.getElementById("botonmenu");

/*Creamos el evento que ejecurara nuestro menú */
boton.addEventListener("click", mostrarMenu);

/*Estructura que se creara en el documento con createElement*/
/* <div id="opcs-menu" class="disable-menu">
          <ul>
              <li><a href="index.html">INICIO</a></li>
              <li><a href="mis-proyectos.html">MIS PROYECTOS</a></li>
              <li><a href="testimonios.html">TESTIMONIOS</a></li>
              <li><a href="cv.html">CV</a></li>
              <li><a href="sobremi.html">SOBRE MÍ</a></li>
              <li><a href="contacto.html">CONTACTO</a></li>
          </ul>
      </div>
 */

let div = document.createElement("div");
div.setAttribute("id", "opcs-menu");
div.setAttribute("class", "menu-nav");

let  ul = document.createElement("ul");

let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");
let li5 = document.createElement("li");
let li6 = document.createElement("li");

let a1 = document.createElement("a");
a1.setAttribute("href", "index.html");
a1.textContent= "INICIO";

let a2 = document.createElement("a");
a2.setAttribute("href", "mis-proyectos.html");
a2.textContent= "MIS PROYECTOS";

let a3 = document.createElement("a");
a3.setAttribute("href", "testimonios.html");
a3.textContent= "TESTIMONIOS";


let a4 = document.createElement("a");
a4.setAttribute("href", "cv.html");
a4.textContent= "CV";

let a5 = document.createElement("a");
a5.setAttribute("href", "sobremi.html");
a5.textContent= "SOBRE MI";

let a6 = document.createElement("a");
a6.setAttribute("href", "contacto.html");
a6.textContent= "CONTACTO";

/*Crea la estructura de nuestro menú */

function crearmenudesplegable() {

    li1.appendChild(a1);
    li2.appendChild(a2);
    li3.appendChild(a3);
    li4.appendChild(a4);
    li5.appendChild(a5);
    li6.appendChild(a6);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);
    ul.appendChild(li6);
    div.appendChild(ul);
    let desplegable= document.getElementById("desplegable");
    desplegable.appendChild(div);
}

/**Comprueba si la estructura está mostrandose  y si es así lo borra
   o al contrario que la crearia
*/
function mostrarMenu() {
    if(!div.isConnected){
        crearmenudesplegable();
    }
    else{
        div.remove();
    }
}

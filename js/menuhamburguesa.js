console.log("Conectado a js");
let boton = document.getElementById("botonmenu");

boton.addEventListener("click", mostrarmenu) //Creamos el evento.

let a = true;
function mostrarmenu(){

    borrarmenudesplegable(); 
    let menu = document.getElementById("opcs-menu");

    //menu.classList.toggle("disable-menu");
    //menu.classList.toggle("enable-menu"); 
    /*
    if (menu.classList.contains("disable-menu")){//Comprueba si menu contiene la clase "disable-menu"
        menu.classList.remove("disable-menu"); //Quita la clase "disable-menu" del elemento menu
        menu.classList.add("enabled-menu");    //Añade la clase "disable-menu" del elemento menu
    }else {
        menu.classList.remove("enabled-menu");
        menu.classList.add("disable-menu");
    }*/
}

/* <div id="opcs-menu" class="disable-menu">
          <ul>
              <li><a href="index.html" id="subrayadomenu">INICIO</a></li>
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

function borrarmenudesplegable() {
    if(!div.isConnected){
        crearmenudesplegable(); 
        
    }
    else{
        div.remove();
        
    }

}

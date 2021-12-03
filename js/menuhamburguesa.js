console.log("Conectado a js");
let boton = document.getElementById("botonmenu");

boton.addEventListener("click", mostrarmenu) //Creamos el evento.

function mostrarmenu(){
    let menu = document.getElementById("opcs-menu");
    if (menu.classList.contains("disable-menu")){//Comprueba si menu contiene la clase "disable-menu"
        menu.classList.remove("disable-menu"); //Quita la clase "disable-menu" del elemento menu
        menu.classList.add("enabled-menu");    //Añade la clase "disable-menu" del elemento menu
    }else {
        menu.classList.remove("enabled-menu");
        menu.classList.add("disable-menu");
    }
}

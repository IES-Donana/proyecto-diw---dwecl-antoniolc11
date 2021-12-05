/*
Te explico el funcionamiento de mi codigo:

    Se valida cada entrada, hasta que la entrada seleccionada no esté correctamente,
    no dejará pasar a rellenar la siguiente entrada.

    Cuando todas las entradas estén correctamente, habilitará el textarea.

    Y cuando pulsemos el boton de enviar validará el textarea,
    de esta manera nos aseguramos la validacion de todo el formulario,
    la función validar formulario siempre devolverá true y realmente no sirve de
    mucho en mi codigo, pero te la dejo incluida.

    Los manejadores de eventos utilizados son: keypress, blurr y click
*/

let entradas = document.getElementsByTagName('input');
let enviar = document.getElementById('enviar');
let formulario = document.getElementById("formcontacto");
let textarea = document.getElementById("mensaje");
let nombre = document.getElementById("nombre");
let apellidos = document.getElementById("apellidos");
let telefono = document.getElementById("telefono");
let email = document.getElementById('email');
textarea.disabled = true;
let todosvalidos = 0;
nombre.addEventListener("blur", validarInput);
apellidos.addEventListener("blur", validarInput);
telefono.addEventListener("blur", validarInput);
email.addEventListener("blur", validarInput);
email.addEventListener("keypress", mayusAlert);
enviar.addEventListener("click", validarformulario);
enviar.addEventListener("click", validartextarea);

/*
    Valida los campos de tipo input y una vez se vaya a perder el foco,
    muestra el mensaje de error si es que lo huviese (El foco no se pierde hasta
    que el campo tenga un valor correcto.)
*/
function validarInput(e) {

    quitarestiloError(this);

    if (this.checkValidity()) {
        todosvalidos ++;
        if(entradas.length === todosvalidos) {
            habilitartexarea();
            todosvalidos = 0;
        }
        return true;
        } else {
            aplicarEstiloError(this);
            if (this.validity.valueMissing) {
                this.setCustomValidity(`El campo ${this.name} no puede ser vacio.`);
                this.reportValidity();
            } else {
                this.setCustomValidity("Utiliza un formato correcto.");
                this.reportValidity();
            }
            e.preventDefault();
            return false;
        }
}

/*
    Valida todo el formulario cuando pulsamos el boton enviar, para
    asegurarnos de que el formulario está rellenado correctamente
*/
function validarformulario() {
    for (let i = 0; i < entradas.length; i++) {
        if (!entradas[i].checkValidity()) {
            if (entradas[i].validity.valueMissing) {
                entradas[i].setCustomValidity(`El campo ${entradas[i].name} es obligatorio.`);
                entradas[i].reportValidity();

            } else {
                entradas[i].setCustomValidity("Utiliza un formato que coincida.");
                entradas[i].reportValidity();
            }
            return false;
        }
    }
    return true
}

//Asigna el elemento la clase error y se pone en rojo el backgraund.
function aplicarEstiloError(elemento){
    elemento.className = "error";
}

//Quita la clase del elemento que previamente ha dado error y borra el mensaje dado al setCustomValidity
function quitarestiloError(elemento){
    elemento.className = "";
    elemento.setCustomValidity("");
}

/*Activa un alert cuando intentamos escribir en mayusculas sobre el campo email,
  permitiendo los digitos y los guiones medios y bajos*/
const digitos = ["Digit0", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Slash"]
function mayusAlert(e) {
    if (e.getModifierState("CapsLock") || e.shiftKey) {
        if (!digitos.includes(e.code)){
            alert("No esta permitido el uso de mayusculas en el correo");
            e.preventDefault();
        }
    }
}

/* Habilitar el textarea cuando todos los campos anteriores no estén validados correctamente */
function habilitartexarea(e) {
      textarea.disabled = false;
}

/* validar texarea */
function validartextarea(e) {
    if (!textarea.checkValidity()) {
      if (textarea.validity.valueMissing) {
        textarea.setCustomValidity("Por favor, escribe tu mensaje es necesario para poder ayudarte.");
      }else{
        textarea.setCustomValidity("");
      }
      return true;
    }
}

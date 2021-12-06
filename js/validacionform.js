/*
Aquí explico el funcionamiento de mi codigo:

    Se valida cada entrada en el momento en el que estamos modificando el formulario,
    si no está bien la entrada no podemos abandonarla hasta que la escribamos correctamente,
    Cuando todas las entradas estén correctamente validadas sé habilitará el textarea.

    El textarea debe de cumplir con un min de 100 caracteres y un max de 300,
    hasta que no sea correcto no dejara salir del texarea.

    Cuando pulsemos el boton de enviar validará el textarea,
    de esta manera nos aseguramos la validacion de todo el formulario completo,

    Los manejadores de eventos utilizados son: keypress, blur y click.
*/

/*Recogemos los datos necesarios para nuestra validación*/
let entradas = document.getElementsByTagName('input');
let enviar = document.getElementById('enviar');
let textarea = document.getElementById("mensaje");
let nombre = document.getElementById("nombre");
let apellidos = document.getElementById("apellidos");
let telefono = document.getElementById("telefono");
let email = document.getElementById('email');

/*Deshabilitamos nuestro textarea y creamos variable con la que comprobaremos que todos
los campos sean validos antes de habilitar el textarea en la funcion validarInput*/
textarea.disabled = true;
let todosvalidos = 0;

/*Validamos mientras escribimos en el formulario*/
nombre.addEventListener("blur", validarInput);
apellidos.addEventListener("blur", validarInput);
telefono.addEventListener("blur", validarInput);
email.addEventListener("blur", validarInput);

/*Validamos textarea cuando vayamos a perder el foco, si no está
  validado no nos permite perder el foco.
*/
textarea.addEventListener("blur", validartextarea);

/*Cuando intentamos escribir en el campo email en mayusculas nos salta un alert*/
email.addEventListener("keypress", mayusAlert);

/*Comprobación final de todo el formulario a la hora de pulsar el boton enviar.*/
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
                this.setCustomValidity("Utiliza un formato valido.");
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
                entradas[i].setCustomValidity("Utiliza un formato valido.");
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

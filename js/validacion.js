let formulario1 = document.forms[0];

/* evento al hace algun cambio en el formulario y llama a la funcion
habilitar, donde si se cumple las condiciones se habilita el texarea  */
formulario1.addEventListener("change", habilitar);

/* evento al pulsar el boton del formulario */
document.getElementById("enviar").addEventListener("click", validar);

/* eventos del formulario para el input email */
document.getElementById("email").addEventListener("keypress", emailMay);
document.getElementById("email").addEventListener("blur", emailminusculas);
document.getElementById("email").addEventListener("blur", validaremail);

/* eventos para validar el campo nombre */
document.getElementById("nombre").addEventListener("keydown", validarnombre);
document.getElementById("nombre").addEventListener("blur", validarnombre);

/* eventos para validar el apellido  */
document
  .getElementById("apellidos")
  .addEventListener("keydown", validarapellido);
document.getElementById("apellidos").addEventListener("blur", validarapellido);

/* eventos para validar el apellido */
document
  .getElementById("telefono")
  .addEventListener("keypress", validartelefono);
document.getElementById("telefono").addEventListener("blur", validartelefono);

/* validar texarea  */
document.getElementById("mensaje").addEventListener("keydown", validartextarea);
document.getElementById("mensaje").addEventListener("blur", validartextarea);

/* validar formulario y mandar o parar en caso de faltar algun requisito */
function validar(evento) {
  if (
    validarnombre() &&
    validarapellido() &&
    validartelefono() &&
    validaremail() &&
    validartextarea() &&
    confirm("Deseas mandar los datos del formulario")
  ) {
    return true;
  } else {
    evento.preventDefault();
    console.log("el formulario no se ha mandado");
    alert("Completa los campos correctamente");
    
    return false;
  }
}

/* Habilitar el textarea cuando todos los campos anteriores no estén validados correctamente */
function habilitar(e) {
  if (validarnombre() && validarapellido() && validaremail()) {
    console.log("mensaje");
    document.getElementById("mensaje").disabled = false;
  } else {
    document.getElementById("mensaje").disabled = true;
  }
}

/* validar nombre */

function validarnombre(e) {
  let elemento = document.getElementById("nombre");

  if (!elemento.checkValidity()) {
    error(elemento, "errornombre");
    evento.focus();
    return false;
  } else {
    borrarerror(elemento, "errornombre");
    
    return true;
  }
}

/* validar apellido */

function validarapellido(e) {
  let elemento = document.getElementById("apellidos");

  if (!elemento.checkValidity()) {
    error(elemento, "errorapellido");
    evento.focus();
    return false;
  } else {
    borrarerror(elemento, "errorapellido");
    return true;
  }
}

/* validar telefono  */

function validartelefono(e) {
  let elemento = document.getElementById("telefono");
  console.log(!elemento.checkValidity());
  if (!elemento.checkValidity()) {
    error(elemento, "errortlf");
    evento.focus();
    return false;
  } else {
    borrarerror(elemento, "errortlf");

    return true;
  }
}

/* pasar a minusculas email en el caso que este activado bloq mayus */
function emailminusculas() {
  let str = document.getElementById("email").value;
  document.getElementById("email").value = str.toLowerCase();
}

/* validar email */
function validaremail(e) {
  let elemento = document.getElementById("email");
  console.log(!elemento.checkValidity());
  if (!elemento.checkValidity()) {
    error(elemento, "erroremail");
    evento.focus();
    return false;
  } else {
    borrarerror(elemento, "erroremail");
    return true;
  }
}

/* avisar al usuario con un alert cuando pulse shift + una tecla del teclado */
function emailMay(e) {
  emailminusculas();

  if (e.shiftKey) {
    document.getElementById("erroremail").innerHTML =
      "No se permiten mayusculas";
    alert("No esta permitido mayusculas en le correo");
  } else {
    document.getElementById("erroremail").innerHTML = "";
  }
}

/* validar texarea */
function validartextarea(e) {
  let elemento = document.getElementById("area");

  if (!elemento.checkValidity()) {
    document.getElementById("mensajetexarea").style.color = "red";
    if (elemento.validity.valueMissing) {
      document.getElementById("mensajetexarea").innerHTML =
        "Rellene el texarea por favor, debe de tener min 10 caracteres ";
        evento.focus();
    } else {
      error(elemento, "mensajetexarea");
    }

    return false;
  } else {
    borrarerror(elemento, "mensajetexarea");

    return true;
  }
}

/* mensaje error */

function error(elemento, id) {
  document.getElementById(id).innerHTML = elemento.validationMessage;
}

/* borrar mensaje error */
function borrarerror(elemento, mensaje) {
  document.getElementById(mensaje).innerHTML = "";
}

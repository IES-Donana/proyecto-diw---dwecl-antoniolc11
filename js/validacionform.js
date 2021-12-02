let formulario1 = document.forms[0];

const patrones = {
  nombre: 'Introduzca al menos un nombre y un apellido. Max: 2 nombres',
  apellidos: 'Introduzca al menos un nombre y un apellido. 2 apellidos',
  email: 'Formado válido: xxx@yyy.zzz',
};

let inputs = document.getElementsByTagName('input');
let enviardatos = document.getElementById('enviar');


function validarInput(e) {

  borrarError(this);
         
  if (this.checkValidity()) {
      error.innerHTML = '';
      return true;

  } else {
      siError(this);

      if (this.validity.valueMissing) {
          this.setCustomValidity(`El campo ${this.name} es obligatorioo.`);
          error.innerHTML = this.validationMessage;
          this.reportValidity();
          
      } else {
          this.setCustomValidity(`Utiliza un formato que coincida. ${patrones[this.id]}`);
          error.innerHTML = this.validationMessage;
          this.reportValidity();
          //this.value = ''; //Para usar con blur
      }
      e.preventDefault();
      return false;
  } 
}


for (let i = 0; i <inputs.length; i++) {
inputs[i].addEventListener('keyup', validarInput);
} 

function validacionFormulario() {
  for (let i = 0; i <inputs.length; i++) {
     
      if (inputs[i].checkValidity()) {
          error.innerHTML = '';
      } else {
          siError(inputs[i]);

          if (inputs[i].validity.valueMissing) {
              inputs[i].setCustomValidity(`El campo ${inputs[i].name} es obligatorio.`);
              error.innerHTML = inputs[i].validationMessage;
              inputs[i].reportValidity();
              
          } else {
              inputs[i].setCustomValidity(`Utiliza un formato que coincida. ${patrones[inputs[i].id]}`);
              error.innerHTML = inputs[i].validationMessage;
              inputs[i].reportValidity();
          //    inputs[i].value = '';
          // inputs[i].focus();
          }
          return false;
          
      } 
      
  }
  return true;

}

enviardatos.addEventListener('click', (e) => {
function siError(elemento){
elemento.className = "error";
// elemento.focus();
}


function borrarError(elemento){
elemento.className = "";
elemento.setCustomValidity("");  //Si no ponemos el mensaje en blanco, siempre determinará validación incorrecta          

}})
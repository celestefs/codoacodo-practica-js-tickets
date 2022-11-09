const TICKET = 200;
const ESTUDIANTE = 0.8;
const TRAINEE = 0.5;
const JUNIOR = 0.15;
const nombre = document.querySelector("#nombre");
const apellido = document.getElementById("apellido");
const email = document.querySelector("#mail");
const cantidad = document.querySelector("#cantidadTickets");
const categoria = document.querySelector("#categoriaSelect");
const btnResumen = document.querySelector('#btnResumen');
const btnClear = document.querySelector('#btnBorrar');
let totalPago = document.querySelector('#totalPago');

btnClear.addEventListener('click', limpiarRegistros);

function limpiarRegistros() {
    nombre.value = "";
    apellido.value = "";
    email.value = "";
    cantidad.value = "";
    categoria.value = "";
    totalPago.textContent = "";
}

categoria.addEventListener('click', calcularMonto)

function calcularMonto() {
  let x = document.forms["myForm"]["cantidadTickets"].value;
    if (x == "" || x < 1 || x > 1000) {
      alert("El número ingresado de tickets no es válido o se ha alcanzado el límite de compra");
      return false;
    } else {
        totalPago.textContent = 
        (TICKET - TICKET * calcularDescuento()) * cantidad.value;
    }
  }

function calcularDescuento(){
    switch (categoria.value) {
    case "0":
    return 0;
    case "1":
    return ESTUDIANTE;
    case "2":
        return TRAINEE;
    case "3":
        return JUNIOR;
    default:
        return false;
  }
}

function validarNombre(){
  let x = document.forms["myForm"]["nombre"].value;
  if ((!(/^[a-zA-ZÀ-ÿ\u00f1\u00d1\u00E0-\u00FC]+$/.test(x))) || "") {
    alert("Por favor, rellene el campo nombre solo con caracteres alfabéticos");
    return false;
  }
}

function validarApellido(){
    let x = document.forms["myForm"]["apellido"].value;
    if ((!(/^[a-zA-ZÀ-ÿ\u00f1\u00d1\u00E0-\u00FC]+$/.test(x))) || "") {
      alert("Rellene el campo de apellido solo con caracteres alfabéticos");
      return false;
    }
}

function camposAlfa(){
    let a = validarNombre();
    let b = validarApellido();
    return a && b;
}

btnResumen.addEventListener('click', validarEmail);

function validarEmail() {
    let x = document.forms["myForm"]["mail"].value;
    if (x == "") {
      alert("Rellene el campo de email");
      return false;
    }
  }

const emailValido = (mail) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
};

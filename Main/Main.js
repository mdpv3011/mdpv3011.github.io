const nombre = document.getElementById("nombre");
const password = document.getElementById("password");
const form = document.getElementById("form");
const email = document.getElementById("email");
const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let mensajes = [];
  if (nombre.value === "" || nombre.value == null) {
    mensajes.push("Por favor ingrese un nombre");
  }

  if (password.value.length <= 6) {
    mensajes.push("La contraseña debe tener al menos 7 caracteres");
  }

  if (password.value.length > 10) {
    mensajes.push("La contraseña no debe tener más de 10 caracteres.");
  }

  if (mensajes.length > 0) {
    e.preventDefault();
    error.innerText = mensajes.join(", ");
  }
});

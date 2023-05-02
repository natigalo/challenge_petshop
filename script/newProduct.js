import createform from "../modules/readform.js";

// Seleccionar el formulario
const form = document.querySelector("form");

// Agregar un eventListener para crear un nuevo producto
form.addEventListener("submit", createform);

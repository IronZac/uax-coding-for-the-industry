// Interacción 1: Personalización con el nombre
document.addEventListener('DOMContentLoaded', function() {
  var btnPersonalizar = document.getElementById('btn-personalizar');
  var mensajePersonalizado = document.getElementById('mensaje-personalizado');

  btnPersonalizar.addEventListener('click', function() {
    var nombre = prompt('Ingresa tu nombre:');
    mensajePersonalizado.textContent = 'Hola, ' + nombre + '!';
  });
});

// Interacción 2: Mostrar u ocultar instrucciones
document.addEventListener('DOMContentLoaded', function() {
  var btnOcultar = document.getElementById('btn-ocultar');
  var recetaInstrucciones = document.getElementById('preparacion');

  btnOcultar.addEventListener('click', function() {
    if (recetaInstrucciones.style.display === 'none') {
      recetaInstrucciones.style.display = 'block';
      btnOcultar.textContent = 'Ocult

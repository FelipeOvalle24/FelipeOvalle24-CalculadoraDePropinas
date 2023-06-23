const montoCuentaInput = document.getElementById('total-cuenta');
const boton5 = document.getElementById('boton5');
const boton10 = document.getElementById('boton10');
const boton15 = document.getElementById('boton15');
const boton25 = document.getElementById('boton25');
const boton50 = document.getElementById('boton50');
const boton75 = document.getElementById('boton75');
const propinaValor = document.getElementById('propina-valor');
const totalValor = document.getElementById('total-valor');
const botonReset = document.getElementById("boton-reset")


// Agregar eventos de clic a los botones de porcentaje de propina
boton5.addEventListener('click', calcularPropina);
boton10.addEventListener('click', calcularPropina);
boton15.addEventListener('click', calcularPropina);
boton25.addEventListener('click', calcularPropina);
boton50.addEventListener('click', calcularPropina);
boton75.addEventListener('click', calcularPropina);
botonReset.addEventListener("click", reiniciar);

// Función para calcular la propina y el total
function calcularPropina(event) {
    const porcentaje = parseInt(event.target.textContent);
    const montoCuenta = parseFloat(montoCuentaInput.value);
    const propina = (montoCuenta * porcentaje) / 100;
    const total = montoCuenta + propina;
  
    // Actualizar los valores en el DOM
    propinaValor.textContent = `$${propina.toFixed(2)}`;
    totalValor.textContent = `$${total.toFixed(2)}`;
  }
  
function reiniciar(){
    location.reload()
}
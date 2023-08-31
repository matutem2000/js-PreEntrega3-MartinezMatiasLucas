import { descontarCantidadesCarrito } from './productos.js';
import {vaciarCarritoEnLocalStorage} from './vaciar.js';

  // Botón para comprar
  const botonComprar = document.querySelector('#botonSelectProduct');
  botonComprar.addEventListener('click', function(event) {
    // Vacía el carrito en localstorage
    vaciarCarritoEnLocalStorage();
  
    // Descuenta las cantidades de cada elemento del array de objetos productosSupermercado
    descontarCantidadesCarrito();
  });
// Productos
import { productosSupermercado } from './productos.js';
//import { modificarProducto } from './modificar.js';


  const inputBusqueda = document.getElementById('busqueda');
  const tablaProductos = document.getElementById('tablaProductos');
  const botonOrdenarPorPrecioDs = document.getElementById('ordenarPorPrecioDs');
  const botonOrdenarPorPrecioAs = document.getElementById('ordenarPorPrecioAs');

  function renderizarProductos(productos) {
    tablaProductos.innerHTML = '';
    productos.forEach(({idProducto, nombre, categoria, precio, cantidadDisponible, marca}) => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${idProducto}</td>
        <td>${nombre}</td>
        <td>${categoria}</td>
        <td>${precio}</td>
        <td>${cantidadDisponible}</td>
        <td>${marca}</td>
        <td><button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modificarProducto-${idProducto}">Modificar</button></td>
        <!-- Modal -->
          <div class="modal fade" id="modificarProducto-${idProducto}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Modificar ${nombre}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form>
                <div class="modal-body">
                  <p>Nombre producto : <input type="text" id="nuevoNombre" name="nombreProducto" value="${nombre}"></p>
                  <p>Categoria : <input type="text" id="nuevaCategoria" name="categoriaProducto" value="${categoria}"></p>
                  <p>Precio : <input type="text" id="nuevoPrecio" name="precioProducto" value="${precio}"></p>
                  <p>Cantidad disponible : <input type="text" id="nuevaCantidad" name="cantidadDisponible" value="${cantidadDisponible}"></p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  <button type="button" class="btn btn-primary" id="botonModificar" data-idproducto="${idProducto}"  data-nombre="${nombre}" data-categoria="${categoria}" data-precio="${precio}" data-cantidad="${cantidadDisponible}" Guardar</button>
                </div>
                </form>
              </div>
            </div>
          </div>
      `;
      tablaProductos.appendChild(fila);
    });
  }
  //Filtrar productos
  function filtrarProductos() {
    const terminoBusqueda = inputBusqueda.value.toLowerCase();
    const productosFiltrados = productosSupermercado.filter(producto =>
      producto.nombre.toLowerCase().includes(terminoBusqueda) || producto.categoria.toLowerCase().includes(terminoBusqueda)
    );
    renderizarProductos(productosFiltrados);
  }
  //Ordenar productos
  function ordenarProductosPorPrecioDescendente() {
      const productosOrdenados = productosSupermercado.sort((productoA, productoB) => productoB.precio - productoA.precio);
    renderizarProductos(productosOrdenados);
  }
  function ordenarProductosPorPrecioAscedente() {
    const productosOrdenados = productosSupermercado.sort((productoA, productoB) => productoA.precio - productoB.precio);
  renderizarProductos(productosOrdenados);
}

//modificar valor array de productos

/// Agregar controlador de evento para el botón "Guardar" en cada modal

function modificarProducto() {
  console.log('dentro de modificarProducto');
  // Obtener los valores de los campos del formulario
  const idProducto = event.target.getAttribute('data-idproducto');
  const nombreNuevo = event.target.getElementById('nuevoNombre').value;
  const categoriaNuevo = event.target.getElementById('nuevaCategoria').value;
  const precioNuevo = parseFloat(event.target.getElementById('nuevoPrecio').value);
  const cantidadNuevo = parseFloat(event.target.getElementById('nuevaCantidad').value);

  // Encontrar el producto en el array
  const producto = productosSupermercado.find(producto => producto.idProducto === parseInt(idProducto));

  // Actualizar el producto en el array
  producto.nombre = nombreNuevo;
  producto.categoria = categoriaNuevo;
  producto.precio = precioNuevo;
  producto.cantidadDisponible = cantidadNuevo;


  console.log(`producto.nombre
                producto.categoria
                producto.precio
                producto.cantidadDisponible`);
  // Mostrar los cambios en la tabla
  renderizarProductos(productosSupermercado);
}

const botonMOdificar = document.getElementById('botonModificar');

botonMOdificar.addEventListener('click' modificarProducto);
 

  
  inputBusqueda.addEventListener('input', filtrarProductos);
  botonOrdenarPorPrecioDs.addEventListener('click', ordenarProductosPorPrecioDescendente);
  botonOrdenarPorPrecioAs.addEventListener('click', ordenarProductosPorPrecioAscedente);
  
  // Iniciar la tabla con todos los productos al cargar la página
  renderizarProductos(productosSupermercado);
  


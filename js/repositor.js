// Productos
import { productosSupermercado } from './productos.js';


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
                  <p>Nombre producto : <input type="text" name="nombreProducto" value="${nombre}"></p>
                  <p>Nombre categoria : <input type="text" name="categoriaProducto" value="${categoria}"></p>
                  <p>Precio : <input type="text" name="precioProducto" value="${precio}"></p>
                  <p>Cantidad disponible : <input type="text" name="cantidadDisponible" value="${cantidadDisponible}"></p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  <button type="button" class="btn btn-primary" id="botonModificar" data-idproducto="${idProducto}"  data-nombre="${nombre}" data-categoria="${categoria}" data-precio="${precio}" data-cantidad="${cantidadDisponible}">Guardar</button>
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
 tablaProductos.addEventListener('click', function(event) {
  //console.log("esto es :", event.target);
  if (event.target.id === 'botonModificar') {
    const idProducto = event.target.getAttribute('data-idproducto');
    const nombreNuevo = event.target.getAttribute('data-nombre');
    const categoriaNuevo = event.target.getAttribute('data-categoria');
    const precioNuevo = parseFloat(event.target.getAttribute('data-precio'));
    const cantidadNuevo = parseFloat(event.target.getAttribute('data-cantidad'));

    console.log(`identificador de producto: ${idProducto}
                  nombre de producto: ${nombreNuevo}
                  categoria de producto: ${categoriaNuevo}
                  precio del producto: ${precioNuevo}
                  cantidad de productos: ${cantidadNuevo}`);

    // Encontrar el índice del producto en el array
    const index = productosSupermercado.findIndex(producto => producto.idProducto === parseInt(idProducto));
console.log(index);
    if (index !== -1) {
      // Actualizar los valores del producto en el array
     // console.log(productosSupermercado[index].nombre);
      productosSupermercado[index].nombre = nombreNuevo;
      productosSupermercado[index].categoria = categoriaNuevo;
      productosSupermercado[index].precio = precioNuevo;
      productosSupermercado[index].cantidadDisponible = cantidadNuevo;

      renderizarProductos(productosSupermercado);
    }
  }
});
 

  
  inputBusqueda.addEventListener('input', filtrarProductos);
  botonOrdenarPorPrecioDs.addEventListener('click', ordenarProductosPorPrecioDescendente);
  botonOrdenarPorPrecioAs.addEventListener('click', ordenarProductosPorPrecioAscedente);
  
  // Iniciar la tabla con todos los productos al cargar la página
  renderizarProductos(productosSupermercado);
  


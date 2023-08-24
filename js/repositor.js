// Productos
const productosSupermercado = [
    {
      idProducto: 1,
      nombre: "Manzanas",
      categoria: "Frutas",
      precio: 2.99,
      cantidadDisponible: 50,
      marca: "FruitFresh"
    },
    {
      idProducto: 2,
      nombre: "Leche",
      categoria: "Lácteos",
      precio: 1.49,
      cantidadDisponible: 30,
      marca: "DairyDelight"
    },
    {
      idProducto: 3,
      nombre: "Pan Integral",
      categoria: "Panadería",
      precio: 3.25,
      cantidadDisponible: 20,
      marca: "HealthyBread"
    },
    {
      idProducto: 4,
      nombre: "Huevos",
      categoria: "Huevos y lácteos",
      precio: 2.75,
      cantidadDisponible: 40,
      marca: "FarmFresh"
    },
    {
      idProducto: 5,
      nombre: "Arroz",
      categoria: "Cereales",
      precio: 1.99,
      cantidadDisponible: 60,
      marca: "GoldenGrains"
    },
    {
      idProducto: 6,
      nombre: "Pollo",
      categoria: "Carnes",
      precio: 5.49,
      cantidadDisponible: 15,
      marca: "MeatMaster"
    },
    {
      idProducto: 7,
      nombre: "Zanahorias",
      categoria: "Verduras",
      precio: 0.89,
      cantidadDisponible: 75,
      marca: "FarmFresh"
    },
    {
      idProducto: 8,
      nombre: "Queso Cheddar",
      categoria: "Lácteos",
      precio: 4.75,
      cantidadDisponible: 25,
      marca: "CheeseCraze"
    },
    {
      idProducto: 9,
      nombre: "Pasta Espagueti",
      categoria: "Pasta",
      precio: 1.25,
      cantidadDisponible: 40,
      marca: "PastaParadise"
    },
    {
      idProducto: 10,
      nombre: "Yogur Griego",
      categoria: "Lácteos",
      precio: 1.99,
      cantidadDisponible: 35,
      marca: "YogurtDelight"
    },
    {
      idProducto: 11,
      nombre: "Papel Higiénico",
      categoria: "Artículos para el hogar",
      precio: 0.99,
      cantidadDisponible: 100,
      marca: "HomeEssentials"
    },
    {
      idProducto: 12,
      nombre: "Atún enlatado",
      categoria: "Conservas",
      precio: 1.49,
      cantidadDisponible: 50,
      marca: "OceanCatch"
    },
    {
      idProducto: 13,
      nombre: "Café Molido",
      categoria: "Bebidas",
      precio: 6.99,
      cantidadDisponible: 25,
      marca: "MorningBrew"
    },
    {
      idProducto: 14,
      nombre: "Galletas de Avena",
      categoria: "Snacks",
      precio: 2.49,
      cantidadDisponible: 30,
      marca: "HealthyBites"
    },
    {
      idProducto: 15,
      nombre: "Detergente Líquido",
      categoria: "Artículos para el hogar",
      precio: 3.99,
      cantidadDisponible: 40,
      marca: "CleanWash"
    },
    {
      idProducto: 16,
      nombre: "Aceite de Oliva",
      categoria: "Aceites y condimentos",
      precio: 7.25,
      cantidadDisponible: 20,
      marca: "OliveHarvest"
    },
    {
      idProducto: 17,
      nombre: "Lechuga Iceberg",
      categoria: "Verduras",
      precio: 1.29,
      cantidadDisponible: 40,
      marca: "FreshGreens"
    },
    {
      idProducto: 18,
      nombre: "Chocolate Negro",
      categoria: "Dulces",
      precio: 2.99,
      cantidadDisponible: 45,
      marca: "SweetIndulgence"
    },
    {
      idProducto: 19,
      nombre: "Mermelada de Fresa",
      categoria: "Untables",
      precio: 2.75,
      cantidadDisponible: 25,
      marca: "BerryBliss"
    },
    {
      idProducto: 20,
      nombre: "Agua Mineral",
      categoria: "Bebidas",
      precio: 0.75,
      cantidadDisponible: 70,
      marca: "PureHydration"
    }
  ];



  const inputBusqueda = document.getElementById('busqueda');
  const tablaProductos = document.getElementById('tablaProductos');
  const botonOrdenarPorPrecioDs = document.getElementById('ordenarPorPrecioDs');
  const botonOrdenarPorPrecioAs = document.getElementById('ordenarPorPrecioAs');

  function renderizarProductos(productos) {
    tablaProductos.innerHTML = '';
    productos.forEach(producto => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${producto.idProducto}</td>
        <td>${producto.nombre}</td>
        <td>${producto.categoria}</td>
        <td>${producto.precio}</td>
        <td>${producto.cantidadDisponible}</td>
        <td>${producto.marca}</td>
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
  
  inputBusqueda.addEventListener('input', filtrarProductos);
  botonOrdenarPorPrecioDs.addEventListener('click', ordenarProductosPorPrecioDescendente);
  botonOrdenarPorPrecioAs.addEventListener('click', ordenarProductosPorPrecioAscedente);
  
  // Iniciar la tabla con todos los productos al cargar la página
  renderizarProductos(productosSupermercado);
  


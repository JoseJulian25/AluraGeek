import { productosServices } from "./productos-services.js";

const input = document.querySelector(".header__busqueda");
const listaProductos = document.querySelector("#filtrar-productos__lista");

let productos = []

function mostrarProductos(){
    listaProductos.classList.add("invisible")
    window.addEventListener("DOMContentLoaded", async () => {
        const data = await productosServices.filtrarProducto();
        productos = data
         renderProductos(productos)
      } )
}
    
mostrarProductos();

input.addEventListener("keyup", (e) => {   
    listaProductos.classList.remove("invisible")
    const nuevosProductos =  productos.filter(producto => producto.nombre.toLowerCase().includes(input.value.toLowerCase()))
  renderProductos(nuevosProductos);

  if(input.value == ""){
    listaProductos.classList.add("invisible")
  }
})

const crearProductosItems = productos => productos.map(producto => 
    `<li class="productos-filtrados">${producto.nombre} | ${producto.precio}</li>`).join('')

function renderProductos(productos){
   const itemsString = crearProductosItems(productos);
   listaProductos.innerHTML = itemsString;
}

  





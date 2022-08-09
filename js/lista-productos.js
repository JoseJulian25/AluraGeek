import { productosServices } from "./productos-services.js";

const crearNuevoProducto = (imagen,nombre,precio,id) => {
    const lista = document.createElement("li");
    lista.classList.add("productos__listas");

    const contenido = `<img class="productos__imagen" src="${imagen}" alt="">
    <div class="productos__iconos">
        <i class="bi bi-trash3-fill" id="${id}" data-delete></i>
       <a href="../editar-Producto.html?id=${id}"><i class="bi bi-pencil-fill"></i></a>
    </div>
    <div class="productos__textos">
        <span class="producto__clase">${nombre}</span>
        <p class="productos__precio">${precio}</p>
        <a class="productos__link" href="">Ver producto</a>
    </div>`   

    lista.innerHTML = contenido; 

    const botonEliminar = lista.querySelector("[data-delete]")
    botonEliminar.addEventListener("click", (event) => {
        event.preventDefault();

        Swal.fire({
            title: '¿Estas seguro que deseas eliminar este producto?',
            text: "No podras revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: "Cancelar",
            confirmButtonText: 'Si, eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
                productosServices.eliminarProducto(id)
            .then(() =>{})
            .catch((error) => alert(error))
              Swal.fire(
                'Eliminado!',
                'Tu producto ha sido totalmente eliminado',
                'success'
              )
            }
          })
        

        const id = botonEliminar.id;
        
    })

    return lista
}

crearNuevoProducto();

    const productos = document.querySelector(".productos__contenido");

    productosServices.listaProductos().then((data) => {
        data.forEach(({ imagen, nombre, precio, id }) => {
            const nuevaLista = crearNuevoProducto(imagen,nombre,precio, id);
            productos.appendChild(nuevaLista);
        })
    })
    .catch((error) => console.log(error))





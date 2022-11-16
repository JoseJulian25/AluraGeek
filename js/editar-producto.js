import { productosServices } from "./productos-services.js"

const form = document.querySelector("[data-form]")


const obtenerIformacion = () => {
    const url = new URL(window.location)
    const id = url.searchParams.get("id");

    if (id == null ){
        window.location.href = "error.html"
    }

    const imagen = document.querySelector("[data-imagen]");
    const categoria = document.querySelector("[data-categoria]");
    const nombre = document.querySelector("[data-name]");
    const precio = document.querySelector("[data-precio]");

    productosServices.detalleProducto(id).then((producto) => {
        imagen.value = producto.imagen;
        categoria.value = producto.categoria;
        nombre.value = producto.nombre;
        precio.value = producto.precio;
    })
}

obtenerIformacion();

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const url = new URL(window.location)
    const id = url.searchParams.get("id");

    const imagen = document.querySelector("[data-imagen]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-name]").value;
    const precio = document.querySelector("[data-precio]").value;

    productosServices.editarProducto(imagen, categoria,nombre,precio, id).then(()=> {
        Swal.fire({
            title: "Producto editado exitosamente",
            icon: "success",
        })
    })

    
})

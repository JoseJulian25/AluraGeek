import { productosServices } from "./productos-services.js";

const form = document.querySelector("[data-form]")

    form.addEventListener("submit", (event) => {
        event.preventDefault();
    
        Swal.fire({
            title: "Producto añadido exitosamente",
            icon: "success",
            timer: "5000"
        })
    
        const imagen = document.querySelector("[data-imagen]").value;
        const categoria = document.querySelector("[data-categoria]").value;
        const nombre = document.querySelector("[data-name]").value;
        const precio = document.querySelector("[data-precio]").value;
    
       
        
        productosServices.crearProducto(imagen, categoria, nombre, precio)
        .then(() => {
        })
        .catch((error) => alert(error));
    })



        let confirmar = []
        productosServices.listaProductos().then((data) => {
            data.forEach((productos) => {
                if(productos.categoria == categoria){
                    confirmar.push(true)
                }
                else{
                   confirmar.push(false)    
                }
                return confirmar
            })        
            
            
            let validar = confirmar.indexOf(true)
            if (validar == -1){
                console.log(validar)
                return false      
            }
    
            else{
                return true
            }
            
        })
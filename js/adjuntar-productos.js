import {productosServices} from "./productos-services.js"

const crearNuevoProducto = (imagen,nombre,precio) => {
    const lista = document.createElement("li");
    lista.classList.add("productos__listas");

    const contenido = `<img class="productos__imagen" src="${imagen}" alt="">
    <div class="productos__textos">
        <span class="producto__clase">${nombre}</span>
        <p class="productos__precio">${precio}</p>
        <a class="productos__link" href="">Ver producto</a>
    </div>`   

    lista.innerHTML = contenido; 
    return lista
}

crearNuevoProducto();

    const productosSection = document.querySelector(".productos")

    productosServices.listaProductos().then((data) => {
        data.forEach(({ imagen, nombre, precio, id, categoria }) => {           
            const nuevaLista = crearNuevoProducto(imagen,nombre,precio, id);

            const contenido = `<div class="productos__titulos">
                <h2 class="productos__titulo">${categoria}</h2>
                <a class="productos__ver" href="">Ver todo &#10140;</a>
            </div>`

            if (categoria  ) {
                const div = document.createElement("div")
                div.classList.add("productos__areas")

                const ul = document.createElement("ul")
                ul.classList.add("productos__contenido")
                

                div.innerHTML = contenido;

                productosSection.appendChild(div)
                div.appendChild(ul)
                ul.appendChild(nuevaLista)
            }
            
        })
    })
    .catch((error) => console.log(error))
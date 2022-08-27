
import {productosServices} from "./productos-services.js"

/*const crearNuevoProducto = (imagen,nombre,precio) => {
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

//crearNuevoProducto();


productosServices.listaProductos().then((data) => {
    data.forEach(({ imagen, nombre, precio, id, categoria }) => {    
        const productosSection = document.querySelector(".productos")           
        const nuevaLista = crearNuevoProducto(imagen,nombre,precio, id);

        const contenido = `<div class="productos__titulos">
            <h2 class="productos__titulo">${categoria}</h2>
            <a class="productos__ver" href="">Ver todo &#10140;</a>
        </div>`

            const div = document.createElement("div")
            div.classList.add("productos__areas")

            const ul = document.createElement("ul")
            ul.classList.add("productos__contenido")
            
            div.innerHTML = contenido;

            productosSection.appendChild(div)
            div.appendChild(ul)
            ul.appendChild(nuevaLista) 
})
})*/

function crearCategoria(lista, categoria){
    const productosSection = document.querySelector(".productos")
    const contenido = `<div class="productos__titulos">
            <h2 class="productos__titulo">${categoria}</h2>
            <a class="productos__ver" href="">Ver todo &#10140;</a>
        </div>`

            const div = document.createElement("div")
            div.classList.add("productos__areas")

            const ul = document.createElement("ul")
            ul.classList.add("productos__contenido")
            
            div.innerHTML = contenido;

            productosSection.appendChild(div)
            div.appendChild(ul)
            ul.appendChild(lista)
}


productosServices.listaProductos().then((data) => {
    data.forEach(({imagen, nombre, precio, id, categoria }) => {
        const lista = document.createElement("li");
        lista.classList.add("productos__listas");
        const contenido = `<img class="productos__imagen" src="${imagen}" alt="">
        <div class="productos__textos">
        <span class="producto__clase">${nombre}</span>
        <p class="productos__precio">${precio}</p>
        <a class="productos__link" href="">Ver producto</a>
        </div>`

        lista.innerHTML = contenido;
        /*if(existe == true){
            
        }else{
            crearCategoria(lista, categoria)
        }*/
    });
})


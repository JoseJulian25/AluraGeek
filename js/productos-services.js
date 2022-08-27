const listaProductos= () => {
    return fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json());
}

const crearProducto = (imagen, categoria, nombre, precio ) => {
    return fetch("http://localhost:3000/producto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ imagen, categoria, nombre, precio, id: uuid.v4() })
    })
}

const eliminarProducto = (id) =>{
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "DELETE"
    })
}

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`).then((respuesta) =>  respuesta.json())
}

const editarProducto = (imagen, categoria, nombre, precio, id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({imagen, categoria, nombre, precio})
    })
    .then((respuesta) => respuesta)

    
}
 const filtrarProducto = async () =>  {
    const respuesta = await fetch("http://localhost:3000/producto")
    return await respuesta.json();
}


export const productosServices = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    editarProducto,
    filtrarProducto,
}
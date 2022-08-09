const form = document.querySelector(".form")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const email = document.querySelector("#name").value
    const contraseña = document.querySelector("#password").value

    window.location.href = "../AllProductos.html"
    
})


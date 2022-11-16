const inputs = document.querySelectorAll("input")

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target)
    })
})

function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if(input.validity.valid){
        input.classList.remove("validity")
        input.parentElement.querySelector(".input-message-error").innerHTML = ""
    }
    else{
        input.classList.add("validity")
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajesDeError(tipoDeInput, input)
    }
}

const tipoDeErrores = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError',
]

const mensajesDeError = {
    imagen: {
        valueMissing: "Este campo no puede estar vacio.",
        typeMismatch: "Instroduce una URL"
    },

    categoria: {
        valueMissing: "Este campo no puede estar vacio.",
        patternMismatch: "Debe contener minimo 4 caracteres. Maximo 40 caracteres"
    }, 

    nombre: {
        valueMissing: "Este campo no puede estar vacio.",
        patternMismatch: "Debe contener minimo 4 caracteres. Maximo 40 caracteres"
        
    },

    precio: {
        valueMissing: "Este campo no puede estar vacio.",

    },
    email: {
        valueMissing: "Este campo no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },

    password: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "Debe contener minimo 8 caracteres, un numero y una letra mayuscula. No coracteres especiales."
        
    },
    mensaje:{
        valueMissing: "Este campo no puede estar vacio",
    }

}

function mostrarMensajesDeError(tipoDeInput, input){
    let mensaje = ""
    tipoDeErrores.forEach((error) => {
        if(input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error]
        }
    })
    return mensaje
}

const submitLogin = document.querySelector(".form__submit-login")

submitLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = "AllProductos.html"
})

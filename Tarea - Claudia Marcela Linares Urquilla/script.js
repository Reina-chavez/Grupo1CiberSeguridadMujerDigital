function redirigir() {
    // Cambia la URL a la que deseas redirigir al usuario
    window.location.href = "indice.html";
}

function estrategias() {
    // Cambia la URL a la que deseas redirigir al usuario
    window.location.href = "estrategias.html";
}

function tecnicas() {
    // Cambia la URL a la que deseas redirigir al usuario
    window.location.href = "tecnicas.html";
}

function planificacion() {
    // Cambia la URL a la que deseas redirigir al usuario
    window.location.href = "planificacion.html";
}

function apuntes() {
    // Cambia la URL a la que deseas redirigir al usuario
    window.location.href = "apuntes.html";
}

function preparacion() {
    // Cambia la URL a la que deseas redirigir al usuario
    window.location.href = "preparacion.html";
}

function administracion() {
    // Cambia la URL a la que deseas redirigir al usuario
    window.location.href = "administracion.html";
}

function herramientas() {
    // Cambia la URL a la que deseas redirigir al usuario
    window.location.href = "herramientas.html";
}

function procrastinacion() {
    // Cambia la URL a la que deseas redirigir al usuario
    window.location.href = "procrastinacion.html";
}

function consejos() {
    // Cambia la URL a la que deseas redirigir al usuario
    window.location.href = "consejos.html";
}

function metodos() {
    // Cambia la URL a la que deseas redirigir al usuario
    window.location.href = "metodos.html";
}

function enlaces() {
    // Cambia la URL a la que deseas redirigir al usuario
    window.location.href = "enlaces.html";
}



// Obtener botones y contenidos
const botones = document.querySelectorAll('.botones button');
const contenidos = document.querySelectorAll('.menues');

// Agregar un evento de clic a cada botón
botones.forEach((boton, index) => {
    boton.addEventListener('click', () => {
        // Ocultar todos los contenidos
        contenidos.forEach((contenido) => {
            contenido.classList.remove('mostrar');
        });

        // Mostrar el contenido correspondiente
        contenidos[index].classList.add('mostrar');
    });
});

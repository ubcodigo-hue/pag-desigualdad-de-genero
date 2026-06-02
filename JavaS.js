document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".menu-principal > ul > li");

    items.forEach(item => {
        const submenu = item.querySelector("ul");

        if (submenu) {
            const enlace = item.querySelector("a");

            enlace.addEventListener("click", function(e) {
                // Si el menú NO está abierto, frena el enlace y lo abre
                if (!item.classList.contains("abierto")) {
                    e.preventDefault();

                    // Cierra cualquier otro submenú activo
                    document.querySelectorAll(".menu-principal li.abierto").forEach(li => {
                        if (li !== item) {
                            li.classList.remove("abierto");
                        }
                    });


                    item.classList.add("abierto");
                }
                // Si YA está abierto (segundo clic), el 'if' se salta y va a la página directamente
            });
        }
    });

    // Cerrar el menú si haces clic en cualquier otro lado de la pantalla
    document.addEventListener("click", function(e) {
        if (!e.target.closest(".menu-principal")) {
            document.querySelectorAll(".menu-principal li.abierto").forEach(li => {
                li.classList.remove("abierto");
            });
        }
    });
});
/* ========/* ========================= */
/* mio */
/* ========================= */
// Base de datos con las historias reales
const listaTestimonios = [
    {
        nombre: "Lucia, 28 años",
        texto: "En una entrevista de trabajo me preguntaron si pensaba tener hijos. A mis compañeros hombres nunca les hicieron esa pregunta.",
    },
    {
        nombre: "Maria, 35 años",
        texto: "Descubrí que un compañero ganaba más que yo realizando las mismas tareas.",
    },
    {
        nombre: "Carla, 42 años",
        texto: "Después de convertirme en madre, dejaron de considerarme para ascensos importantes.",
    },
    {
        nombre: "Sofía, 24 años",
        texto: "Muchas veces sentí que tenía que demostrar más que mis colegas hombres pára que valoraran mis ideas.",
    },
    {
        nombre: "Ana, 17 años",
        texto: "Me dijeron que ciertas carreras 'eran más para hombres' cuando estaba eligiendo qué estudiar.",
    }
];

// Control de posición inicial
let posicion = 0;

// Captura de moldes HTML
const txtTexto = document.getElementById('testimonio-texto');
const txtNombre = document.getElementById('testimonio-nombre');
const btnSiguiente = document.getElementById('btn-siguiente');
const btnAnterior = document.getElementById('btn-anterior');
const botonesNombres = document.querySelectorAll('.btn-nombre');

// Función que actualiza el texto en pantalla
function mostrarTestimonio() {
    if (txtTexto && txtNombre) {
        txtTexto.textContent = listaTestimonios[posicion].texto;
        txtNombre.textContent = listaTestimonios[posicion].nombre;
    }
}

// Función avanzar (Flecha derecha)
function avanzar() {
    posicion = posicion + 1;
    if (posicion >= listaTestimonios.length) {
        posicion = 0;
    }
    mostrarTestimonio();
}

// Función retroceder (Flecha izquierda)
function retroceder() {
    posicion = posicion - 1;
    if (posicion < 0) {
        posicion = listaTestimonios.length - 1;
    }
    mostrarTestimonio();
}

// Escuchadores de eventos para las flechas
if (btnSiguiente && btnAnterior) {
    btnSiguiente.addEventListener('click', avanzar);
    btnAnterior.addEventListener('click', retroceder);
}

// Escuchadores para los clics en la lista de nombres de abajo
botonesNombres.forEach(boton => {
    boton.addEventListener('click', (e) => {
        posicion = parseInt(e.target.getAttribute('data-posicion'));
        mostrarTestimonio();
    });
});
/* ========/* ========================= */
/* Problematicas */
/* ========================= */

function confirmarSuscripcion(event) {
    // 🌟 Evita que la página se recargue automáticamente al presionar el botón
    event.preventDefault(); 

    // 🌟 Muestra la ventana nativa del navegador con las opciones Aceptar y Cancelar
    let respuesta = confirm("¿Desea enviar suscripción?");

    if (respuesta) {
        // Si el usuario hace click en "Aceptar"
        alert("¡Gracias por suscribirte a Lente Violeta!");
        
        // Aquí puedes limpiar el campo de texto si quieres
        event.target.reset();
    } else {
        // Si el usuario hace click en "Cancelar"
        alert("Suscripción cancelada.");
    }
}
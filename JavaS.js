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
// ==========================================
// 1. LÓGICA DEL CARRUSEL DE TESTIMONIOS
// ==========================================

// Base de datos con las historias
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

// Control de posicion (Empezamos con Lucia en la posicion 0)
let posicion = 0;

// Capturamos los moldes del HTML mediante sus IDs
const txtTexto = document.getElementById('testimonio-texto');
const txtNombre = document.getElementById('testimonio-nombre');
const btnSiguiente = document.getElementById('btn-siguiente');
const btnAnterior = document.getElementById('btn-anterior');

// Funcion para actualizar los datos en la pantalla
function mostrarTestimonio() {
    // Verificamos primero que los elementos existan en el HTML actual para que no tire error
    if (txtTexto && txtNombre) {
        txtTexto.textContent = listaTestimonios[posicion].texto;
        txtNombre.textContent = listaTestimonios[posicion].nombre;
    }
}

// Funcion para la flecha derecha (Avanzar)
function avanzar() {
    posicion = posicion + 1;
    if (posicion >= listaTestimonios.length) {
        posicion = 0;
    }
    mostrarTestimonio();
}

// Funcion para la flecha izquierda (Retroceder)
function retroceder() {
    posicion = posicion - 1;
    if (posicion < 0) {
        posicion = listaTestimonios.length - 1;
    }
    mostrarTestimonio();
}

// Conectamos los botones con los clics del usuario si existen en la pagina
if (btnSiguiente && btnAnterior) {
    btnSiguiente.addEventListener('click', avanzar);
    btnAnterior.addEventListener('click', retroceder);
}


// ==========================================
// 2. LÓGICA DEL MENÚ PRINCIPAL DESPLEGABLE
// ==========================================

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
                // Si YA está abierto (segundo clic), va a la página directamente
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
/* NOTICIAS */
/* ========================= */


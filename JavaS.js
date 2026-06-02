const items = document.querySelectorAll(".menu-principal > ul > li");

items.forEach(item => {
    const submenu = item.querySelector("ul");

    if (submenu) {
        const enlace = item.querySelector("a");

        enlace.addEventListener("click", function(e) {
            // Si NO está abierto, detenemos el viaje a la página y lo abrimos
            if (!item.classList.contains("abierto")) {
                e.preventDefault();

                // Cerramos cualquier otro submenú que esté abierto
                document.querySelectorAll(".menu-principal li.abierto").forEach(li => {
                    if (li !== item) {
                        li.classList.remove("abierto");
                    }
                });

                // Agregamos la clase para que el CSS lo muestre
                item.classList.add("abierto");
            }
            // Si SÍ contiene 'abierto', el "if" se ignora y el segundo click redirige normalmente
        });
    }
});

// EXTRA: Cerrar el menú si se hace click fuera de la navegación
document.addEventListener("click", function(e) {
    if (!e.target.closest(".menu-principal")) {
        document.querySelectorAll(".menu-principal li.abierto").forEach(li => {
            li.classList.remove("abierto");
        });
    }
});
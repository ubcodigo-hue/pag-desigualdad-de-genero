document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".menu-principal > ul > li");

    items.forEach(item => {
        const submenu = item.querySelector("ul");

        if (submenu) {
            const enlace = item.querySelector("a");

            enlace.addEventListener("click", function(e) {
                // Si NO está abierto, detenemos el enlace y añadimos la clase
                if (!item.classList.contains("abierto")) {
                    e.preventDefault();

                    // Cerramos otros menús abiertos
                    document.querySelectorAll(".menu-principal li.abierto").forEach(li => {
                        if (li !== item) {
                            li.classList.remove("abierto");
                        }
                    });

                    item.classList.add("abierto");
                }
                // Si ya tiene la clase 'abierto', el segundo click no entra aquí y navega
            });
        }
    });

    // Cerrar el menú si se hace click en cualquier otra parte de la pantalla
    document.addEventListener("click", function(e) {
        if (!e.target.closest(".menu-principal")) {
            document.querySelectorAll(".menu-principal li.abierto").forEach(li => {
                li.classList.remove("abierto");
            });
        }
    });
});
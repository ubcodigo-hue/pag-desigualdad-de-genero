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
/* NOTICIAS */
/* ========================= */


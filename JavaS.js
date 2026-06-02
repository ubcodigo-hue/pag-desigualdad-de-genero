const itemsConSubmenu = document.querySelectorAll(".menu-principal li:has(ul)");

itemsConSubmenu.forEach((item) => {
    const linkPrincipal = item.querySelector("a");

    linkPrincipal.addEventListener("click", (evento) => {
        evento.preventDefault();
        item.classList.toggle("abierto");
    });
});
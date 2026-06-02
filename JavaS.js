const items = document.querySelectorAll(".menu-principal > ul > li");

items.forEach(item => {

    const submenu = item.querySelector("ul");

    if (submenu) {

        const enlace = item.querySelector("a");

        enlace.addEventListener("click", function(e) {

            if (!item.classList.contains("abierto")) {

                e.preventDefault();

                document.querySelectorAll(".menu-principal li.abierto")
                    .forEach(li => {
                        if (li !== item) {
                            li.classList.remove("abierto");
                        }
                    });

                item.classList.add("abierto");
            }

        });

    }

});
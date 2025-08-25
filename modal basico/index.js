const styles = ``;

// Agregar estilos al documento
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

(function () {
    const device = document.querySelector("html").offsetWidth >= 992 ? "des" : "mob";
    const numScript = "[FB_MODAL_BASIC]";
    console.log(numScript);

    const copys = { es: {}, en: {} }

    const preload = (maxIntents) => {
        setTimeout(() => {
            console.log("Se ejecutó preload: ", maxIntents);
            const element = document.querySelector("#open-modal");
            if (element) {
                createModal(element);
            } else if (maxIntents >= 75) {
                console.warn(numScript, "Elemento no ha cargado!");
            } else {
                preload(maxIntents + 1);
            }
        }, 300);
    }

    const createHeaderModal = () => {
        const modalHeader = document.createElement("div");
        modalHeader.classList.add("modal-header");

        const titleModal = document.createElement("h2");
        titleModal.innerText = "Título del Modal";
        modalHeader.appendChild(titleModal);

        const closeButton = document.createElement("button");
        closeButton.classList.add("close-modal");
        closeButton.innerText = "x";
        modalHeader.appendChild(closeButton);

        return modalHeader;
    }


    const createBodyModal = () => {
        const modalBody = document.createElement("div");
        modalBody.classList.add("modal-body");
        modalBody.innerText = "Contenido del Modal";
        return modalBody;
    }

    const createBodyFooter = () => {
        const modalFooter = document.createElement("div");
        modalFooter.classList.add("modal-footer");

        const modalCloseButton = document.createElement("p");
        modalCloseButton.classList.add("text-footer");
        modalCloseButton.innerText = "modal básico";
        modalFooter.appendChild(modalCloseButton);

        return modalFooter;
    }

    const createModal = (openModalButton) => {
        if (!openModalButton) return;

        openModalButton.addEventListener("click", () => {
            const modalBackdrop = document.createElement("div");
            modalBackdrop.classList.add("modal-backdrop");
            document.body.appendChild(modalBackdrop);
            const modalContainer = document.createElement("div");
            modalContainer.classList.add("modal-container", "active");
            modalContainer.id = "modal-container";
            document.body.appendChild(modalContainer);
            const header = createHeaderModal();
            const body = createBodyModal();
            const footer = createBodyFooter();
            modalContainer.appendChild(header);
            modalContainer.appendChild(body);
            modalContainer.appendChild(footer);
            addEventsModal();
        });
    }

    const closeModal = () => {
        const closeButton = document.querySelector(".close-modal");
        if (!closeButton) return;
        closeButton.addEventListener("click", () => {
            const modalBackdrop = document.querySelector(".modal-backdrop");
            if (modalBackdrop) modalBackdrop.remove();
            const modalContainer = document.querySelector("#modal-container");
            if (modalContainer) {
                modalContainer.classList.remove("active");
                modalContainer.classList.add("close");
                setTimeout(() => {
                    modalContainer.remove();
                }, 300);
            }
        });
    }

    const eventClickDocument = () => {
        document.addEventListener("click", (event) => {
            console.log("event.target: ", event.target)
            //logica para cerrar el modal cuando el usuario le de click afuera del modal
            const modalContainer = document.querySelector("#modal-container");
            const modalBackdrop = document.querySelector(".modal-backdrop");
            if (modalBackdrop && modalBackdrop.contains(event.target)) {
                modalContainer.classList.add("close");
                modalBackdrop.remove();
                setTimeout(() => {
                    modalContainer.remove();
                }, 200);
            }
        });
    }

    const addEventsModal = () => {
        closeModal();
        eventClickDocument();
    }

    const getLang = () => {
        let lang = document.querySelector("html").getAttribute("lang").toLowerCase()
        if (lang.includes("-")) {
            lang = lang.split("-")[0].toLowerCase()
        }
        return lang;
    }

    if (device === "des" || device === "mob") preload(0);
})();
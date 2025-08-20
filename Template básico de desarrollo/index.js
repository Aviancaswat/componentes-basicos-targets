const styles = ``;

// Agregar estilos al documento
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

(function () {
    const device = document.querySelector("html").offsetWidth >= 992 ? "des" : "mob";
    const numScript = "[FB_CODE_EXAMPLE]";
    console.log(numScript);

    const copys = { es: {}, en: {} }

    const preload = (maxIntents) => {
        setTimeout(() => {
            console.log("Se ejecutó preload: ", maxIntents);
            const element = document.querySelector("#example-parent-element");
            if (element) {
                hacerAlgo(element);
            } else if (maxIntents >= 75) {
                console.warn(numScript, "Elemento no ha cargado!");
            } else {
                preload(maxIntents + 1);
            }
        }, 300);
    }

    const hacerAlgo = (element) => {
        if (!element) return;
        console.log("Lógica de mi desarrollo");
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
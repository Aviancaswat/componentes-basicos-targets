(function () {

    const device = document.querySelector("html").offsetWidth >= 992 ? "des" : "mob";
    const numScript = "[FB_ALF1_1648]";
    console.log(numScript);

    const copys = {
        es: {
            band: {
                title: `Estás viajando <span class="alf1_1648_band_font_bold">sin equipaje</span> adicional. Añádelo y ahorra tiempo en el aeropuerto`
            }
        },
        en: {
            band: {
                title: `You’re traveling <span class="alf1_1648_band_font_bold">without additional</span> baggage. Add it now and save time at the airport`
            }
        }
    }

    const preload = (maxIntents) => {
        setTimeout(() => {
            console.log("Se ejecutó preload: ", maxIntents);
            const element = document.querySelector("#container-band");
            if (element) {
                createBand();
            } else if (maxIntents >= 75) {
                console.warn(numScript, "Elemento no ha cargado!");
            } else {
                preload(maxIntents + 1);
            }
        }, 300);
    }

    const createBand = () => {

        const containerTest = document.querySelector("#container-band")
        const bandContainer = document.createElement("div")
        bandContainer.classList.add('alf1_1648_band_container')

        const iconBand = document.createElement("div")
        iconBand.classList.add('alf1_1648_icon_band')

        const textband = document.createElement("p")
        textband.classList.add('alf1_1648_text_band')
        textband.innerHTML = copys[getLang()].band.title;

        bandContainer.appendChild(iconBand)
        bandContainer.appendChild(textband)
        containerTest.appendChild(bandContainer);
    }

    const getLang = () => {
        let lang = document.querySelector("html").getAttribute("lang").toLowerCase();

        if (lang.includes("-")) {
            lang = lang.split('-')[0].toLowerCase();
        }

        return lang;
    }

    if (device === "des" || device === "mob") preload(0);
})();
(function () {

    const device = document.querySelector("html").offsetWidth >= 992 ? "des" : "mob";
    const numScript = "[FB_ALF1_1648]";
    console.log(numScript);

    const copys = {
        es: {
            band: {
                title: `Estás viajando <span class="alf1_1648_band_font_bold">sin equipaje</span> adicional. Añádelo y ahorra tiempo en el aeropuerto`
            },
            dropdown: {
                title: "Conoce las  características de cada tipo de equipaje",
                items: {
                    personalArticle: `<span class='alf1_1648_band_font_bold'>Artículo personal (45 alto x 35 largo x 20 ancho cms):</span>  Ubícalo debajo del asiento delantero.`,
                    handLuggage: `<span class='alf1_1648_band_font_bold'>Equipaje de mano (10kg):</span> Llévalo en la cabina del avión, en el compartimiento superior.`,
                    holdLuggage: `<span class='alf1_1648_band_font_bold'>Equipaje de bodega (23kg):</span> Regístralo en el counter del aeropuerto antes de ir a la sala de abordaje.`
                }
            },
            button: {
                cta: "Viajar sin equipaje adicional"
            }
        },
        en: {
            band: {
                title: `You’re traveling <span class="alf1_1648_band_font_bold">without additional</span> baggage. Add it now and save time at the airport`
            },
            dropdown: {
                title: "Get to know the characteristics of each baggage type",
                items: {
                    personalArticle: `<span class='alf1_1648_band_font_bold'>Personal item (45 high x 35 long x 20 wide cm):</span> Place it under the seat in front of you.`,
                    handLuggage: `<span class='alf1_1648_band_font_bold'>Carry-on baggage (10 kg):</span> Take it into the aircraft and place it in the overhead compartment.`,
                    holdLuggage: `<span class='alf1_1648_band_font_bold'>Checked baggage (23 kg):</span> Check it in at the airport counter before proceeding to the boarding gate.`
                }
            },
            button: {
                cta: "Travel without additional baggage"
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
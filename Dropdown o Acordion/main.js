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
                createDropdown();
                eventsButton();
            } else if (maxIntents >= 75) {
                console.warn(numScript, "Elemento no ha cargado!");
            } else {
                preload(maxIntents + 1);
            }
        }, 300);
    }

    const setShowDropdown = (show) => {
        isShowDropdown = show
        document.querySelector(".items_container_dropdown").classList.toggle("active")
        document.querySelector(".alf1_1648_icon_button_dropdown").classList.toggle("active")
        document.querySelector(".alf1_1648_dropdown_button_wrapper").classList.toggle("active");
    }

    let isShowDropdown = true;
    const eventsButton = () => {
        const button = document.querySelector("#alf1_1648_dropdown_button");
        if (!button) {
            console.log("Button not found");
            return;
        }

        button.addEventListener("click", () => {
            console.log("Click: ", !isShowDropdown)
            setShowDropdown(!isShowDropdown)
        })
    }

    const createDropdown = () => {

        const containerTest = document.querySelector("#container-dropdown")

        //elemento padre
        const dropdownContainer = document.createElement("div")
        dropdownContainer.classList.add("alf1_1648_dropdown_container")

        //button que despliega el dropdown
        const dropdownButtonWrapper = document.createElement("div")
        dropdownButtonWrapper.classList.add("alf1_1648_dropdown_button_wrapper")
        const buttonDropDown = document.createElement("button")
        buttonDropDown.id = "alf1_1648_dropdown_button";
        buttonDropDown.classList.add("alf1_1648_dropdown_button")
        buttonDropDown.textContent = copys[getLang()].dropdown.title
        const iconButtonDropdown = document.createElement("div")
        iconButtonDropdown.classList.add("alf1_1648_icon_button_dropdown")

        buttonDropDown.appendChild(iconButtonDropdown)

        //detalles de los equipajes
        const itemsContainerDetailsDropdown = document.createElement("div")
        itemsContainerDetailsDropdown.classList.add("items_container_dropdown")

        const containerItemOne = document.createElement("div")
        containerItemOne.classList.add("container_item")
        const itemOne = document.createElement("p")
        itemOne.classList.add("item_one_dropdown")
        itemOne.innerHTML = copys[getLang()].dropdown.items.personalArticle
        const iconItemOne = document.createElement("div")
        iconItemOne.classList.add("icon_itemone_dropdown")
        containerItemOne.appendChild(iconItemOne)
        containerItemOne.appendChild(itemOne)

        const containerItemTwo = document.createElement("div")
        containerItemTwo.classList.add("container_item")
        const itemTwo = document.createElement("p")
        itemTwo.classList.add("item_two_dropdown")
        itemTwo.innerHTML = copys[getLang()].dropdown.items.handLuggage
        const iconItemTwo = document.createElement("div")
        iconItemTwo.classList.add("icon_itemtwo_dropdown")
        containerItemTwo.appendChild(iconItemTwo)
        containerItemTwo.appendChild(itemTwo)

        const containerItemThree = document.createElement("div")
        containerItemThree.classList.add("container_item")
        const itemThree = document.createElement("p")
        itemThree.classList.add("item_three_dropdown")
        itemThree.innerHTML = copys[getLang()].dropdown.items.holdLuggage
        const iconItemThree = document.createElement("div")
        iconItemThree.classList.add("icon_itemthree_dropdown")
        containerItemThree.appendChild(iconItemThree)
        containerItemThree.appendChild(itemThree)

        itemsContainerDetailsDropdown.appendChild(containerItemOne)
        itemsContainerDetailsDropdown.appendChild(containerItemTwo)
        itemsContainerDetailsDropdown.appendChild(containerItemThree)

        dropdownButtonWrapper.appendChild(buttonDropDown)
        dropdownButtonWrapper.appendChild(itemsContainerDetailsDropdown)

        dropdownContainer.appendChild(dropdownButtonWrapper)
        containerTest.append(dropdownContainer)
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
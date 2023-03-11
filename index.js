// Cargar datos desde JSON local
const arrayDeTematicas = []



//Tomo desde JSON local las tematicas para guardarlas en el array de temáticas e imprimirlas en el HTML del inicio
fetch("./json/tematicas.json")

    .then((response) => response.json())
    .then((data) => {

        let contenedorBotonesTematicas = document.querySelector("#contenedorBotonesTematicas");
        contenedorBotonesTematicas.innerHTML = "";


        data.forEach(element => {

            arrayDeTematicas.push(element);


            let cadaBotonTematica = document.createElement("div");
            cadaBotonTematica.innerHTML = `
            <button id="${element.idHTML}" class="botonSeleccionTematica"><img src="${element.img}" alt="" class="imgTematica">${(element.tematica).toUpperCase()}</button>
            `;
            contenedorBotonesTematicas.appendChild(cadaBotonTematica);


            cadaBotonTematica.addEventListener("click", () => {
                localStorage.clear();

                localStorage.setItem("tematicaSeleccionada", element.tematica);

                location.href = "./Paginas/nivel1.html"
            });
        });

    });
;
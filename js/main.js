//Variables
let cardConImagenVisible = 0;
let primeraCardPresionada = null;
let segundaCardPresionada = null;
let imagenPrimeraCard = null;
let imagenSegundaCard = null;

let intentos = 0;
let coincidencias = 0;


let totalIntentosNivel1 = null;
let totalIntentosNivel2 = null;
let totalIntentosNivel3 = null;

let intentosTotalesNivel1;
let intentosTotalesNivel2;
let intentosTotalesNivel3;


let tematicaSeleccionada;


let actualizarNumeroDeCoincidencias = document.querySelector("#resultadosCoincidencias");
let actualizarNumeroDeIntentos = document.querySelector("#resultadosIntentos");
let puntosObtenidosPorNivel = document.querySelector("#puntosAcumulados");

let tematicaElegida = document.querySelector("#tematicaElegida");
let botonReiniciar = document.getElementById("botonReiniciar");


//Puntos obtenidos en local storage
let sumaPuntosTotales = JSON.parse(localStorage.getItem("puntosObtenidos")) || [];



//En esta funcion creamos los botones que seran las card con las imagenes
function crearBotonesCards(idBotonesCards){

    contenedorBotonesCards.innerHTML = "";

    for (const id of idBotonesCards){

        const cadaCard = document.createElement("div");
        cadaCard.innerHTML =`
            <button id="${id}"><img src="../Multimedia/Iconos/estrellitas-tarjetas.svg" class="estrellitas" alt="icono estrellas"></button>`;
        contenedorBotonesCards.appendChild(cadaCard);

        const botonCard = document.getElementById(`${id}`);
        botonCard.addEventListener("click", () => {
        mostrarImagen(id);
        });
    }
}



//Funcion para mostrar el resultado despues que el usuario hace click en dos cards
let avisoCoincidencia = null;
let avisoError = null;

function avisoDeResultado (){


    //Tomo las imágenes de las cards dadas vueltas, para cambiarle la clase cuando haya coincidencia
    let primeraImagenPresionada = primeraCardPresionada.querySelector('img')
    let segundaImagenPresionada = segundaCardPresionada.querySelector('img');


    if(imagenPrimeraCard == imagenSegundaCard){

        avisoCoincidencia = setTimeout(() => {

            primeraImagenPresionada.classList.remove('botonConImagenVisible')
            segundaImagenPresionada.classList.remove('botonConImagenVisible')

            primeraImagenPresionada.classList.add('botonConCoincidencia')
            segundaImagenPresionada.classList.add('botonConCoincidencia')
            cardConImagenVisible = 0;
        },400);
        coincidencias++
        actualizarNumeroDeCoincidencias.innerText = `${coincidencias}`;



    }else{
        
        avisoError = setTimeout(() => {

            primeraCardPresionada.innerHTML = `<img src="../Multimedia/Iconos/estrellitas-tarjetas.svg" class="estrellitas" alt="">`;
            segundaCardPresionada.innerHTML = `<img src="../Multimedia/Iconos/estrellitas-tarjetas.svg" class="estrellitas" alt="">`;

            primeraCardPresionada.disabled = false;
            segundaCardPresionada.disabled = false;
            
            cardConImagenVisible = 0;
        },800);
    }
}





//Funcion para mostrar lo que sucede cuando el usuario termino un nivel
function indicarSiguienteNivel(cantidadCoincidenciasPorNivel, cantidadIntentosPorNivel, numeroNivel){

    if(coincidencias == cantidadCoincidenciasPorNivel){

        const botonSiguienteNivel = document.querySelector("#botonSiguienteNivel")
        botonSiguienteNivel.innerHTML =`
        <a class="resultados__btn--celeste"><img src="../Multimedia/Iconos/empezar.svg" class="resultados__btn--icono" alt="icono siguiente nivel">SIGUIENTE NIVEL</a>
        `;

        swal({
            title: "Excelente!",
            text: "Completaste este nivel!",
            icon: "success",
            button: "CERRAR",
        });

        sumaPuntosTotales.push(coincidencias);
        actualizarCantidadPuntosAcumulados();

        localStorage.setItem("puntosObtenidos", JSON.stringify(sumaPuntosTotales));

        localStorage.setItem(`intentosRealizados${numeroNivel}`, cantidadIntentosPorNivel);
    }

}




//Funcion para sumar y actualizar los puntos totales acumulados
let puntosSumados;

function actualizarCantidadPuntosAcumulados(){
    puntosSumados = sumaPuntosTotales.reduce ((suma, puntos) => suma + puntos, 0);
    puntosObtenidosPorNivel.innerText = puntosSumados;
}




//Funcion para imprimir la cantidad de intentos que realizó el usuario la última vez que jugo el nivel
let intentosRealizadosLaUltimaVez = document.getElementById("intentosRealizadosLaUltimaVez");

function imprimirIntentosRealizadosUltimaVez(numeroNivel){

    let intentosEnLocalStorage = localStorage.getItem(`intentosRealizados${numeroNivel}`);

    if(intentosEnLocalStorage > 0){
        intentosRealizadosLaUltimaVez.innerHTML = `La última vez que jugaste este nivel lo hiciste en ${intentosEnLocalStorage} intentos.`;
    }
};
    




function limpiarTodosLosPuntosLocalStorage(){
    sumaPuntosTotales = [];
    localStorage.setItem("puntosObtenidos", JSON.stringify(sumaPuntosTotales));
}




//Esta funcion permite eliminar los puntos sumados solo en el nivel 2 y 3, cuando el usuario quiere volver a jugar el nivel 2 y debe tener acumulados solo los puntos del nivel 1
function controlarPuntajeInicialNivel2(){

    if(sumaPuntosTotales.length === 3){
        sumaPuntosTotales.splice(1,2);
    }

    if(sumaPuntosTotales.length === 2){
        sumaPuntosTotales.pop();
    }

    localStorage.setItem("puntosObtenidos", JSON.stringify(sumaPuntosTotales));
}




//Esta funcion permite eliminar los puntos sumados solo en el nivel 3
function controlarPuntajeInicialNivel3(){

    if(sumaPuntosTotales.length === 3){
        sumaPuntosTotales.pop();
    }

    localStorage.setItem("puntosObtenidos", JSON.stringify(sumaPuntosTotales));
}




function imprimirBotonReiniciar(){
    botonReiniciar.innerHTML = `
    <a class="resultados__btn--violeta"><img src="../Multimedia/Iconos/reiniciar.svg" class="resultados__btn--icono" alt="icono reiniciar">REINICIAR</a>
    `;
}

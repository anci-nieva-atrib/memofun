//Si el usuario vuelve a jugar este nivel, mediante esta función limpio los puntos acumulados previamente
limpiarTodosLosPuntosLocalStorage()


imprimirIntentosRealizadosUltimaVez(1)


imprimirBotonReiniciar()


//Array con numeros al azar, duplicandolos porque habra dos imagenes por numero
let arrayAzarNivel1 = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

arrayAzarNivel1 = arrayAzarNivel1.sort(() => {
    return 0.5 - Math.random()
});



//Array con numeros que seran asignados al ID de cada boton/card
let idBotonesCardsNivel1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];



const contenedorBotonesCards = document.querySelector("#todasLasCardsNivel1");

crearBotonesCards(idBotonesCardsNivel1);



//Funcion para dar vuelta la card y ver la imagen oculta
tematicaSeleccionada = localStorage.getItem("tematicaSeleccionada");

function mostrarImagen(id){
    
    cardConImagenVisible++;


    if(cardConImagenVisible == 1){
        
        primeraCardPresionada = document.getElementById(id);
        imagenPrimeraCard = arrayAzarNivel1[id];

        primeraCardPresionada.innerHTML = `<img src="../Multimedia/Img/${tematicaSeleccionada}/${imagenPrimeraCard}.png" class="botonConImagenVisible" alt="">`;

        primeraCardPresionada.disabled = true;


    }else if(cardConImagenVisible == 2){

        segundaCardPresionada = document.getElementById(id);
        imagenSegundaCard = arrayAzarNivel1[id];

        segundaCardPresionada.innerHTML = `<img src="../Multimedia/Img/${tematicaSeleccionada}/${imagenSegundaCard}.png" class="botonConImagenVisible" alt="">`;
        segundaCardPresionada.disabled = true;

        intentos++;
        actualizarNumeroDeIntentos.innerText = `${intentos}`;
        intentosTotalesNivel1 = actualizarNumeroDeIntentos.innerText;
        
        avisoDeResultado();
        indicarSiguienteNivel(8, intentosTotalesNivel1, 1);
    }
}





botonReiniciar.addEventListener("click", () => {
    limpiarTodosLosPuntosLocalStorage()
});


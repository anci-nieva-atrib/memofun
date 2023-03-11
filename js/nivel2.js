///Esta funcion permite eliminar los puntos sumados solo en el nivel 2 y 3, si el usuario retrocede del nivel 3 al 2, y quiere volver a jugar el nivel 2
controlarPuntajeInicialNivel2()


imprimirBotonReiniciar()


imprimirIntentosRealizadosUltimaVez(2)


actualizarCantidadPuntosAcumulados()



//Array con numeros al azar, duplicandolos porque habra dos imagenes por numero
let arrayAzarNivel2 = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];

arrayAzarNivel2 = arrayAzarNivel2.sort(() => {
    return 0.5 - Math.random()
});



//Array con numeros que seran asignados al ID de cada boton/card
let idBotonesCardsNivel2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
console.log(arrayAzarNivel2)



const contenedorBotonesCards = document.querySelector("#todasLasCardsNivel2");

crearBotonesCards(idBotonesCardsNivel2);



//Funcion para dar vuelta la card y ver la imagen oculta
tematicaSeleccionada = localStorage.getItem("tematicaSeleccionada");

function mostrarImagen(id){

    cardConImagenVisible++;

    if(cardConImagenVisible == 1){

        primeraCardPresionada = document.getElementById(id);
        imagenPrimeraCard = arrayAzarNivel2[id];

        primeraCardPresionada.innerHTML = `<img src="../Multimedia/Img/${tematicaSeleccionada}/${imagenPrimeraCard}.png" class="botonConImagenVisible" alt="">`;

        primeraCardPresionada.disabled = true;


        
    }else if(cardConImagenVisible == 2){

        segundaCardPresionada = document.getElementById(id);
        imagenSegundaCard = arrayAzarNivel2[id];

        segundaCardPresionada.innerHTML = `<img src="../Multimedia/Img/${tematicaSeleccionada}/${imagenSegundaCard}.png" class="botonConImagenVisible" alt="">`;
        segundaCardPresionada.disabled = true;

        intentos++;
        actualizarNumeroDeIntentos.innerText = `${intentos}`;
        intentosTotalesNivel2 = actualizarNumeroDeIntentos.innerText;
        
        avisoDeResultado();
        indicarSiguienteNivel(10, intentosTotalesNivel2,2);
    }
}





botonReiniciar.addEventListener("click", () => {
    controlarPuntajeInicialNivel2()
});

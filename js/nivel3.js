//Esta funcion permite eliminar los puntos sumados solo en el nivel 3
controlarPuntajeInicialNivel3()



imprimirBotonReiniciar()



//Este llamado de funcion imprime los intentos realizados la ultima vez
imprimirIntentosRealizadosUltimaVez(3)



//Actualizacion puntos acumulados
actualizarCantidadPuntosAcumulados()



//Array con numeros al azar, duplicandolos porque habra dos animales por numero
let arrayAzarNivel3 = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12];



//Desordenar el array para que nos de numeros al azar
arrayAzarNivel3 = arrayAzarNivel3.sort(() => {
    return 0.5 - Math.random()
});



//Array con numeros que seran asignados al ID de cada boton/card
let idBotonesCardsNivel3 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
console.log(arrayAzarNivel3)  //este console log permite ver el resultado completar el nivel rápido y testear



//Creamos la variable que tomara al contenedor de todos los botones/card que vamos a crear
const contenedorBotonesCards = document.querySelector("#todasLasCardsNivel3");



//Aqui llamamos la funcion para crear los botones que seran las card con las imagenes
crearBotonesCards(idBotonesCardsNivel3);



//Funcion para dar vuelta la card y ver la imagen oculta
tematicaSeleccionada = localStorage.getItem("tematicaSeleccionada");

function mostrarImagen(id){

    cardConImagenVisible++;

    if(cardConImagenVisible == 1){

        primeraCardPresionada = document.getElementById(id);
        imagenPrimeraCard = arrayAzarNivel3[id];

        primeraCardPresionada.innerHTML = `<img src="../Multimedia/Img/${tematicaSeleccionada}/${imagenPrimeraCard}.png" class="botonConImagenVisible" alt="">`;

        primeraCardPresionada.disabled = true;



    }else if(cardConImagenVisible == 2){

        segundaCardPresionada = document.getElementById(id);
        imagenSegundaCard = arrayAzarNivel3[id];

        segundaCardPresionada.innerHTML = `<img src="../Multimedia/Img/${tematicaSeleccionada}/${imagenSegundaCard}.png" class="botonConImagenVisible" alt="">`;
        segundaCardPresionada.disabled = true;

        intentos++;
        actualizarNumeroDeIntentos.innerText = `${intentos}`;
        intentosTotalesNivel3 = actualizarNumeroDeIntentos.innerText;
        
        avisoDeResultado();
        

        
        if(coincidencias == 12){
            const botonVolverAjugar= document.querySelector("#botonVolverAjugar")
            botonVolverAjugar.innerHTML =`
            <a class="resultados__btn--amarillo"><img src="../Multimedia/Iconos/empezar.svg" class="resultados__btn--icono" alt="icono siguiente nivel">JUGAR TODO DE NUEVO</a>
            `;
            

            swal({
                title: "Excelente!",
                text: "Completaste los tres niveles!",
                icon: "success",
                button: "CERRAR",
            });

            
            sumaPuntosTotales.push(coincidencias);
            actualizarCantidadPuntosAcumulados()

            localStorage.setItem("puntosObtenidos", JSON.stringify(sumaPuntosTotales));
            localStorage.setItem("intentosRealizados3", intentosTotalesNivel3);

            botonVolverAjugar.addEventListener("click", () => localStorage.clear());
        }
    }
}




//Asignar accion al boton reiniciar
botonReiniciar.addEventListener("click", () => {
    controlarPuntajeInicialNivel3()
});
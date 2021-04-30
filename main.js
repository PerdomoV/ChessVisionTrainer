import escaqueAndColor from "./game.js";

// Elementos HTML
var instrucciones = document.getElementsByClassName("instrucciones")[0];
var intentar = document.getElementById("intentar");
var casilla = document.getElementById("casilla");
var light = document.getElementById("light");
var dark = document.getElementById("dark");
var gameContainer = document.getElementsByClassName("game-container")[0];
var falloContainer = document.getElementsByClassName("fallo-container")[0];
var errorDeCasilla = document.getElementById("errorDeCasilla");
var resultadoContainer = document.getElementsByClassName("resultado-container")[0];


//Variables del juego
var escaqueYcolor = [];
var contadorDeAciertos = 0;

intentar.addEventListener("click", () => {
    instrucciones.classList.add("hidden");
    gameContainer.classList.remove("hidden");
       
    escaqueYcolor = escaqueAndColor();
    console.log(escaqueYcolor);
     
    casilla.innerHTML=`${escaqueYcolor[0]}`;
    
});

light.addEventListener("click", () => {
    const escaqueYcolor = escaqueAndColor();
    
    if(light.className.split(" ")[1] === escaqueYcolor[1]){
        console.log(escaqueYcolor);
        casilla.innerHTML=`${escaqueYcolor[0]}`;
        contadorDeAciertos += 1;
        console.log(contadorDeAciertos);
        if(contadorDeAciertos >= 30){
            resultadoContainer.classList.remove("hidden");
            gameContainer.classList.add("hidden");
        }

    }

    else{
        falloContainer.classList.remove("hidden");
        gameContainer.classList.add("hidden");
        errorDeCasilla.innerHTML = `${escaqueYcolor[0]} es Oscura`;
        console.log(contadorDeAciertos);
        
    }
});

dark.addEventListener("click", () => {
    const escaqueYcolor = escaqueAndColor();

    if(dark.className.split(" ")[1] === escaqueYcolor[1]){
        console.log(escaqueYcolor);
        casilla.innerHTML=`${escaqueYcolor[0]}`;  
        contadorDeAciertos += 1;
        console.log(contadorDeAciertos);
        if(contadorDeAciertos >= 30){
            resultadoContainer.classList.remove("hidden");
            gameContainer.classList.add("hidden");
        }
        
    }
    else{
        falloContainer.classList.remove("hidden");
        gameContainer.classList.add("hidden");

        errorDeCasilla.innerHTML = `${escaqueYcolor[0]} es Clara`;
        console.log(contadorDeAciertos);
    }
});

import escaqueAndColor from "./game.js";
import cronometro from "./timer.js";


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
var reintentar = document.getElementsByClassName("reintentar")[0];
var reintentar2 = document.getElementsByClassName("reintentar2")[0];
var clock = document.getElementById("clock");
var timekeeper = document.getElementById("timekeeper");
var score = document.getElementById("score")
var scoreFinalSuccess = document.getElementById("final-score-success")
var scoreFinalFailed = document.getElementById("final-score-failed")




//Variables del juego
var escaqueYcolor = [];
var contadorDeAciertos = 0;
var crono = new cronometro(clock);

intentar.addEventListener("click", () => {

  instrucciones.classList.add("hidden");
  gameContainer.classList.remove("hidden");
  escaqueYcolor = escaqueAndColor();
  console.log(escaqueYcolor);
  crono.start();
  casilla.innerHTML = `${escaqueYcolor[0]}`;
  contadorDeAciertos = 0;
});

reintentar.addEventListener("click", () => {
  falloContainer.classList.add("hidden");
  gameContainer.classList.remove("hidden");
  escaqueYcolor = escaqueAndColor();
  console.log(escaqueYcolor);
  crono.restart();
  crono.start();
  casilla.innerHTML = `${escaqueYcolor[0]}`;
  contadorDeAciertos = 0;

});

reintentar2.addEventListener("click", () => {
  resultadoContainer.classList.add("hidden");

  gameContainer.classList.remove("hidden");
  escaqueYcolor = escaqueAndColor();
  console.log(escaqueYcolor);
  casilla.innerHTML = `${escaqueYcolor[0]}`;
  contadorDeAciertos = 0;

  crono.stop();
  crono.restart();
  crono.start();

});


light.addEventListener("click", () => {

  if (light.className.split(" ")[1] === escaqueYcolor[1]) {
    escaqueYcolor = escaqueAndColor();
    casilla.innerHTML = `${escaqueYcolor[0]}`;
    contadorDeAciertos += 1;
    score.innerText = `Tienes ${contadorDeAciertos} ${contadorDeAciertos === 1 ? `acierto` : `aciertos`} `;
    console.log(contadorDeAciertos);
    if (contadorDeAciertos >= 30) {
      crono.stop()
      let t = crono.getSeconds();
      timekeeper.innerHTML = `${t} seg`;
      resultadoContainer.classList.remove("hidden");
      gameContainer.classList.add("hidden");
      scoreFinalSuccess.innerText = `Tuviste ${contadorDeAciertos} ${contadorDeAciertos === 1 ? `acierto` : `aciertos`} `;
    }

  }

  else {
    crono.stop();
    crono.restart();
    falloContainer.classList.remove("hidden");
    gameContainer.classList.add("hidden");
    errorDeCasilla.innerHTML = `${escaqueYcolor[0]} es Oscura`;
    scoreFinalFailed.innerText = `Tuviste ${contadorDeAciertos} ${contadorDeAciertos === 1 ? `acierto` : `aciertos`} `;
    console.log(contadorDeAciertos);

  }
});

dark.addEventListener("click", () => {

  if (dark.className.split(" ")[1] === escaqueYcolor[1]) {
    escaqueYcolor = escaqueAndColor();
    casilla.innerHTML = `${escaqueYcolor[0]} `;
    contadorDeAciertos += 1;
    score.innerText = `Tienes ${contadorDeAciertos} ${contadorDeAciertos === 1 ? `acierto` : `aciertos`} `;
    console.log(contadorDeAciertos);
    if (contadorDeAciertos >= 30) {
      crono.stop()
      let t = crono.getSeconds();
      timekeeper.innerHTML = `${t} seg`;
      resultadoContainer.classList.remove("hidden");
      gameContainer.classList.add("hidden");
      scoreFinalSuccess.innerText = `Tuviste ${contadorDeAciertos} ${contadorDeAciertos === 1 ? `acierto` : `aciertos`} `;
    }

  }
  else {
    crono.stop();
    crono.restart();
    falloContainer.classList.remove("hidden");
    gameContainer.classList.add("hidden");
    errorDeCasilla.innerHTML = `${escaqueYcolor[0]} es Clara`;
    console.log(contadorDeAciertos);
    scoreFinalFailed.innerText = `Tuviste ${contadorDeAciertos} ${contadorDeAciertos === 1 ? `acierto` : `aciertos`} `;
  }
});

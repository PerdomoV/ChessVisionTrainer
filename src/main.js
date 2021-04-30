var instrucciones = document.getElementsByClassName("instrucciones")[0];
var intentar = document.getElementById("intentar");

var light = document.getElementById("light");
var dark = document.getElementById("dark");
var gameContainer = document.getElementsByClassName("game-container")[0];


intentar.addEventListener("click", () => {
    instrucciones.classList.add("hidden");
    gameContainer.classList.remove("hidden"); 
});

light.addEventListener("click", () => {
    console.log("light");
});

dark.addEventListener("click", () => {
    console.log("dark");
});

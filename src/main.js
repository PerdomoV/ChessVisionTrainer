var juego = ` <strong id='casilla'>
g5
</strong>
<br>
<br>
<div class='colors'>
<div class='color light' id='light'>

</div>
<div class='color dark' id='dark'>

</div>
</div>
<br>
<br>

<div id='timer'>
<strong>35:00 seg</strong>
</div> 
<script src='src/game.js'></script>
`;


var container2 = document.getElementById("container2");

var intentar = document.getElementById("intentar");

intentar.addEventListener("click", () => {
    container2.innerHTML = juego;
});




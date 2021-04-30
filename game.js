export default function escaqueAndColor(){
    let ranFilas = Math.floor(8*Math.random());
    let ranCol = Math.floor(1+(8)*Math.random(1,1));

    let filas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    let color = (ranFilas+ranCol+1) % 2 === 0 ? "dark" : "light";


    let casilla = filas[ranFilas]+ranCol;
    return [casilla, color];
}


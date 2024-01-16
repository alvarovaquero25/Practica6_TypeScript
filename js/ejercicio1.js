"use strict";
let posicion;
let nombre;
let finishedGame;
let hallOfRanking = [];
posicion = 1;
nombre = "Ale";
finishedGame = true;
let jugador1 = [posicion, nombre, finishedGame];
hallOfRanking.push(jugador1);
posicion = 0;
nombre = "Lui";
finishedGame = false;
let jugador2 = [posicion, nombre, finishedGame];
hallOfRanking.push(jugador2);
function printRanking(hallOfRanking) {
    hallOfRanking.forEach(element => {
        console.log(element);
    });
}
printRanking(hallOfRanking);

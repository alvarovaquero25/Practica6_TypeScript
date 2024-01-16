type ranking = [number, string, boolean];
let posicion : number;
let nombre : string;
let finishedGame : boolean;
let hallOfRanking: Array<ranking> = [];
posicion = 1;
nombre = "Ale"
finishedGame = true;
let jugador1 : ranking = [posicion,nombre,finishedGame];
hallOfRanking.push(jugador1)
posicion = 0;
nombre = "Lui";
finishedGame = false;
let jugador2 : ranking = [posicion,nombre,finishedGame];
hallOfRanking.push(jugador2)

function printRanking (hallOfRanking : Array<ranking>):void {
    hallOfRanking.forEach( element => {
        console.log(element)
    });
}
printRanking(hallOfRanking)
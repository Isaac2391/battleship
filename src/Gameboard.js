const {Ship} = require('../src/Ship');
const {Player} = require('../src/Player');

class Gameboard {

    constructor() {

        this.gridSize = 10;
        this.gameGrid = Array(this.gridSize).fill(Array(this.gridSize));
        this.missedAttacksList = []; 

        this.horizontal = false;

        this.shipFleet = [{"Carrier": new Ship(5)}, {"Battleship" : new Ship(4)}, {"Destroyer" : new Ship(3)},
             {"Submarine" : new Ship(3)}, {"Patrol Boat" : new Ship(2)}];

    }

    createGameBoard(){ 

        for (let i = 0; i < this.gridSize; i++) {
            this.gameGrid[i] = [];

            for (let j = 0; j < this.gridSize; j++) {
                this.gameGrid[i][j] = null;
            }

        }
        return this.gameGrid;
    }

    placeShip(Ship,playerMark){

        let shipLength = Ship.length;
        randomCoordinates = this.getRandomPosition()
        x,y = randomCoordinates[0], randomCoordinates[1]

        while (!this.validShipPosition(x,y)){
            
            randomCoordinates = this.getRandomPosition()
            x,y = randomCoordinates[0], randomCoordinates[1]

        }

        if (this.horizontal) {
                for (let i = 0; i < shipLength; i++){
                this.gameGrid[x][y+i] = playerMark;
            } 
        }

        else if (!this.horizontal){
                for (let i = 0; i < shipLength; i++){
                this.gameGrid[x+i][y] = playerMark;
            }    
        }

        this.horizontal = !this.horizontal; 
    }

    getRandomPosition(){

        let minCeiled = Math.ceil(0);
        let maxFloored = Math.floor(10);
        x = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
        y = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);

        return [x,y]
    }

    validShipPosition(x,y,shipLength){

        if (x > 0 || x < 10|| y > 0 || y < 10){
            return false 
        }

        if (this.horizontal){
        return this.gameGrid[x][y] == null && this.gameGrid[x][y + shipLength];
        } 

        else if (!this.horizontal){
        return this.gameGrid[x][y] === null && TouchList.gameGrid[x + shipLength][y];
        }
    }

    receiveAttack(Ship,x,y,PlayerMark){

            if (this.gameGrid[x][y] == "X" || this.gameGrid[x][y] == "O"){
                Ship.hit();
            }

            if (this.gameGrid == null){
                this.trackMissedAttacks(x,y);
            }

        }
    
    trackMissedAttacks(x,y){

    this.missedAttacksList.push([x,y]);

    }

//allShipsSunk(){ 
/* Gameboards should be able to report whether or not all of their ships have been sunk.*///} 
// } 
}

module.exports = {Gameboard}
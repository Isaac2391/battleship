const {Ship} = require('../src/Ship');
const {Player} = require('../src/Player');

// On the grid; null = water, true = ship square, false = hit ship square 
class Gameboard {

    constructor() {

        this.gridSize = 10;
        this.gameGrid = Array.from({ length: this.gridSize },()=> 
                        new Array(this.gridSize).fill(null));        
        this.missedAttacksList = []; 

        this.shipFleet = { "Carrier"   : new Ship(5), 
                           "Battleship": new Ship(4),
                           "Cruiser"   : new Ship(3),
                           "Submarine" : new Ship(3),
                           "Destroyer" : new Ship(2) }
                        }

    initialiseGameBoard(){ 
        for (let i = 0; i < this.gridSize; i++) {
            for (let j = 0; j < this.gridSize; j++) {
                this.gameGrid[i][j] = null;
            }
        } 
    }

    placeShip(Ship,Position){

        let shipLength = Ship.length;

        let x = Position[0]
        let y = Position[1]

        if (Ship.horizontal) {
                for (let i = 0; i < shipLength; i++){
                this.gameGrid[x][y+i] = true;
            } 
        }

        else if (!Ship.horizontal){
                for (let i = 0; i < shipLength; i++){
                this.gameGrid[x+i][y] = true;
            }    
        }
        Ship.horizontal = !Ship.horizontal; 
    }

    getRandomPosition(){

        let minCeiled = Math.ceil(0);
        let maxFloored = Math.floor(10);
        let x = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
        let y = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);

        return [x,y]
    }

    validShipPosition(x,y){

        if (x < 0 || x > 10|| y < 0 || y > 10 || this.missedAttacksList.includes([x,y])){
            return false 
        }

        return (this.gameGrid[x][y] == null);
    
    }

    receiveAttack(Ship,x,y){

            if (this.gameGrid[x][y] == true){
                Ship.hit();
                this.gameGrid[x][y] == false;
            } 
            else if (this.gameGrid[x][y] == null) {
                this.trackMissedAttacks(x,y);
            }
        }
    
    trackMissedAttacks(x,y){

    this.missedAttacksList.push([x,y]);

    }

    printGameBoard(){
        console.log(this.gameGrid);
    }

    allShipsSunk(){ 

        for (let eachShip of Object.values(this.shipFleet)){
            if (eachShip.isSunk() == false){
                return false;
            }
        } 
        return true;
    }

}

module.exports = {Gameboard};
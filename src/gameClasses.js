class Ship {

    constructor(length=1){
        this.length = length; 
        this.numberOfHits = 0; 
        this.sunkStatus = false; 
    }

    hit(){
        this.numberOfHits += 1;
    }

    isSunk(){
        if (this.numberOfHits == this.length){
            this.sunkStatus = true; 
        }
    }

}

class Gameboard {

    constructor(gridSize){
        this.gridSize = gridSize;
        this.gameGrid = Array(gridSize).fill(Array(gridSize))
    }

    createGameBoard(){
        for (let i = 0; i < this.gridSize; i++) {
            this.gameGrid[i] = [];
        for (let j = 0; j < this.gridSize; j++) {
                this.gameGrid[i][j] = null;
            }
        }

    }

    placeShip(){
        /* Gameboards should be able to place ships at specific coordinates by calling the ship 
        factory or class.*/
    }

    receiveAttack(){
    /* Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether
     or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the 
     coordinates of the missed shot.
*/
    }

    trackMissedAttacks(){
       /* Gameboards should keep track of missed attacks so they can display them properly. */


    }

    allShipsSunk(){ 
    /* Gameboards should be able to report whether or not all of their ships have been sunk.*/

        
    }



}

module.exports = {Ship, Gameboard}
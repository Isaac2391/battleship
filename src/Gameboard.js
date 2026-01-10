const {Ship} = require('../src/Ship')

class Gameboard {

    constructor(gridSize=10){
        this.gridSize = gridSize;
        this.gameGrid = Array(gridSize).fill(Array(gridSize))
        this.vertical = false;
    }

    createGameBoard(){
        for (let i = 0; i < this.gridSize; i++) {
            this.gameGrid[i] = [];
        for (let j = 0; j < this.gridSize; j++) {
                this.gameGrid[i][j] = null;
            }
        }

    }

    placeShip(Ship){
        /* Gameboards should be able to place ships at specific coordinates by calling the ship 
        factory or class.*/

        let shipLength = Ship.length;
        
        if (vertical) {            
            return 
        }


    }

    validShipPosition(Ship){

        let shipLength = Ship.length;
        let counter = 0;

        for (let i = 0; i < shipLength; i++){
            for (let j = 0; i < shipLength; i++){

                if (this.gameGrid[i][j] != null)
                    return

                }
            }
        }



    } 
    

//    receiveAttack(){
    /* Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether
     or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the 
     coordinates of the missed shot.
*/
  //  }

   // trackMissedAttacks(){
       /* Gameboards should keep track of missed attacks so they can display them properly. */


    //}

    //allShipsSunk(){ 
    /* Gameboards should be able to report whether or not all of their ships have been sunk.*/

        
    //} 





module.exports = {Gameboard}
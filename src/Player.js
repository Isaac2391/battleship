const { Gameboard } = require('../src/Gameboard');
class Player {
    
    constructor(Gameboard){
        
        this.Gameboard = Gameboard;

    };

    getPlayerShipFleet(){
        return Gameboard.shipFleet;
    };
    
};

module.exports = {Player};
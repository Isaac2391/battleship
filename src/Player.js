const { Gameboard } = require('../src/Gameboard');
class Player {
    
    constructor(playerMark,Gameboard){

        this.PlayerMark = playerMark;
        this.Gameboard = Gameboard;

    };

    getPlayerShipFleet(){
        return Gameboard.shipFleet;
    };


    
};

module.exports = {Player};
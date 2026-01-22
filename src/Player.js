const { Gameboard } = require('../src/Gameboard');
class Player {
    
    constructor(Gameboard){
        this.Gameboard = Gameboard;
        this.myTurn = false;
    };
    
};

class ComputerPlayer extends Player {

    constructor(Gameboard){
        super(Gameboard);
    };

};


module.exports = {Player,ComputerPlayer};
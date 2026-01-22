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

    tryAdjacentSlot(Position){

        const rand = Boolean(Math.round(Math.random()))

        xCoord = Position[0]
        yCoord = Position[1]

        if (rand){
        return [xCoord + 1,yCoord]
        } else if (!rand) {
            return [xCoord, yCoord + 1]
        }
    }
    
};


module.exports = {Player,ComputerPlayer};
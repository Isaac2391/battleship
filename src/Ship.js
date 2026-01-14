class Ship {

    constructor(length){
        this.length = length; 
        this.numberOfHits = 0; 
        this.sunkStatus = false; 
        this.horizontal = false;
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

module.exports = {Ship};
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

module.exports = {Ship};
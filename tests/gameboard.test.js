const { random, exp } = require('mathjs');
const { Gameboard } = require('../src/Gameboard');
const { Ship } = require('../src/Ship');

test('Gameboard creates proper grid', ()=>{

    const testGameBoard = new Gameboard();
    testGameBoard.initialiseGameBoard();

    const emptyGridCopy = JSON.parse(JSON.stringify(EMPTY_GRID));

    expect(testGameBoard.gameGrid).toEqual(emptyGridCopy)

});

test('Gameboard properly validates positions', ()=>{

    const testGameBoard = new Gameboard();
    testGameBoard.initialiseGameBoard();
    const randomPosition = testGameBoard.getRandomPosition(); 

    let x = randomPosition[0];
    let y = randomPosition[1];

    testGameBoard.gameGrid[x][y] = true;

    expect(testGameBoard.validShipPosition(x,y)).toBe(false);
    expect(testGameBoard.validShipPosition(x+1,y+1)).toBe(true);

})

test('Gameboard properly places a vertical Carrier ship starting from [0,0]',()=>{

    let testGameBoard = new Gameboard();
    let initialPosition = [0,0];

    testGameBoard.placeShip(testGameBoard.shipFleet.Carrier,initialPosition);

    for (let i = 0; i < testGameBoard.shipFleet.Carrier.length; i++){
        expect(testGameBoard.gameGrid[i][0]).toBe(true);
    }

})

test('Gameboard knows when all its ships are sunk', ()=>{

    function hitShipUntilSunk(Ship){
        for (let i = 0; i < Ship.length; i++){
            Ship.hit() 
        }
    }

    const testGameBoard = new Gameboard();

    for (eachShip of Object.values(testGameBoard.shipFleet)){
        hitShipUntilSunk(eachShip)
    }

    expect(testGameBoard.allShipsSunk()).toEqual(true)

})



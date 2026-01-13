const { Gameboard } = require('../src/Gameboard');
const { Ship } = require('../src/Ship');

test('Gameboard creates proper grid', ()=>{

    const testGameBoard = new Gameboard();
    testGameBoard.createGameBoard();

    const emptyGridCopy = JSON.parse(JSON.stringify(EMPTY_GRID));

    expect(testGameBoard.gameGrid).toEqual(emptyGridCopy)

});


test.skip('Correctly places a ship on the grid', ()=>{ 

    const testGameBoard = new Gameboard();
    testGameBoard.createGameBoard();

    let testShip = new Ship(3);

    testGameBoard.placeShip()


})


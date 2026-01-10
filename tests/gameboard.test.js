const { Gameboard } = require('../src/gameboard')


test('Gameboard creates proper grid', ()=>{

    const testGameBoard = new Gameboard(3);

    testGameBoard.createGameBoard()

    expect(testGameBoard.gameGrid).toEqual([[null,null,null],
                                         [null,null,null], 
                                         [null,null,null]])
                                         
})
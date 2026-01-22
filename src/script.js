const { Player } = require('../src/Player');
const { Ship } = require('../src/Ship');
const { Gameboard } = require('..src/Gameboard');

const playerGridDisplay = document.getElementById('PlayerGrid')
const computerGridDisplay = document.getElementById('ComputerGrid')

function startGame(Player){

    let humanPlayer = new Player;
    let computerPlayer = new Player;

    humanPlayer.Gameboard.initialiseGameboard();
    computerPlayer.Gameboard.initialiseGameboard();

    


}

startGame(Player)
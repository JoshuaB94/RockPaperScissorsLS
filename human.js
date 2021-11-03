const {GamePlayer} = require("./player");
const prompt = require("prompt-sync")();

class Human extends GamePlayer {
    constructor(){
        console.log("Enter in your player name.")
        let playerName = prompt();
        super(playerName);
    }
}

module.exports = {
    HumanPlayer: Human,
}
// const prompt = require("prompt-sync")();

class Player {
    constructor(name){
        this.name = name;
        this.handGestures = ['Rock','Paper','Scissors','Lizard','Spock'];
        this.pointTally = 0;
    }

    pointChange(){
        this.pointTally = this.pointTally + 1;
        console.log(this.pointTally);
        return this.pointTally
    }
}
let victor = new Player;
victor.pointChange();
victor.pointChange();
victor.pointChange();

module.exports = {
    GamePlayer: Player
}
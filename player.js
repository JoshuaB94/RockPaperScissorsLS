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

module.exports = {
    GamePlayer: Player
}
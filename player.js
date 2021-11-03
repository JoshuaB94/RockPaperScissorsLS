const prompt = require("prompt-sync")();

class Player {
    constructor(name) {
        this.name = name;
        this.handGestures = ['Rock','Paper','Scissors','Lizard','Spock'];
        this.pointTally = 0;
    }
}
module.exports = {
    player = Player,
}
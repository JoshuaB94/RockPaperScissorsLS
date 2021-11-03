const { GamePlayer } = require("./player");

class Ai extends GamePlayer{
    constructor(name){
        super(name);
        this.name = "Rob the Robot"
    }
}

module.exports = {
    Robot: Ai,
}
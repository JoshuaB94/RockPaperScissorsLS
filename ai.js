const { GamePlayer } = require("./player");

class Ai extends GamePlayer{
    constructor(name){
        super(name);
        this.name = "Rob the Robot"
    }
    selectHandGesture(){
        let aiSelection = Math.floor(Math.random() * this.handGestures.length + 1);
        console.log(this.handGestures[aiSelection]);
    }
}   

module.exports = {
    Robot: Ai,
}
const { GamePlayer } = require("./player");

class Ai extends GamePlayer{
    constructor(name){
        super(name);
        this.name = "Rob the Robot"
    }
    AiGestureSelection(){
        let aiSelection = Math.floor(Math.random() * this.handGestures.length + 1);
        console.log(this.handGestures[aiSelection]);
    }
}   
let rob = new Ai();
rob.AiGestureSelection();
module.exports = {
    Robot: Ai,
}
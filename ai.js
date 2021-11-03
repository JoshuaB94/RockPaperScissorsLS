const { GamePlayer } = require("./player");

class Ai extends GamePlayer{
    constructor(name){
        super(name);
        this.handGestures = Math.floor(Math.random() * this.handGestures.length) + 1;
    }

randomizeHandGestures(){
    console.log(`3...2..1.${this.handGestures}`);
}
}
const prompt = require("prompt-sync")();

class Player {
    constructor(name) {
        this.name = name;
    }
}
module.exports = {
    player = Player,
}
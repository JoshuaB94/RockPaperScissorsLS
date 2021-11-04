const prompt = require("prompt-sync")();
let {Robot} = require("./ai");
const {HumanPlayer} = require("./human");

class Game {

    constructor(){
        this.playerOne;
        this.playerTwo;
    }

    welcomeDisplay(){
        console.log("Welcome to RPSLizardSpock!");
        console.log("Before we begin, let's go over the rules.  This is a variation of the classic rock, paper, scissors game but with a new twist.");
        console.log("All you need to know is: Rock crushes scissors, scissors cuts paper, \n paper covers rock, rock smashes lizard, lizard poisons spock, spock smashes scissors, \n scissors decapitate lizard, lizard eats paper, paper disproves spock, spock vaporizes rock, \n and rock crushes scissors!");
        this.playerOne = new HumanPlayer();
        this.playerTwo = new Robot();
    }


    runRPSLS(){
        console.log(`${this.playerOne.name} vs ${this.playerTwo.name}... BEGIN!`);
        console.log("Please enter your gesture selection: \n 1 - Rock, 2 - Paper, 3 - Scissors, 4 - Lizard, 5 - Spock.");

        let playerOneSelection = prompt()
        let playerTwoSelection = prompt()
        let playerSelectedHandGesture;

        selectHandGesture(playerOneSelection, this.playerOne);
        selectHandGesture(playerTwoSelection, this.playerTwo);

    runGame(){
        this.welcomeDisplay();
        this.runRPSLS();
        }
}

function selectHandGesture(playerSelection,player){
    let playerSelectedHandGesture;
    if(playerSelection == 1){
        playerSelectedHandGesture = player.handGestures[0];
        console.log(playerSelectedHandGesture);
        return playerSelectedHandGesture
    }
    else if(playerSelection == 2) {
        playerSelectedHandGesture = player.handGestures[1];
        console.log(playerSelectedHandGesture);
        return playerSelectedHandGesture
    }
    else if(playerSelection == 3) {
        playerSelectedHandGesture = player.handGestures[2];
        console.log(playerSelectedHandGesture);
        return playerSelectedHandGesture
        }
    else if(playerSelection == 4) {
        playerSelectedHandGesture = player.handGestures[3];
        console.log(playerSelectedHandGesture);
        return playerSelectedHandGesture
        }
    else if(playerSelection == 5) {
        playerSelectedHandGesture = player.handGestures[4];
        console.log(playerSelectedHandGesture);
        return playerSelectedHandGesture
    } 
    else {
        console.log("Invalid selection, please try again!");
        selectHandGesture()
    }
    // this.runRPSLS();
}
module.exports = {
    Game: Game,
}
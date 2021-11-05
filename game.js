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
        console.log("Would you like to play against another person or against AI? 1 for human or 2 for AI?");
        let playOption = prompt();
        switch(playOption){
            case "1": 
                this.playerTwo = new HumanPlayer();
                break;
            case "2":
                this.playerTwo = new Robot();
                break;
            default: 
                console.log("Invalid response, please try again!");
                return
        }

    }


    runRPSLS(){
        console.log(`${this.playerOne.name} vs ${this.playerTwo.name}... BEGIN!`);
        
        while(this.playerOne.pointTally < 3 && this.playerTwo.pointTally < 3){
            // selectHandGesture method calls will RETURN the strings for each gesture
            let playerOneChoice = this.playerOne.selectHandGesture();
            let playerTwoChoice = this.playerTwo.selectHandGesture();
            if (playerOneChoice === "Rock" && playerTwoChoice === "Lizard"){
                this.playerOne.pointTally = this.playerOne.pointTally++;
                return;
            }
        }

            // compareGestures(playerOneChoice, playerTwoChoice)
            // compare the gestures and assign point to winner player
            // if (playerOneChoice === "Rock" && playerTwoChoice === "Paper") ---> this.playerOne.pointTally++

        //     console.log("Who won the round? Press 1 for player one and 2 for player two");
        //     let userTally = prompt();
        //     if(userTally == "1"){
        //         this.playerOne.pointChange();
        //     }
        //     else if(userTally == "2"){
        //         this.playerTwo.pointChange();
        //     }
        //     else {
        //         console.log("Please select either 1 or 2.  Try again!");

        //     }
        // }
     }
     declareWinner(){
         if (this.playerOne.pointTally > this.playerTwo.pointTally){
             console.log(`The winner is ${this.playerOne.name}!`)
         }
         else {
             console.log(`The winner is ${this.playerTwo.name}!`)
         }
     }
    runGame(){
        this.welcomeDisplay();
        this.runRPSLS();
        this.declareWinner();
        }
}

module.exports = {
    Game: Game,
}

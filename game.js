const prompt = require("prompt-sync")();
let {Robot} = require("./ai");
let {HumanPlayer} = require("./human");

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
            let playerOneGesture = this.playerOne.selectHandGesture();
            let playerTwoGesture = this.playerTwo.selectHandGesture();
            this.compareGestures(playerOneGesture, playerTwoGesture)
            // compareGestures(playerOneChoice, playerTwoChoice)
            // compare the gestures and assign point to winner player
            // if (playerOneChoice === "Rock" && playerTwoChoice === "Paper") ---> this.playerOne.pointTally++   
        }
    }

    compareGestures(playerOneChoice, playerTwoChoice){
        //Rock Comparison
        if(playerOneChoice === "Rock" && playerTwoChoice === "Scissors"){
            this.playerOne.pointTally++;
            console.log(`${this.playerOne.name} won this round!`);
        } else if(playerTwoChoice === "Paper" && playerOneChoice === "Rock"){
            this.playerTwo.pointTally++;
            console.log(`${this.playerTwo.name} won this round`);
        }
        if(playerOneChoice === "Rock" && playerTwoChoice === "Lizard"){
            this.playerOne.pointTally++;
            console.log(`${this.playerOne.name} won this round!`);
        } else if(playerTwoChoice === "Spock" && playerOneChoice === "Rock"){
            this.playerTwo.pointTally++;
            console.log(`${this.playerTwo.name} won this round`);
        }
        //Scissors Comparison
        if(playerOneChoice === "Scissors" && playerTwoChoice === "Paper"){
            this.playerOne.pointTally++;
            console.log(`${this.playerOne.name} won this round!`);
        } else if(playerTwoChoice === "Spock" && playerOneChoice === "Scissors"){
            this.playerTwo.pointTally++;
            console.log(`${this.playerTwo.name} won this round`);
        }
        if(playerOneChoice === "Scissors" && playerTwoChoice === "Lizard"){
            this.playerOne.pointTally++;
            console.log(`${this.playerOne.name} won this round!`);
        } else if(playerTwoChoice === "Rock" && playerOneChoice === "Scissors"){
            this.playerTwo.pointTally++;
            console.log(`${this.playerTwo.name} won this round`);
        }
        //Paper Comparison
        if(playerOneChoice === "Paper" && playerTwoChoice === "Rock"){
            this.playerOne.pointTally++;
            console.log(`${this.playerOne.name} won this round!`);
        } else if(playerTwoChoice === "Scissors" && playerOneChoice === "Paper"){
            this.playerTwo.pointTally++;
            console.log(`${this.playerTwo.name} won this round`);
        }
        if(playerOneChoice === "Paper" && playerTwoChoice === "Spock"){
            this.playerOne.pointTally++;
            console.log(`${this.playerOne.name} won this round!`);
        } else if(playerTwoChoice === "Lizard" && playerOneChoice === "Paper"){
            this.playerTwo.pointTally++;
            console.log(`${this.playerTwo.name} won this round`);
        }
        //Lizard Comparison
        if(playerOneChoice === "Lizard" && playerTwoChoice === "Spock"){
            this.playerOne.pointTally++;
            console.log(`${this.playerOne.name} won this round!`);
        } else if(playerTwoChoice === "Rock" && playerOneChoice === "Lizard"){
            this.playerTwo.pointTally++;
            console.log(`${this.playerTwo.name} won this round`);
        }
        if(playerOneChoice === "Lizard" && playerTwoChoice === "Paper"){
            this.playerOne.pointTally++;
            console.log(`${this.playerOne.name} won this round!`);
        } else if(playerTwoChoice === "Scissors" && playerOneChoice === "Lizard"){
            this.playerTwo.pointTally++;
            console.log(`${this.playerTwo.name} won this round`);
        }
        //Spock Comparison
        if(playerOneChoice === "Spock" && playerTwoChoice === "Rock"){
            this.playerOne.pointTally++;
            console.log(`${this.playerOne.name} won this round!`);
        } else if(playerTwoChoice === "Paper" && playerOneChoice === "Spock"){
            this.playerTwo.pointTally++;
            console.log(`${this.playerTwo.name} won this round`);
        }
        if(playerOneChoice === "Spock" && playerTwoChoice === "Scissors"){
            this.playerOne.pointTally++;
            console.log(`${this.playerOne.name} won this round!`);
        } else if(playerTwoChoice === "Lizard" && playerOneChoice === "Spock"){
            this.playerTwo.pointTally++;
            console.log(`${this.playerTwo.name} won this round`);
        }
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

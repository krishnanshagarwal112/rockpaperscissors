let numberOfTimes = prompt("Enter number of times you want to play");
items = ["rock","paper","scissor"]

function computerInput(array){
    let computerInput = array[Math.floor(Math.random()*3)];
    return computerInput;
}

function playRound(user, computer){ 
    if (user == "rock"){
        if(computer == "paper"){
            return "Computer wins"
        }
        if(computer == "scissor"){
            return "User wins"
        }
        if(computer == "rock"){
            return "Tie"
        }
    }
    if (user == "paper"){
        if(computer = "scissor"){
            return "Computer wins"
        }
        if(computer = "rock"){
            return "User wins"
        }
        if(computer == "paper"){
            return "Tie"
        }
    }
    if (user == "scissor"){
        if(computer = "rock"){
            return "Computer wins"
        }
        if(computer = "paper"){
            return "User wins"
        }
        if(computer == "scissor"){
            return "Tie"
        }
    }
}

function playMultipleRound(){
    for(let i = 0; i < numberOfTimes; i++){
        let userInput = (prompt("Enter any of rock paper scissor ")).toLowerCase();
        console.log(userInput);
        let cInput = computerInput(items);
        console.log(cInput);
        playRound(userInput,cInput);
        console.log(playRound(userInput,cInput));
    }
}

playMultipleRound()


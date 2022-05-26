let userInput = (prompt("Enter any of rock paper scissor ")).toLowerCase();
console.log("User Input > ",userInput);

items = ["rock","paper","scissor"]

function computerInput(array){
    let computerInput = array[Math.floor(Math.random()*3)];
    return computerInput;
}

console.log("Computer Input > ",computerInput(items));

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

console.log(playRound(userInput,computerInput(items)));


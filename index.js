const buttons = document.querySelectorAll("button");
const resultDiv = document.getElementById('result');
const userScore = document.getElementById('userScore');
const computerScore = document.getElementById('computerScore');
const tieScore = document.getElementById('tieScore');
const nGames = document.getElementById('nGames');

let userCounter = 0;
let computerCounter = 0;
let tieCounter = 0;




for(let i = 0 ; i < 3 ; i++){
    buttons[i].addEventListener("click",function(){
        let computer = computerInput(array);
        let result =  playRound(buttons[i].dataset.name, computer);
        resultDiv.innerHTML =  result;
        if(result == "Computer Wins :("){
            computerCounter++;
        }
        if(result == "User Wins :)"){
            userCounter++;
        }
        if(result == "Tie :(:"){
            tieCounter++;
        }

        let totalgames = userCounter + computerCounter + tieCounter;

        nGames.innerHTML = "Number of games played > " + totalgames
        userScore.innerHTML = userCounter;
        computerScore.innerHTML = computerCounter;
        tieScore.innerHTML = tieCounter;

    })

}



array = ["Rock","Paper","Scissor"];

function computerInput(array){
    let computerInput = array[Math.floor(Math.random()*3)];
    return computerInput;
}



function playRound(user, computer){ 
    if (user == "Rock"){
        if(computer == "Paper"){
            return "Computer Wins :("
        }
        if(computer == "Scissor"){
            return "User Wins :)"
        }
        if(computer == "Rock"){
            return "Tie :(:"
        }
    }
    if (user == "Paper"){
        if(computer == "Scissor"){
            return "Computer Wins :("
        }
        if(computer == "Rock"){
            return "User Wins :)"
        }
        if(computer == "Paper"){
            return "Tie :(:"
        }
    }
    if (user == "Scissor"){
        if(computer == "Rock"){
            return "Computer Wins :("
        }
        if(computer == "Paper"){
            return "User Wins :)"
        }
        if(computer == "Scissor"){
            return "Tie :(:"
        }
    }
}



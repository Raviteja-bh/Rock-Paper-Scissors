//Moving Letters
var typed = new Typed(".welcome", {
    strings: ["Welcome To RPS-Games!"],
    typeSpeed: 150,
    backSpeed: 150,
});

//Rock-Paper_Scissors Logic.
let playRound = (computerChoice, playerChoice) => {
    if(computerChoice == "rock" && playerChoice == "scissors"){
        return "Compter wins bcoz Rock beats Scissors :(";
    }else if(computerChoice == "paper" && playerChoice == "rock"){
        return "Computer wins bcoz Paper beats Rock :(";
    }else if(computerChoice == "scissors" && playerChoice == "paper"){
        return "Computer wins bcoz Scissors beats Paper :(";
    }else if(computerChoice == "scissors" && playerChoice == "rock"){
        return "You win! bcoz Rock beats Scissors :)";
    }else if(computerChoice == "rock" && playerChoice == "paper"){
        return "You win! bcoz Paper beats Rock :)";
    }else if(computerChoice == "paper" && playerChoice == "scissors"){
        return "You win! bcoz Scissors beats Paper";
    }else {
        return "Whoops! Tie.";
    }
};

// function game(){
//     for(let i = 0; i<3 ; i++){
//         console.log(playRound(computer(), player()));
//     }
// }

function getComputerChoice() {
    const arr = ["Rock", "Paper", "Scissors"];
    let num = parseInt(Math.random() * 3);
    // console.log(arr[num]);
    return arr[num].toLowerCase();
}

// function getPlayerChoice() {
//     let ans = prompt("Enter your choice of word: Rock, Paper, Scissors: ");
//     return ans.toLowerCase();
// }

const computer = getComputerChoice;
const player = getPlayerChoice;

// game();
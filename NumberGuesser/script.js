let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 9 + 1);
}

const compareGuesses = (user, comp, secretTarget = generateTarget()) => {
    console.log(secretTarget);
    const diffBetUserAndSecret = Math.abs(user - secretTarget);
    const diffBetCompAndSecret = Math.abs(comp - secretTarget);
    
    if(diffBetUserAndSecret <= diffBetCompAndSecret){
        return true;
    } else {
        return false; 
    }
}

// console.log(compareGuesses(5, 0))

const updateScore = (winner) => {
    if(winner === "human"){
        humanScore++; 
    } else {
        computerScore++;
    }
}

const advanceRound = () => {
    currentRoundNumber++; 
}
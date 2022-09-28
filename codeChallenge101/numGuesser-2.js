let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}
const compareGuesses = (userGuess, compGuess, targetNum) => {
    let user = Math.abs(targetNum - userGuess);
    let comp = Math.abs(targetNum - compGuess);
    //console.log(user);
    //console.log(comp);
    if (user <= comp) {
        return true
    } else if (comp < user) {
        return false
    }
}
//console.log(compareGuesses(15, 7, 10));

const updateScore = strng => {
    if (strng === 'human') {
        humanScore++;
    } else if (strng === 'computer') {
        computerScore++;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}

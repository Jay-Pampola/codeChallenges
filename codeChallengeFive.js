const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb' || userInput === 'poop') {
        return userInput;
    } else {
        console.log('Error! Invalid input.');
    }
};

// console.log(getUserChoice('rock'));
// console.log(getUserChoice('sword'));

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

// console.log(getComputerChoice('paper'));
// console.log(getComputerChoice('scissors'));
// console.log(getComputerChoice('rock'));

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
        return 'You won!'
    }
    if (userChoice === 'poop') {
        return 'You lose!'
    }
    if (userChoice === computerChoice) {
        return 'The game is a tie!'
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'You lose! Computer won.';
        } else {
            return 'Computer lose. You Won!'
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'You lose! Computer wins';
        } else {
            return 'Computer lose. You Won!'
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'You lose! Computer wins';
        } else {
            return 'Computer lose. You Won!'
        }
    }
};

const playGame = () => {
    const userChoice = getUserChoice('poop');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();
function getUserChoice() {
  var userInput = prompt('What will be your choice - rock, scissors or paper?');
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Your choice is wrong. Please, choose rock, paper or scissors!');
  }
}

function getComputerChoice() {
  computerRequest = Math.floor(Math.random() * 3);
  if (computerRequest === 0) {
    return 'rock';
  } else if (computerRequest === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'Tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      return 'You won!';
    } else {
      return 'Computer won!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer won!';
    } else {
      return 'You won!';      
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer won!';
    } else {
      return 'You won!';
    }
  }
}

function playGame() {
  var userChoice = getUserChoice();
  var computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('Computer threw: ' + computerChoice);
  
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();

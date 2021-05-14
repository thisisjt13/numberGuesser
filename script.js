let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
return (Math.floor(Math.random() * 10))
}

const getAbsoluteDistance = (targetNumber, playerGuess) => Math.abs(targetNumber - playerGuess);
const compareGuesses = (userGuess, computerGuess, targetNumber) => {
if (userGuess < 0 || userGuess > 9) {
    window.alert('You must choose a number between 0 and 9!') 
  }
  const differenceUser = getAbsoluteDistance(targetNumber,userGuess)
  const differenceComp = getAbsoluteDistance(targetNumber,computerGuess)
if (differenceUser <= differenceComp) {
    return true
    } else {
    return false
  }
}
updateScore = winner => {
  if (winner === 'human') {
    return humanScore++
  } else if (winner === 'computer') {
    return computerScore++
  }
}
const advanceRound = () => {
  currentRoundNumber + 1
}



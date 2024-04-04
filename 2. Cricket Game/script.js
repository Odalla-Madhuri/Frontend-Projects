let scoreStr = localStorage.getItem('Score');
let score;
resetScore(scoreStr);

function resetScore(scoreStr) {
  score = scoreStr ? JSON.parse(scoreStr) : {
    win:0,
    lost:0,
    tie:0,
  };
  
  score.displayScore = function() {
    return `Score =  Won: ${score.win}, Lost:${score.lost}, Tie:${score.tie}`;
  };

  showResult();
}

function generateComputerChoice() {
  let computerChoice;
  let randomNumber = Math.random() * 3;
  if (randomNumber > 0 && randomNumber <= 1) {
    computerChoice = 'Bat';
  } else if (randomNumber >1 && randomNumber <= 2) {
    computerChoice = 'Ball';
  } else {
    computerChoice = 'Stump';
  }
  return computerChoice;
}

function getResult(userChoice, computerChoice) {
  if (userChoice === 'Bat') {
    if (computerChoice === 'Ball') {
      score.win++;
      return 'User won';
    } else if (computerChoice === 'Bat') {
      score.tie++;
      return `It's a tie`;
    } else {
      score.lost++;
      return 'User lost';
    }
  } else if (userChoice = 'Ball') {
    if (computerChoice === 'Ball') {
      score.tie++;
      return `It's a tie`;
    } else if (computerChoice === 'Bat') {
      score.lost++;
      return `User lost`;
    } else {
      score.win++;
      return 'User Won';
    }
  } else {
    if (computerChoice === 'Ball') {
      score.lost++;
      return 'User lost';
    } else if (computerChoice === 'Bat') {
      score.win++;
      return `User Won`;
    } else {
      score.tie++;
      return `It's a tie`;
    }
  }
}

function showResult(userChoice, computerChoice, result) {
  localStorage.setItem('Score', JSON.stringify(score));
  document.querySelector('#user-move').innerText = 
    userChoice ? `You have choosen ${userChoice}` : ' ';
  document.querySelector('#computer-move').innerText =    computerChoice ? `You have choosen ${computerChoice}` : ' ';
  document.querySelector('#result').innerText = 
    result ||  '';
  document.querySelector('#score').innerText = score.displayScore();
} 
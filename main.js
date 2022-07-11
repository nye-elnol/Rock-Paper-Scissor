function computerPlay(){
  let x = parseInt(Math.random()*10);
  if (x<3){
    return 'Rock';
  }
  else if (x<6){
    return 'Paper';
  }
  else {
    return 'Scissor';
  }
}

function playRound(playerSelection, computerSelection){
  let pop = `Sorry! Can't handle ${playerSelection}`;
  let ps = playerSelection.toLowerCase();
  let cs = computerSelection;
  let iPlayer = 0;
  let iComputer = 0;
  if (cs === 'Rock' && ps === 'rock'){
    return 'No winner! Rock can\'t beat a rock';
  }
  else if (cs === 'Rock' && ps === 'paper'){
    iPlayer++;
    return 'You win! Paper beats rock!';
  }
  else if (cs === 'Rock' && ps === 'scissor'){
    iComputer++;
    return 'You lose! Rock beats scissor!';
  }
  else if (cs === 'Paper' && ps === 'rock'){
    iComputer++;
    return 'You lose! Paper beats a rock!';
  }
  else if (cs === 'Paper' && ps === 'paper'){
    return 'Now winner! Paper can not beat a paper!';
  }
  else if (cs === 'Paper' && ps === 'scissor'){
    iPlayer++;
    return 'You win! Scissor beats a paper!';
  }
  else if (cs === 'Scissor' && ps === 'rock'){
    iPlayer++;
    return 'You win! Rock beats a scissor!';
  }
  else if (cs === 'Scissor' && ps === 'paper'){
    iComputer++;
    return 'You lose! Scissor beats a paper!';
  } 
  else if (cs === 'Scissor' && ps === 'scissor'){
    return 'No winner! Scissor can\'t beat scissor!';
  }
  else {
    return pop;
  }
}

function game(){
  let x;
  for (let i=0;i<5;i++){
    x = prompt('Enter Your Value: ');
    playRound(x, computerPlay());
  }
}
console.log(game())
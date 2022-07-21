/* 
  This file contains the old version of the program, before adding the UI
*/

function computerPlay(){
  let x =  parseInt(Math.random()*3);
  switch(x){
    case 0:
      return 'Rock';
    case 1:
      return 'Scissor';
    case 2:
      return 'Paper';
  }
}

function game(){
  let iComputer = 0;
  let iPlayer = 0;
  let rUser;
  let er = 'Can\'t Handle The Input!';

  for (let i = 0; i<5;i++){
    computerPlay();
    rUser = prompt('Rock or Paper or Scissor? ').toLowerCase();
    if ((rUser==='paper'&&computerPlay()==='Rock')||(rUser==='rock'&&computerPlay()==='Scissor')||rUser==='scissor'&&computerPlay()==='Paper'){
      ++iPlayer;
    }
    else if((rUser==='paper'&&computerPlay()==='Scissor')||(rUser==='rock'&&computerPlay()==='Paper')||(rUser==='scissor'&&computerPlay()==='Rock')){
      ++iComputer;
    }
    if (iPlayer>iComputer){
      console.log('You won this round');
    }
    else if (iComputer>iPlayer){
      console.log('You lost this round');
    }
    else {
      console.log('No winner in this round');
    }
  }

  if (iComputer>iPlayer){
    return `You lost! The computer had ${iComputer} points, and you had ${iPlayer}`;
  }
  else if (iComputer<iPlayer){
    return `You won! You had ${iPlayer} points, and the computer had ${iComputer}`;
  }
  else {
    return `No winner! You had ${iPlayer} points, and the computer had ${iComputer}`;
  }
}
console.log(game());
/*
  Round nb 0 is done! You got 0 points and the computer got 0 points Here, were equality
  Round nb 1 is done! You got 1 points and the computer got 0 points here I won
  Round nb 2 is done! You got 1 points and the computer got 1 points here the computer won
  Round nb 3 is done! You got 2 points and the computer got 1 points here i won
  Round nb 4 is done! You got 2 points and the computer got 1 points here no winner
*/

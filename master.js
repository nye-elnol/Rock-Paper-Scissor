/*
  This file contains the new version of the Scissor-Rock-Paper program
*/
const btnPaper = document.getElementById('one');
const btnRock = document.getElementById('two');
const btnScissor = document.getElementById('three');

let myDiv = document.createElement('div');
document.body.appendChild(myDiv);
myDiv.setAttribute('id', 'myDivOne');
let divOne = document.getElementById('myDivOne');


function computerPlay(){
  let x = parseInt(Math.random()*3);
  switch(x){
    case 0:
      return 'Paper';
    case 1:
      return 'Rock';
    case 2:
      return 'Scissor';
  }
}

let com = 0;
let user = 0;
let clicked = 0;
let x = 0;
btnPaper.addEventListener('click', (e) => {
  switch(computerPlay()){
    case 'Rock':
      user++;
      break;
    case 'Scissor':
      com++;
      break;
  }
  console.log(`Computer: ${com} You: ${user}`);
  x = user;
  y = com;
});
console.log(x);
btnRock.addEventListener('click', (e) => {
  switch(computerPlay()){
    case 'Paper':
      com++;
      break;
    case 'Rock':
      break;
    case 'Scissor':
      user++;
      break;
  }
  clicked++;
});

btnScissor.addEventListener('click', (e) => {
  switch(computerPlay()){
    case 'Paper':
      user++;

      break;
    case 'Rock':
      com++;
      break;
    case 'Scissor':
      break;
  }
  clicked++;
});





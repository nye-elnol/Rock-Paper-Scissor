const btnOne = document.getElementById('one');
const btnTwo = document.getElementById('two');
const btnThree = document.getElementById('three');

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

btnOne.addEventListener('click', (e) => {
  let com = computerPlay();
  if (e.target.textContent === com){
    console.log('You win');
  } else {
    divOne.textContent = `You Got ${e.target.textContent}, But The Computer Got ${com}`
  }
});

btnTwo.addEventListener('click', (e) => {
  let com = computerPlay();
  if (e.target.textContent === com){
    console.log('You win');
  } else {
    divOne.textContent = `You Got ${e.target.textContent}, But The Computer Got ${com}`
  }
});

btnThree.addEventListener('click', (e) => {
  let com = computerPlay();
  if (e.target.textContent === com){
    console.log('You win');
  } else {
    divOne.textContent = `You Got ${e.target.textContent}, But The Computer Got ${com}`
  }
});

let myDiv = document.createElement('div');
document.body.appendChild(myDiv);
myDiv.setAttribute('id', 'myDivOne');
let divOne = document.getElementById('myDivOne');



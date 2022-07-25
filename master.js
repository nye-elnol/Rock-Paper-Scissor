let myBtns = document.createElement('div');
myBtns.className = 'container';
myBtns.style.cssText = 'display: flex; justify-content: center; gap: 25px; ';

let pBtn = document.createElement('button');
pBtn.textContent = 'Paper';
pBtn.id = 'paper';

let rBtn = document.createElement('button');
rBtn.textContent = 'Rock';
rBtn.id = 'rock';

let sBtn = document.createElement('button');
sBtn.textContent = 'Scissor';
sBtn.id = 'scissor';

let btnGrp = [pBtn, rBtn, sBtn];
for (let i = 0; i<btnGrp.length;i++){
  btnGrp[i].style.cssText = 'border-radius: 25px; width: 150px; height: 40px; background-color: #ede; color: blue';
}

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

let myDiv = document.createElement('div');
myDiv.style.cssText = 'padding: 25px; font-size: 24px; height: 400px; background-color: #fecdff; border-radius: 25px; width: 555px; margin: 33px auto; font-family: arial';



let com = 0;
let usr = 0;

pBtn.addEventListener('click', function(){
  if (usr<5 && com<5){
    let comResult = computerPlay();
    switch(comResult){
      case 'Paper':
        myDiv.innerHTML = `<p>You got Paper and the computer got Paper!</p><br><p>Scores:<br>You: ${usr} Computer: ${com}</p>`;
        break;
      case 'Rock':
        usr++;
        myDiv.innerHTML = `<p>You got Paper and the computer got Rock!</p><br><p>Scores:<br>You: ${usr} Computer: ${com}</p>`;
        break;
      case 'Scissor':
        com++;
        myDiv.innerHTML = `<p>You got Paper and the computer got Scissor!</p><br><p>Scores:<br>You: ${usr} Computer: ${com}</p>`;
        break;
    } if (usr>=5){
      myDiv.innerHTML = `<p>You Win!<br><br>You Got ${usr} point(s), and the computer got: ${com} point(s)</p><br><br><br><br><br><br><br><br><p>For further trials, reload the page</p>`;
    } else if (com>=5){
      myDiv.innerHTML = `<p>You Lost!<br><br>You Got ${usr} point(s), and the computer got: ${com} point(s)</p><br><br><br><br><br><br><br><br><p>For further trials, reload the page</p>`;
    }
  } 
});

rBtn.addEventListener('click', function(){
  if (usr<5 && com<5){
    let comResult = computerPlay();
    switch(comResult){
      case 'Paper':
        com++;
        myDiv.innerHTML = `<p>You got Rock and the computer got Paper!</p><br><p>Scores:<br>You: ${usr} Computer: ${com}</p>`;
        break;
      case 'Rock':
        myDiv.innerHTML = `<p>You got Rock and the computer got Rock!</p><br><p>Scores:<br>You: ${usr} Computer: ${com}</p>`;
        break;
      case 'Scissor':
        usr++;
        myDiv.innerHTML = `<p>You got Rock and the computer got Scissor!</p><br><p>Scores:<br>You: ${usr} Computer: ${com}</p>`;
        break;
    } if (usr>=5){
      myDiv.innerHTML = `<p>You Win!<br><br>You Got ${usr} point(s), and the computer got: ${com} point(s)</p><br><br><br><br><br><br><br><br><p>For further trials, reload the page</p>`;
    } else if (com>=5){
      myDiv.innerHTML = `<p>You Lost!<br><br>You Got ${usr} point(s), and the computer got: ${com} point(s)</p><br><br><br><br><br><br><br><br><p>For further trials, reload the page</p>`;
    }
  } 
});

sBtn.addEventListener('click', function(){
  if (usr<5 && com<5){
    let comResult = computerPlay();
    switch(comResult){
      case 'Paper':
        usr++;
        myDiv.innerHTML = `<p>You got Scissor and the computer got Paper!</p><br><p>Scores:<br>You: ${usr} Computer: ${com}</p>`;
        break;
      case 'Rock':
        com++;
        myDiv.innerHTML = `<p>You got Scissor and the computer got Rock!</p><br><p>Scores:<br>You: ${usr} Computer: ${com}</p>`;
        break;
      case 'Scissor':
        myDiv.innerHTML = `<p>You got Scissor and the computer got Scissor!</p><br><p>Scores:<br>You: ${usr} Computer: ${com}</p>`;
        break;
    } if (usr>=5){
      myDiv.innerHTML = `<p>You Win!<br><br>You Got ${usr} point(s), and the computer got: ${com} point(s)</p><br><br><br><br><br><br><br><br><p>For further trials, reload the page</p>`;
    } else if (com>=5){
      myDiv.innerHTML = `<p>You Lost!<br><br>You Got ${usr} point(s), and the computer got: ${com} point(s)</p><br><br><br><br><br><br><br><br><p>For further trials, reload the page</p>`;
    }
  } 
});


myBtns.append(pBtn, rBtn, sBtn);
document.body.append(myBtns, myDiv);
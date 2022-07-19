function computerPlay(){
  let x = parseInt(Math.random()*3);
  switch(x){
    case 0:
      return 'Rock';
    case 1:
      return 'Paper';
    case 2: 
      return 'Scissor';
  }
}

let btn = document.getElementById('btn-one');
btn.addEventListener('click', (e) => {
  console.log(`You clicked ${e.target}`);
});


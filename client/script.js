const a = new Audio('https://freesound.org/people/JapanYoshiTheGamer/sounds/423219/download/423219__japanyoshithegamer__quiz-show-buzzer-2.wav');
a.volume = 0.5;
setInterval(() => {
  const total = document.querySelector('#total').value;
  fetch(`http://localhost:3000?total=${total}`).then(x => {
    return x.json();
  }).then(value => {
    if(value){
      a.play();
    }
  })
}, 30000);

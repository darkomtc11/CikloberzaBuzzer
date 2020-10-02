const a = new Audio('https://freesound.org/people/JapanYoshiTheGamer/sounds/423219/download/423219__japanyoshithegamer__quiz-show-buzzer-2.wav');
a.volume = 0.5;
const indicator = document.querySelector("#indicator");
indicator.classList.replace('green', 'red');

function doIt() {
  const total = document.querySelector('#total').value;
  const searchUrl = encodeURI(document.querySelector('#searchUrl').value);

  var url = new URL('http://localhost:3000')

  var params = { searchUrl, total }

  url.search = new URLSearchParams(params).toString();

  if (searchUrl.trim()) {
    fetch(url).then(x => {
      return x.json();
    }).then(value => {
      if (value) {
        a.play();
        indicator.classList.replace('red', 'green');
      } else {
        indicator.classList.replace('green', 'red');
      }
    })
  }
}

let interval;

function doItAgainAndAgain() {
  clearInterval(interval);
  doIt();
  interval = setInterval(() => {
    doIt();
  }, 30000);
}

doItAgainAndAgain();
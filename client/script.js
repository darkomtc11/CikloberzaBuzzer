const a = new Audio('./ring.wav');
a.volume = 0.5;
document.body.classList.add('red');
const totalInput = document.querySelector('#total');
const searchUrlInput = document.querySelector('#searchUrl');

function doIt() {
  const total = totalInput.value;
  const searchUrl = encodeURI(searchUrlInput.value);

  var url = new URL('http://localhost:3000')

  var params = { searchUrl, total }

  url.search = new URLSearchParams(params).toString();

  if (searchUrl.trim()) {
    fetch(url).then(x => {
      return x.json();
    }).then(value => {
      if (value) {
        a.play();
        document.body.classList.replace('red', 'green');
      } else {
        document.body.classList.replace('green', 'red');
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

function visitSite() {
  window.open(searchUrlInput.value, '_blank').focus();
}

doItAgainAndAgain();
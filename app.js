var aud = document.getElementById('aud');

var tracks = {
   artist: ["Tokyo Police Club", "Kind of Like Spitting", "Against Me!", "Digable Planets"],
   title: ["Favorite Food", "Thrill of the Hunt", "Transgender Dysphoria Blues", "Where I'm From"],
   file: ["favourite-food.mp3", "thrill-of-the-hunt.mp3", "transgender-dysphoria-blues.mp3", "where-im-from.mp3"]
};

var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
var player3 = document.getElementById('player3');
var player4 = document.getElementById('player4');

var header = document.getElementById('header');

var control = document.getElementsByClassName("control");

var reset = function() {
   for (var i = 0; i < tracks.file.length; i++) {
     if (control[i].classList.contains('fa-stop')) {
       control[i].classList.remove('fa-stop');
       control[i].classList.add('fa-play');
     }
   }
};

var nowPlaying = '';

player1.addEventListener('click', function(e) {
  var trackNum = 0;
  if (nowPlaying !== trackNum) {
    aud.src = 'songs/' + tracks.file[trackNum];
    aud.play();
    nowPlaying = trackNum;
    reset();
    e.target.classList.add('fa-stop');
    e.target.classList.remove('fa-play');
    header.innerHTML = 'Now playing: ' + tracks.title[trackNum];
  } else {
    aud.src = '';
    nowPlaying = '';
    e.target.classList.add('fa-play');
    e.target.classList.remove('fa-stop');
    header.innerHTML = 'Select a song!'
  }
});

player2.addEventListener('click', function(e) {
  var trackNum = 1;
  if (nowPlaying !== trackNum) {
    aud.src = 'songs/' + tracks.file[trackNum];
    aud.play();
    nowPlaying = trackNum;
    reset();
    e.target.classList.add('fa-stop');
    e.target.classList.remove('fa-play');
    header.innerHTML = 'Now playing: ' + tracks.title[trackNum];
  } else {
    aud.src = '';
    nowPlaying = '';
    e.target.classList.add('fa-play');
    e.target.classList.remove('fa-stop');
    header.innerHTML = 'Select a song!'
  }
});

player3.addEventListener('click', function(e) {
  var trackNum = 2;
  if (nowPlaying !== trackNum) {
    aud.src = 'songs/' + tracks.file[trackNum];
    aud.play();
    nowPlaying = trackNum;
    reset();
    e.target.classList.add('fa-stop');
    e.target.classList.remove('fa-play');
    header.innerHTML = 'Now playing: ' + tracks.title[trackNum];
  } else {
    aud.src = '';
    nowPlaying = '';
    e.target.classList.add('fa-play');
    e.target.classList.remove('fa-stop');
    header.innerHTML = 'Select a song!'
  }
});

player4.addEventListener('click', function(e) {
  var trackNum = 3;
  if (nowPlaying !== trackNum) {
    aud.src = 'songs/' + tracks.file[trackNum];
    aud.play();
    nowPlaying = trackNum;
    reset();
    e.target.classList.add('fa-stop');
    e.target.classList.remove('fa-play');
    header.innerHTML = 'Now playing: ' + tracks.title[trackNum];
  } else {
    aud.src = '';
    nowPlaying = '';
    e.target.classList.add('fa-play');
    e.target.classList.remove('fa-stop');
    header.innerHTML = 'Select a song!'
  }
});

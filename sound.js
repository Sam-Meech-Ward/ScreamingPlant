var player = require('play-sound')(opts = {})

function play() {
  player.play('scream/scream-1.mp3', function(err){
    console.log(err);
  });
}

exports.play=play

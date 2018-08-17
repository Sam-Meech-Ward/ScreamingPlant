const player = require('play-sound')(opts = {})

let currentSound = null;
function play() {
  if (currentSound) {
    return;
  }
  currentSound = player.play('scream/scream-1.mp3', function(err){
    if (err) {
      console.log(err);
    }
    currentSound = null;
  });
}

exports.play = play;

const sound = require('./sound');
const sensor = require('./sensor');

sensor.start((error, state) => {
  if (error) {
    console.log(error);
    return;
  }
  if (state === 'dry') {
    sound.play();
  }
  if (state === 'moist') {
    sound.play();
  }
});

console.log("Started 🤗");

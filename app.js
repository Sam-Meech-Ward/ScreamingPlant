const onoff = require('onoff');
const Gpio = onoff.Gpio;

const led = new Gpio(17, 'out');
const sensor = new Gpio(21, 'in', 'both');

const sound = require('./sound');


sensor.watch((err, value) => {
  if (err) {
    console.log("ERror", err);
    return;
  }

  if (value === 0) {
    console.log("All good, very moist");
  } else if (value === 1) {
    console.log("Ahhhhhhhh!!! I'm dry");
    sound.play()
  }

  console.log("State", value);
  led.writeSync(value ? 0 : 1);
});

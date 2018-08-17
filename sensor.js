const onoff = require('onoff');
const Gpio = onoff.Gpio;

const led = new Gpio(17, 'out');
const sensor = new Gpio(21, 'in', 'both');

function start(callback) {
  sensor.watch((err, value) => {
    if (err) {
      callback(err);
      return;
    }

    if (value === 0) {
      console.log("All good, very moist");
      callback(null, "moist");
    } else if (value === 1) {
      console.log("Ahhhhhhhh!!! I'm dry");
      callback(null, "dry");
    }

    led.writeSync(value);
  });
}

exports.start = start;

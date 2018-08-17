const onoff = require('onoff');
const Gpio = onoff.Gpio;

const led = new Gpio(17, 'out');
const sensor = new Gpio(21, 'in', 'both');
 
sensor.watch((err, value) => {
  if (err) {
    console.log("ERror", err);
    return;
  }
  console.log("State", value);
  led.writeSync(value ? 0 : 1);
});
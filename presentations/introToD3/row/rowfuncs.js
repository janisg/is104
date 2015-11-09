function powToTime(power, distance) {
  seconds = 500 * Math.pow(2.8/power, 1/3) * distance/10;
  var mins = Math.floor(seconds/60);
  var secs = seconds % 60;
  return mins + ":" + ( secs<10 ? "0" : "" ) + secs;
}

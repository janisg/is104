/**
* If registered average power on Concept 2 rowing ergometer, calculate the time.
* Decimal adjustment of a number.
*
* @param {Number}  power  The average power in Watts.
* @param {Number}  distance The distance to calculate the time for (2000, 5000).
* @returns {String} The calculated time in the format "mm:ss,ds".
*/
function powToTime(power, distance) {
  seconds = distance * Math.pow(2.8/power, 1/3);
  var mins = Math.floor(seconds/60);
  var secs = Math.round10(seconds % 60, -1);
  return mins + ":" + ( secs<10 ? "0" : "" ) + secs;
}

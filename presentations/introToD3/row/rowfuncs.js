// If registered average power on Concept 2 rowing ergometer, calculate the time.
/** Decimal adjustment of a number.
*
* @param {Number}  power  The average power in Watts.
* @param {Number}  distance The distance to calculate the time for (2000, 5000).
* @returns {String} The calculated time in the format "mm:ss,ds".
*/
/** TODO: implement some control routines for input parameters
* power has to be a decimal number between 0.0 and 1000.0
* distance will usually be an integer 100, 200, 250, 500, 1000, 2000 etc.
* a real domain for the distance is 0..100000 (very seldom as large as 100 km)
*/
function powToTime(power, distance) {
  seconds = distance * Math.pow(2.8/power, 1/3);
  var mins = Math.floor(seconds/60);
  var secs = Math.round10(seconds % 60, -1);
  return mins + ":" + ( secs<10 ? "0" : "" ) + secs;
}


function timeToPow(timeStr, distance) {
  parsed = timeStr.split(':');
  seconds = parsed[0]*60+Number(parsed[1]); // risky? implicit type casting?
  return Math.round10( 1 / ( (1/2.8)*Math.pow(seconds/distance, 3)) );
}

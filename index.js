window.onload = function () {

  var timer = document.getElementById('stopwatch');
  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var reset = document.getElementById('reset');
  var startMins = document.getElementById('mins');
  var startSec = document.getElementById('secs');
  var Interval;

  var sec = 00;
  var mins = 00;

  start.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(stopWatch, 10);
  }

  stop.onclick = function () {
    clearInterval(Interval);
  }

  reset.onclick = function () {
    clearInterval(Interval);
    sec = "00";
    mins = "00";
    startSec.innerHTML = sec;
    startMins.innerHTML = mins;
  }

  function stopWatch () {
    sec++;
    if (sec <= 9) {
      startSec.innerHTML = "0" + sec;
    }

    if (sec > 9) {
      startSec.innerHTML = sec;
    }

    if (sec > 99) {
      mins++;
      startMins.innerHTML = "0" + mins;
      sec = 0;
      startSec.innerHTML = "0" + 0;
    }

    if (min > 9) {
      startMins.innerHTML = mins;
    }
  }
}
//livestreamed at
// https://youtu.be/kSBT669yLyU


function updateClock(hours, minutes, seconds) {

    var hourDegrees = hours * 30;
    var minuteDegrees = minutes * 6;
    var secondDegrees = seconds * 6;
  
    $('.hour-hand').css({
      'transform': `rotate(${hourDegrees}deg)`
    });
  
    $('.minute-hand').css({
      'transform': `rotate(${minuteDegrees}deg)`
    });
  
    $('.second-hand').css({
      'transform': `rotate(${secondDegrees}deg)`
    });
  
  }
  
  setClockWithCurrentTime();
  
  function setClockWithCurrentTime() {
      var date = new Date();
  
    var hours = ((date.getHours() + 11) % 12 + 1);
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
  
    updateClock(hours, minutes, seconds);
  }

  setInterval(setClockWithCurrentTime, 1000);
  
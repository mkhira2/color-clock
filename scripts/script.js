var renderTime = function() {

  var currentTime = new Date()
  var hours = currentTime.getHours()
  var minutes = currentTime.getMinutes()
  var seconds = currentTime.getSeconds()

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds
  }
  
  var clock = document.querySelector('.time')
  clock.innerHTML = hours + ':' + minutes + ':' + seconds
  // setInterval(renderTime, 1000)
  
}

renderTime()
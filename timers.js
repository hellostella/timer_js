//  When "Start" is clicked, the text "Stop Watch" should be replaced by "Time elapsed: 0", and the count should increment every second.
//  When "Reset" is clicked, the text should return to "Stop Watch"
//  When "Pause" is clicked, the text should say "Time elapsed: 1", but stop incrementing.
var timerDisplay = document.querySelector('#timer')
var startButton = document.querySelector("#start")
var resetButton = document.querySelector("#reset")
var pauseButton = document.querySelector("#pause")
// var startTime = 0 + ":" + 0 - NaN
var startTime = 0
// var timer = setInterval(function(event) {timerDisplay.innerHTML = "Time Elapsed: " + startTime + " seconds";})

// for (var start = 0 ; start < 60000; start++)
// 1. When "Start" is clicked, the text "Stop Watch" should be replaced by "Time elapsed: 0", and the count should increment every second.
startButton.addEventListener("click", function(event){
  event.preventDefault()
   timer = setInterval(function() {
     timerDisplay.innerHTML = "Time Elapsed: " + startTime + " seconds"; startTime++
      // timer.innerHTML = "Time Elapsed:" + "00:00:00"
    }, 1000);
})

// message.innerHTML = new Date().toTimeString();
//     }, 1000);

// 2. When "Reset" is clicked, the text should return to "Stop Watch"
resetButton.addEventListener("click", function(event){
  timer.innerHTML = "Stop Watch";
  clearInterval( timer );
  startTime = 0 ;
  })

// 3. * When "Pause" is clicked, the text should say "Time elapsed: 1", but stop incrementing.
 pauseButton.addEventListener("click", function( event ){
   clearInterval( timer );
 })

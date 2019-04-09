//declare global variables
var timeoutHandle;
var right= 0;
var wrong= 0;

//onclick start button
//timer starts the count down
//onclick for question
//+1 to score if correct option is selected

// game logic
$(document).ready(function(){
    $("#startButton").on("click", function (){
        function countdown(minutes, seconds) {
            function tick() {
                var counter = document.getElementById("timer");
                    counter.innerHTML =
                        minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
                    seconds--;
                    if (seconds >= 0) {
                        timeoutHandle = setTimeout(tick, 1000);
                    } 
                    else if (minutes >= 1) {
                        setTimeout(function () {
                        countdown(minutes - 1, 59);
                        }, 1000);
                    }
                    
                }
        tick();
        }

        countdown(1, 30);
    });
      
    $("#correctAnswer").on("click", function(){
        right ++;
        console.log("right", right)
    })

    $("#wrongAnswer").on("click", function(){
        wrong ++;
        console.log("wrong", wrong)
        
    })
});





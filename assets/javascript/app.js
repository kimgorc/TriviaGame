//declare global variables
var timeoutHandle;
// Countdown/ onclick start
var scoreCount= 0;
var myQuestions = [
    {
        question: "1. Who is the Keymaster in 'Ghostbusters'?",
        answers: {
            a: 'Zuul',
            b: 'The Gatekeeper',
            c: 'Stay Puft Marshmallow Man',
            d: 'The Ghostbusters',
        },
        correctAnswer: 'a',
    },
    {
        question: "2. How many gigawatts of electricity did Doc Brown need to generate power to the Delorian in 'Back to the Future'?",
        answers: {
            a: '87.3',
            b: '998',
            c: '1.89',
            d: '1.21',
        },
        correctAnswer: 'd',
    },
    {
        question: "3. What 80s film was Alan Rickman's first feature film role?",
        answers: {
            a: 'Die Hard',
            b: 'The January Man',
            c: 'Robin Hood: Prince of Thieves',
            d: 'Sense and Sensibility<button',
        },
        correctAnswer: 'a',
    },
    {
        question: "4. Name that Movie! 'I am serious. and don't call me Shirley'",
        answers: {
            a: 'Caddyshack',
            b: 'Ghostbusters',
            c: 'Airplane!',
            d: 'Spaceballs',
        },
        correctAnswer: 'c',
    },
    {
        question: "5. What type of dinosaur is Littlefoot in 'The Land Before Time'?",
        answers: {
            a: 'Triceratops',
            b: 'Apatosaurus',
            c: 'Tyrannosaurus Rex',
            d: 'Stegosaurus',
        },
        correctAnswer: 'b',
    },
    {
        question: "6. In 'Farris Beuller's Day Off', who plays the Burnout at the police station that Jeanie kisses?",
        answers: {
            a: 'Charlie Sheen',
            b: 'John Cusack',
            c: 'Tom Cruise',
            d: 'Corey Feldman',
        },
        correctAnswer: 'a',
    },
    {
        question: "7. Who directed the 1980 horror film 'The Shining'?",
        answers: {
            a: 'Stanley Kubrick',
            b: 'Tobe Hooper',
            c: 'Sean S. Cunningham',
            d: 'Peter Medak',
        },
        correctAnswer: 'a',
    },
    {
        question: "8. In which Indiana Jones film does Jones team up with his father Henry (played by Sean Connery)?",
        answers: {
            a: 'Temple of Doom',
            b: 'The Last Crusade',
            c: 'The Raiders of the Lost Ark',
        },
        correctAnswer: 'b',
    },
    {
        question: "9. Who wrote the screenplay for 'The Goonies'?",
        answers: {
            a: 'James Cameron',
            b: 'Stephen Speilburg',
            c: 'Richard Donner',
            d: 'Chris Columbus',
        },
        correctAnswer: 'd',
    },
    {
        question: "10. In 'Dirty Dancing', what was Baby's real name?",
        answers: {
            a: 'Penny',
            b: 'Elizabeth',
            c: 'Frances',
            d: 'Katherine',
        },
        correctAnswer: 'c',
    },
];


var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);


    function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
        
    function showQuestions(questions, quizContainer){
        // variables to store answers and outputs
        var output = [];
        var answers;

        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            for(letter in questions[i].answers){

                // add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': ' 
                        + questions[i].answers[letter]
                        + '<br>'
                    + '</label>'
                );
            }

            // add the question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('  ') + '</div>'
            );
        }

        //  combine into string
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
   

        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
            
                answerContainers[i].append("Right!")
                
            }
            // if answer is wrong or blank
            else{
                
                answerContainers[i].append("Wrong!") ;
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);
  
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
        clearInterval(timeoutHandle);
    }
    

// Countdown/ onclick start
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
   
        setInterval(function (){showResults(questions, quizContainer, resultsContainer)}, 45000);
    }); 

};
    
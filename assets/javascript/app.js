$("#start").on("click", function(){
    $("#start").remove();
    startGame.startQuestion();
})


var questions = [{
    question: "What does Wubba Lubba Dub Dub mean?",
    choices: ["I'm in great pain", "Please leave", "I'm a genius", "Time to party"],
    correctChoice: "I'm in great pain"
}, {
    question: "What is the name of Morty's crush?",
    choices: ["Annie", "Jessica", "Mckenzie", "Heather"],
    correctChoice: "Jessica"
},  {
    question: "What was Rick's favorite exhibit in Anatomy Park?",
    choices: ["The Bone Train", "Spleen Mountain", "Bladder Falls", "Pirates of the Pancreas"],
    correctChoice: "Pirates of the Pancreas"
},  {
    question: "In the pilot, why did Rick want to blow up earth?",
    choices: ["He wanted a clean start", "He wanted to accomplish something", "He was bored", "He was angry"],
    correctChoice: "He wanted a clean start"
},  {
    question: "How long was Rick gone from Beth and his family?",
    choices: ["10 years", "15 years", "20 years", "30 years"],
    correctChoice: "20 years"
},  {
    question: "What is Beth's favorite type of alcohol?",
    choices: ["Red wine", "White wine", "Rose", "Vodka"],
    correctChoice: "Red wine"
},

];
// console.log(questions);

var startGame = {

    questions: questions,
    mcQuestion: 0,
    timer: 30,
    correct: 0,
    incorrect: 0,
    unanswered: 0,

    count: function(){
        startGame.timer --;
        $("#counter").html(startGame.timer);
        if(startGame.timer <= 0){
            startGame.timeUp();
            console.log("Time's up.");
        }
    },

    startQuestion: function(){
        time = setInterval(startGame.count, 1000);
        $("#little-wrap").html("<h2> Time remaining: <span id ='counter'>30</span> seconds</h2>");
        $("#little-wrap").append("<h2>" + questions[startGame.mcQuestion].question + "</h2>");
        for (var i = 0; i < questions[startGame.mcQuestion].choices.length; i++){
            $("#little-wrap").append("<button class='choices btn btn-light' id='button- " +i+ "' data-name='" + questions[startGame.mcQuestion].choices[i] + "'>" + questions[startGame.mcQuestion].choices[i] + "</button>" );
        }

    },

    nextQuestion: function(){
        startGame.timer = 30;
        $("#counter").html(startGame.timer);
        startGame.mcQuestion++;
        startGame.startQuestion();
    },

    timeUp: function(){
        clearInterval(time);
        startGame.unanswered++;
        $("#little-wrap").html("<h2>Time's Up!</h2>");
        $("#little-wrap").html("<h3>The answer is: " + questions[startGame.mcQuestion].correctChoice + "</h3>");
        if (startGame.mcQuestion === questions.length - 1){
            setTimeout(startGame.answers, 3000);
        } else{
            setTimeout(startGame.nextQuestion, 3000);
        }
    },

    answers: function(){
        clearInterval(time);
        $("#little-wrap").html("<h2>Hooray, you finished!</h2>")
        $("#little-wrap").append("<p> Correct: " + startGame.correct + "</p>");
        $("#little-wrap").append("<p> Incorrect: " + startGame.incorrect + "</p>");
        $("#little-wrap").append("<p> Unanswered: " + startGame.unanswered + "<p>");
        $("#little-wrap").append("<button class='btn btn-light btn-lg' id='restart'> Restart</button>")
    },

    Correct: function(){
        console.log("correct");
        clearInterval(time);
        startGame.correct++;
        $("#little-wrap").html("<h2> Correct!</h2>");
        if(startGame.mcQuestion === questions.length - 1){
            setTimeout(startGame.answers, 2000);
        } else{
            setTimeout(startGame.nextQuestion, 2000);
        }
    },

    Incorrect: function(){
        console.log("incorrect");
        clearInterval(time);
        startGame.incorrect++;
        $("#little-wrap").html("<h2> Incorrect!</h2>");
        $("#little-wrap").append("<h3> Wrong! It's actually: " + questions[startGame.mcQuestion].correctChoice + "</h3>");
        if(startGame.mcQuestion === questions.length - 1){
            setTimeout(startGame.answers, 2000);
        } else{
            setTimeout(startGame.nextQuestion, 2000);
        }
    },

    onClick: function(e){
        clearInterval(time);
        if($(e.target).data("name") === questions[startGame.mcQuestion].correctChoice){
            startGame.Correct();
        } else {
            startGame.Incorrect();
        }
    },

    restart: function(){
        startGame.mcQuestion = 0;
        startGame.timer = 0;
        startGame.correct = 0;
        startGame.incorrect = 0;
        startGame.unanswered = 0;
        startGame.startQuestion();
    }

}

$(document).on("click", ".choices", function(e){
    startGame.onClick(e);
})

$(document).on("click", "#restart", function(){
    startGame.restart();
})
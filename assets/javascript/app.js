$("#start").on("click", function(){
    $("#start").remove();
})


var questions = [{
    question: "What does Wubba Lubba Dub Dub mean?",
    choices: ["I'm in great pain.", "Please leave.", "I'm a genius!", "Time to party!"],
    correctChoice: "I'm in great pain."
}, {
    question: "What is the name of Morty's crush?",
    choices: ["Annie", "Jessica", "Mckenzie", "Heather"],
    correctChoice: "Jessica"
},  {
    question: "What was Rick's favorite exhibit in Anatomy Park?",
    choices: ["The Bone Train", "Spleen Mountain", "Bladder Falls", "Pirates of the Pancrease"],
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
    choices: ["Red wine", "White win", "Rose", "Vodka"],
    correctChoice: "Red wine"
},

];
console.log(questions);
// console.log("What's your name? ");
import readlineSync, { question } from "readline-sync";
var userAnswer = readlineSync.question("What's your name? ");
console.log("\n");
console.log(
  "Welcome! " +
    userAnswer +
    " Do you know Harsh?\nSeems u know me `to chalo mere sawalon ka zawab do 😸.` \n"
);

var questions = [
  {
    question: "Where do i live? ",
    answer: "unnao",
  },
  {
    question: "Name of my college? ",
    answer: "ascent khalsa",
  },
  {
    question: "favourite teacher of my college? ",
    answer: "Nikhil sir",
  },
];

var score = 0;

function check(question, answer) {
  var userAnswerForMe = readlineSync.question(question);
  if (userAnswerForMe === answer.toLowerCase()) {
    console.log("Right!!");
    score = score + 1;
    console.log("current score: " + score);
    console.log("-------------------------");
  } else {
    console.log("Wrong!!");
    score = score - 1;
    console.log("current score: " + score);
    console.log("----------------------");
  }
}

for (var i = 0; i < questions.length; i++) {
  var ourQuestion = questions[i];
  check(ourQuestion.question, ourQuestion.answer);
}
console.log("How's u found my first cli_app");

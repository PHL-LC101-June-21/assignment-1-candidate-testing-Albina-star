const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = " ";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";
//let question = " ";
//let correctAnswers;
const questions = ["1) Who was the first American woman in space? ", "2)True or false: 5000 meters = 5 kilometers.", "3)(5 + 3)/2 * 10 = ?","4)Given the array [8, Orbit, Trajectory, 45]what entry is at index 2?", "5)What is the minimum crew size for the International Space Station(ISS)?"];

const correctAnswers = ["Sally Ride", "True", "40", "tajectory","3"];

let candidateAnswers = [];
//let answers = 0;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
//candidateName = input.question("Candidate name:")
//return input.question(candidateName);
candidateName = input.question("As a candidate, please enter your name: ");
console.log("Candidate Name: " + candidateName);
}

function askQuestion(i) {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //return input.question[i];

//for (let i = 0; i < questions.length; i++) {
  //let candidateAnswers = input.question (questions[i]);
  //if (candidateAnswers.toUpperCase() == correctAnswers[i].toUpperCase()){
   //correctAnswers++; 

    //const candidateAnswer = input.question(('\n') + (i + 1) + ") " + questions[i])
    //candidateAnswers.push(candidateAnswer);
    //console.log("Your Answer: " + candidateAnswers[i]);
    //console.log("Correct Answer: " + correctAnswers[i]);
  //}
  for (let i =0; i<questions.length; i++){
    candidateAnswer = input.question(('\n') + (i + 1) + ") " + questions[i]);
    candidateAnswers.push(candidateAnswer);
    console.log("Your Answer: ", candidateAnswer);
    console.log("Correct Answer: ", correctAnswers[i]);
  }

  for (let i = 0; i < questions.length; i++){
    console.log(candidateAnswers[i]);
}


 function gradeQuiz(candidateAnswers) {
let answersScore = 0;
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
for (let i = 0; i < candidateAnswers.length; i += 1) {
    if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()) {
    answersScore += 1;
    }
}
console.log(`Overall Grade:  ${answersScore}`)
  
  return answersScore;
 }

/*let answersScore= answers / questions.length;
console.log("candidateName: " + candidateName);
console.log("Correct Answers-   " + answersScore);
console.log(answersScore * 100 + "% on test");
if ([answersScore * 100] > [10 * 100])
console.log("Candidate " + candidateName + " has answered correctly!");
else if ([answersScore * 100] < [10 * 100])
console.log("Candidate " + candidateName +" has answered wrong!");
*/
 function runProgram() {
  
  // TODO 1.1c: Ask for candidate's name //
  askForName();
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}
}
// Don't write any code below this line //
// And don't change these or your program will not run as expected //

module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
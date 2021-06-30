const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = " ";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
//let question = "Who was the first American woman in space? ";
let correctAnswer;
let candidateAnswer;
let candidateAnswers = [];
let question;
let answerGrade = 0;
let status = " ";

const questions = ["1) Who was the first American woman in space? ", "2)True or false: 5000 meters = 5 kilometers.", "3)(5 + 3)/2 * 10 = ?","4)Given the array [8, Orbit, Trajectory, 45]what entry is at index 2?", "5)What is the minimum crew size for the International Space Station(ISS)?"];

const correctAnswers = ["Sally Ride", "True", "40", "Trajectory","3"];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
 
  candidateName = input.question("As a candidate, please enter your name:  ");
  console.log ("Candidate Name: ", candidateName);
}

function askQuestion(i) {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i =0; i<questions.length; i++){
    candidateAnswers.push(input.question(questions[i]));
  }
  
}
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
function gradeQuiz(candidateAnswers) {
  for (let i=0; i < questions.length; i = i + 1) { 
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
      answerGrade = answerGrade + 1;
    }
    totalGrade= (((answerGrade) / 5) * 100);
  }

    if (totalGrade >= 80){
    quizeStatus = "SUCCESS";
    } else {
    quizeStatus = "FAILED";
  }

  
  for (let i  =0; i < candidateAnswers.length; i++ ) {
    console.log (questions[i]);
    console.log ("Your Answer: ", candidateAnswers[i]);
    console.log ("Correct Answer: ",correctAnswers[i]);
    console.log ("                                      ");
  }
    
    console.log(`>>> Overall Grade: ${totalGrade}% (${answerGrade} of 5 responses correct) <<<`);
    console.log (`>>> Status:${quizeStatus} <<<`);
 
  return totalGrade;
 }
 
function runProgram() {
  
  // TODO 1.1c: Ask for candidate's name //
  askForName();
  askQuestion();
  gradeQuiz(this.candidateAnswers); 

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
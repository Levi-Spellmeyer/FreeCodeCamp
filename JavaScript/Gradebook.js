/*
    Date: 8/4/2025
    Author: Levi Spellmeyer
    Title: Gradebook App
    Description: 
        Program that uses basic conditional statements and loops to compare and test values
        to determine if a student grade is passing. Instructions for this program came from 
        FreeCodeCamps introduction to JavaScript course.

        Goal of completing this simple program was to further improve on basic JS syntax knowledge
        and understanding to prepare myself for new concepts regarding programming using JS that I
        will use to complete my capstone project at Tennessee Technological University.
*/

// Function that takes in an array of grades, adds all values stored in array together, divides by length of array,
// returns average of the parameter array
function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

// Compares a single score to determine corresponding letter grade using if, else if statements
function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}


// Checks if singular grade is passing by calling getGrade function and comparing returned value
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}


// Returns a message of if a student passed course and comparing student score to class score
// Does this by calling above function and inputing results into a string that is displayed to user
function studentMsg(totalScores, studentScore) {
  if(hasPassingGrade(studentScore)){
    return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You passed the course.";
  } else {
    return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You failed the course.";
  }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

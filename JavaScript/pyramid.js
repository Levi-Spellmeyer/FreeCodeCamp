// Date: 8/2/2025
// Author: Levi Spellmeyer
// Title: Pyramid generator
// Description: Notes and code typed while following the first section of the Javascript data structures and algorithms
//              FreeCodeCamp lesson/exercises titled pyramid generator


// Notes:
// 1.) Using the keyword `let` followed by a variable name allows that variables value to be reassigned later on
// 2.) When reassigning a varaible, you do not need to reuse the `let` keyword
// 3.) To get the length of a given variable (list, etc.) use `varName.length` (no need for parenthesis after the .length)
// 4.) Assigning a variable to  var.push('something') sets the variable to the new length of the list
// 5.) Pop removes the last item of a list as well as returning that value, value = list.pop()
// 6.) The string method .repeat() takes in an int argument inside the () and repeats the targeted string
// 7.) The .unshift() method allows you to add valuese to the beginning of a list, opposite of .push()
// 8.) The .shift methods removes and returns 1st element of a list, opposite of .pop()


const character = "#";
const count = 8;
const rows = [];

// Function to create each row of the character pyramid
// Adds blank space before and after characters to create a centered pyramid
function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// Loop that uses a conditional combined with push and unshift to create normal/inverted character pyramids
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}


// Creates a character pyramid using a while loop
while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}


// Creates an inverted character pyramid to demonstrate subtraction operators
for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}


// Separates each line of the rows array adding a newline character to the end of each row to form pyramid
let result = ""
for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);



// What I learned
// 1.) Basic syntax including conditional statements and loops
// 2.) methods including .unshift(), .shift() 
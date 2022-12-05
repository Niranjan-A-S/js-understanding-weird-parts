//SYNTAX PARSERS
// A program that reads the code and determines if it's grammar is valid and what it does

//lEXICAL ENVIRONMENT
//where something sits physically in the code that you write

//EXECUTION CONTEXT
//A wrapper to manage the code that is running
// let myVar = 1;

function b() {
  var myVar;
  console.log(myVar);
}

function a() {
  var myVar = 2;
  console.log(myVar);
  b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);

//Output  1 2 undefined 1

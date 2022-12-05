//SYNTAX PARSERS
// A program that reads the code and determines if it's grammar is valid and what it does

//lEXICAL ENVIRONMENT
//where something sits physically in the code that you write

//EXECUTION CONTEXT
//A wrapper to manage the code that is running
// let myVar = 1;

// function b() {
//   var myVar;
//   console.log(myVar);
// }

// function a() {
//   var myVar = 2;
//   console.log(myVar);
//   b();
// }

// var myVar = 1;
// console.log(myVar);
// a();
// console.log(myVar);

//Output  1 2 undefined 1

//Lexical Environment

// function a() {
//   function b() {
//     console.log(myVar);
//   }
//   var myVar = 1;
//   b();
// }

// a();

//Asynchronous Callbacks
// function waitThreeSeconds() {
//   //   setTimeout(() => {
//   //     console.log("finished function");
//   //   }, 3000);
//   var ms = 3000 + new Date().getTime();
//   while (new Date() < ms) {}
//   console.log("finished function");
// }

// function clickHandler() {
//   console.log("Clicked");
// }

// document.addEventListener("click", clickHandler);

// waitThreeSeconds();
// console.log("Finished Execution");

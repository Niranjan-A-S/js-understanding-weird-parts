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

//Operators precedence and associativity
// Precedence means which will be called first
//Associativity means order of calling if they are having same precedence

// const a = 3 + 4 * 5;
// console.log(a); //23

// let a = 1,
//   b = 2,
//   c = 3;

// a = b = c;
// //Here b =c means setting the value of b as the value of c and returning that value
// so in the first step since according to the associativity cheatsheet  = has the right to left order
//therefore it becomes a = 4; and b =4;
// console.log(a);//4
// console.log(b);//4
// console.log(c);//4
//  precedence and associativity cheatsheet is in bookmarks(cheatsheet)

// COERCION
// const a = 1 + "2";
// const b = 1 + +"2";
// console.log(a);//12
// console.log(b);//3

//console.log(1 < 2 < 3); //true
//console.log(3 < 2 < 1); // true since associativity is left to right and false < 1 becomes 0 < 1 ie true
//console.log(3 > 2 < 1); //false since true is not less than one here the booleans are converted to numbers
//console.log(3 > 2 <= 1); //true

// null is also zero
//undefined is NaN

//incase of equality the coercion is a big problem
//1 == true // true because in this case it is doing type coercion so true becomes 1
// 1 == "1" true
// 1 == 1 // false
//null < 1 // true
//null == 0 //false
// ''  == false //true
// "" == true //false
// "" == false //true

// strict equality or inequality does not coerce the values
// 1===1 //true
//1==="1" //false

// const greet = (name) => {
//   name = name || "Default name";
//   console.log(`Hello ${name}`);
// };
// greet(); // Hello undefined  : because since we did not mention name it will be having a value of undefined
//so when adding to a string it is coerced into string "undefined"

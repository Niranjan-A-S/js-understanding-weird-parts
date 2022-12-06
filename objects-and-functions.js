// const person = new Object();

// person["firstName"] = "Tony";
// person["lastName"] = "Alex";

// const firstNameProperty = "firstName";

// console.log(person["firstName"]);
// console.log(person[firstNameProperty]);
// console.log(person.firstName);
// console.log(person.lastName);

// person.address = new Object();
// person.address.street = "221/2 3rd Cross";
// person.address.city = "Alaska";
// person.address.state = "New York";

// console.log(person.address.city);
// console.log(person.address["street"]);
// console.log(person["address"]["state"]);

//Object Literal

// const person = {
//   firstName: "Tony",
//   lastName: "Alex",
//   address: {
//     street: "221/2 3rd Cross",
//     city: "Alaska",
//     state: "New York",
//   },
// };

//FUNCTIONS ARE OBJECTS
// function greet() {
//   console.log("Something");
// }

// here this function is an object with name property as greet and some other property as the code init
// so that we can do this
// greet.message = "hello";
// console.log(greet); //the function itself
// console.log(greet.message); //hello

// function log(param) {
//   console.log(param);
// }

// const sayHi = function () {
//   console.log("Hi");
// };

// log(sayHi());

// function log(a) {
//   a();
// }

// log(function () {
//   console.log("HI");
// });

//Reference by value and reference

//by value(all primitives)
// let a = 2;
// let b;

// b = a;
// a = 3;

// console.log(a); //3
// console.log(b); //2

//by reference (objects including functions)
// let c = { greet: "Hello" };
// let d;

// d = c;
//Now both d and c are the pointers that references to the same memory location to the value
//so if we change the property value using any one of the pointers accessing the value using the
//other pointer wil also reflect the changes
// d.greet = "Hi"; //mutate

// console.log(c.greet); //Hi
// console.log(d.greet); //Hi

//by reference  (even as parameters)
// const changeGreetings = (obj) => {
//   obj.greet = "Hola"; //mutate
// };

// changeGreetings(d);

// console.log(d); //{greet:"Hola"}
// console.log(c); //{greet:"Hola"}

// equals operator sets up new memory space (new address)
// c = { greet: "Hi" }; // now this is not mutating here a new object is created

// console.log(c); //{greet:"Hi"}
// console.log(d); //{greet:"Hola"}

//this
// function a() {
//   console.log(this);
//   this.variableInGlobalNameSpace = "Hello";
// }

// const b = () => {
//   console.log(this);
//   this.anotherVariableInGlobalNameSpace = "Hi";
// };

// a();
// b();

// console.log(variableInGlobalNameSpace);//Hello
// console.log(anotherVariableInGlobalNameSpace);//Hi

// const c = {
//   name: "This is an object named c",
//   log: function () { // it does not work for arrow functions
//     this.name = "This is the updated name of the object";
//     console.log(this.name);

//     const setName = function (newName) {
//       this.name = newName; //here this refers to the global object
//     };

//     setName("new name which is updated third time");
//     console.log(this.name);
//   },
// this is a bug of JS to fix we can do a work around
//rewriting the above object =>

//   name: "This is an object named c",
//   log: function () {
//     let blaBla = this; //this is an important workaround
//     blaBla.name = "This is the updated name of the object";
//     console.log(blaBla.name);
//     const setName = function (newName) {
//       blaBla.name = newName;
//     };
//     setName("new name which is updated third time");
//     console.log(blaBla.name);
//   },
// };

// c.log();
// console.log(this.name); //as we can see it is updating the name variable in the global object

//ARGUMENTS

// function greet(firstName, lastName, language = "es", ...rest) {
//   arguments.length === 0 && console.log("no arguments passed");

//   console.log(firstName);
//   console.log(lastName);
//   console.log(language);
//   console.log(arguments);
//   console.log(...rest);
//   console.log("-----------------------");
// }

// greet();
// greet("John");
// greet("John", "Doe");
// greet("John", "Doe", "es");
// greet("John", "Doe", "es", "Spanish");

//Function overloading
// function greet(firstName, lastName, language = "en") {
//   language === "en" && console.log(`Hello ${firstName} ${lastName}`);
//   language === "es" && console.log(`Hola ${firstName} ${lastName}`);
// }

// //common design pattern
// function greetEnglish(firstName, lastName) {
//   greet(firstName, lastName, "en");
// }

// function greetSpanish(firstName, lastName) {
//   greet(firstName, lastName, "es");
// }

// greet("John", "Doe", "en");
// greet("John", "Doe", "es");

// greetEnglish("John", "Doe");
// greetSpanish("John", "Doe");

//Immediately invoked function expression
// const greet = ((name) => {
//   return "Hello " + name;
// })("John");

// console.log(greet);

//another way to trick the syntax parser to tell that after using an anonymous function need not to be statement
// (function (name) {
//   console.log("Hello " + name);
// })("Niranjan");

//CLOSURES

// const greet = (whatToSay) => (name) => console.log(`${whatToSay} ${name}`);
// const sayHello = greet("Hello");

// sayHello("John");
//here the sayHello function along with its lexical environment form a closure

// const buildFunctions = () => {
//   var array = [];

//   for (var i = 0; i < 3; i++) {
//     array.push(() => console.log(i));
// here since var is not block scoped and if the  functions that are put into the array are
// not executed after the for loop the value of i will be 3 and when we try to call this functions
// later the functions still has access to the outer lexical environment where the value of i will be 3
// so in the console 3 3 3 will be printed
//   }

//   return array;
// };

// const fs = buildFunctions();

// console.log(fs[0]());
// console.log(fs[1]());
// console.log(fs[2]());

//to get the desired outputs
// const buildFunctions2 = () => {
//   var array = [];

//   for (var i = 0; i < 3; i++) {
//     array.push(
//       (
//         (j) => () =>
//           console.log(j)
//       )(i)
//     );
//   }

//   return array;
// };

// const fs2 = buildFunctions2();

// console.log(fs2[0]());
// console.log(fs2[1]());
// console.log(fs2[2]());

//another method is just to use let instead of let since let is block scoped
//each time the for loop runs it will be having different values in the memory

// function factories

// const makeGreeting = (language) => (firstName, lastName) => {
//   language === "en" && console.log("Hello " + firstName + " " + lastName);
//   language === "es" && console.log("Hola " + firstName + " " + lastName);
// };

// const greetEnglish = makeGreeting("en");
// const greetSpanish = makeGreeting("es");
//here even though these function expressions refer to the same outer function
//two separate execution context are created

// console.log(greetEnglish());
// console.log(greetSpanish());

// callbacks
// const tellMeWhenDone = (callback) => {
//   const a = 10000; //some work
//   const b = 20000; //some work

//   callback();
// };

// tellMeWhenDone(() => console.log("it's done"));
// tellMeWhenDone(() => alert("it's done"));

//call apply bind
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   getFullName() {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   },
// };

// const logName = function (lang1, lang2) {
//   console.log("Logged: " + this.getFullName());
//   console.log(lang1 + " " + lang2);
// };

// const logPersonName = logName.bind(person); //creates  a copy of the function with the object attached to it
// logPersonName();

// logName.call(person, "en", "es"); //first parameter should be "this"
// logName.apply(person, ["en", "es"]); //first parameter should be "this" and arguments should be in an array

// //another method
// (function (lang1, lang2) {
//   console.log("Logged: " + this.getFullName());
//   console.log(lang1 + " " + lang2);
// }.apply(person, ["mal", "hin"]));

// //one use case  // function borrowing
// const person2 = {
//   firstName: "Jane",
//   lastName: "Doe",
// };

// console.log(person.getFullName.call(person2));

//function currying : creating a copy of a function with some preset parameters
// const multiply = (a, b) => a * b;

// const multiplyByTwo = multiply.bind(this, 2);
// console.log(multiplyByTwo(5));

// const multiplyByThree = multiply.bind(this, 3);
// console.log(multiplyByThree(6));

//********* FUNCTIONAL PROGRAMMING********/
// const arr = [1, 2, 3];
// console.log(arr);

// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   newArr.push(i * 2);
// }

// console.log(newArr);

//FP approach to implement the same functionality
// const map = (array, fn) => {
//   const newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     newArr.push(fn(array[i]));
//   }
//   return newArr;
// };

// map([1, 2, 3, 4], (i) => i * 2);
// map([1, 2, 3, 4], (i) => i > 2);

//another logic
// const checkPastLimit = (limiter, item) => limiter > item;

// const array2 = map([1, 2, 3, 4], checkPastLimit.bind(this, 2));
// console.log(array2);

// const checkPastLimitSimplified = (limiter) =>
//   ((limiter, item) => limiter > item).bind(this, limiter);

// const array3 = map([1, 2, 3, 4], checkPastLimitSimplified(3));
// console.log(array3);

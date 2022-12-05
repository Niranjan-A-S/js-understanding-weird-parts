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
function greet(firstName, lastName, language = "en") {
  language === "en" && console.log(`Hello ${firstName} ${lastName}`);
  language === "es" && console.log(`Hola ${firstName} ${lastName}`);
}

//common design pattern
function greetEnglish(firstName, lastName) {
  greet(firstName, lastName, "en");
}

function greetSpanish(firstName, lastName) {
  greet(firstName, lastName, "es");
}

greet("John", "Doe", "en");
greet("John", "Doe", "es");

greetEnglish("John", "Doe");
greetSpanish("John", "Doe");

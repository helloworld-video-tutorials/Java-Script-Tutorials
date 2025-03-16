//Constants
const PI = 3.14;
console.log(PI);
PI = 3.15; // Error: Assignment to constant variable.

// //Local variable using let
// function sayHello() {
//     let message = "Hello!"; // Declaration
//     message = "World!"; // Can't do Re-Declaration via let. But you can re-assign the value.
//     console.log(message);
// }

// //Local variable using var
// function sayHello() {
//     var message = "Hello!"; // Declaration
//     var message = "World!"; // Re-Declaration
//     console.log(message);
// }


//Global variable
// var $message = "Hello, World!";
// var _message = "Hi There!";
// // var 1message = "Hi There!";

// function sayHello() {   
//     console.log($message);
//     console.log(_message);
// }
// // Task 1

// // Simple function
// function logMessage() {
//     console.log('Hello Codenation');
// }

// // Higher-order function
// function runFunctionMultipleTimes(func, times) {
//     for (let i = 0; i < times; i++) {
//         func();
//     }
// }

// // Run the higher-order function with the simple function
// runFunctionMultipleTimes(logMessage, 5);

// ****************************************************************************************

//Task 2

// const originalArray = [1, 2, 3, 4, 5];

// const multipliedArray = originalArray.map(function (item) {
//     return item * 3;
// });

// console.log(multipliedArray);

// ****************************************************************************************

// // Task 3
// const add = (a, b) => {
//     return a + b;
// }

// const subtract = (a, b) => {
//     return a - b;
// }

// const multiply = (a, b) => {
//     return a * b;
// }

// const divide = (a, b) => {
//     return a / b;
// }

// const doMaths = (num1) => {
//     return (num2, fn) => {
//         return fn(num1, num2);
//     };
// };

// // Test the doMaths function
// const numToOperateOn = 5;
// const result1 = doMaths(numToOperateOn)(3, add);
// const result2 = doMaths(numToOperateOn)(2, subtract);
// const result3 = doMaths(numToOperateOn)(4, multiply);
// const result4 = doMaths(numToOperateOn)(2, divide);

// console.log(`Result of adding: ${result1}`);
// console.log(`Result of subtracting: ${result2}`);
// console.log(`Result of multiplying: ${result3}`);
// console.log(`Result of dividing: ${result4}`);


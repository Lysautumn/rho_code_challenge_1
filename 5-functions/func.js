// 1 - Write a function declaration that takes no arguments and returns the value 4
function returnFour() {
  return 4;
}
/*
2 - Write a function declaration that takes two arguments and returns the value
    of the result of the multiplication of both arguments
*/
function multiply (num1, num2) {
  return num1 * num2;
}
// 3 - Write a function expression that takes one argument and console logs that value.
function consoleLog(x) {
  console.log(x);
}
// 4 - Write a function declaration that takes a number and divides it by two.
function divideTwo(num) {
  return num / 2;
}
/*
5 - Call the function from 4 and pass it into the function from 2 called with
    the arguments 10, 20. Console log the result.
*/
console.log(divideTwo(multiply(10, 20)));

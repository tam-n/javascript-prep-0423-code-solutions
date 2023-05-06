function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var sumOfNumbers = addTwoNumbers(2, 2);
console.log('Result of addTwoNumbers:', sumOfNumbers);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var numMinutes = convertHoursToMinutes(2);
console.log('Result of convertHoursToMinutes:', numMinutes);

function getGreeting(name) {
  const greeting = 'Hello ' + name + '!';
  return greeting;
}
var myGreeting = getGreeting('Tam');
console.log('Result of getGreeting:', myGreeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var numResult = addAndMultiplyBy5(10, 5);
console.log('Result addAndMultiplyBy5:', numResult);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiplyAndDivideResult = multiplyAndDivideBy5(35, 10);
console.log('Result of multiplyAndDivideBy5:', multiplyAndDivideResult);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('Result of subtractTwoNumbers:', subtractTwoNumbersResult);

function getCircumference(radius) {
  return 2 * Math.PI * radius;
}
var getCircumferenceResult = getCircumference(5);
console.log('Result of getCircumference:', getCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var fullName = getFullName('Tam', 'Nguyen');
console.log('Result of getFullName:', fullName);

function cube(number) {
  return number ** 3;
}
var cubeResult = cube(5);
console.log('Result of cube:', cubeResult);

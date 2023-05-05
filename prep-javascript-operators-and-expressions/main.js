const number1 = 2;
const number2 = 7;
const product = number1 * number2;
console.log('Value of product:', product);
console.log('Type of product:', typeof product);

const charge = 4;
const payment = 3;
const amountRemaining = charge - payment;
console.log('Value of amountRemaining:', amountRemaining);
console.log('Type of amountRemaining:', typeof amountRemaining);

const tests = 92;
const assignments = 83;
const final = 87;
const grade = (tests + assignments + final) / 3;
console.log('Value of grade:', grade);
console.log('Type of grade:', typeof grade);

const firstName = 'Tam';
const lastName = 'Nguyen';
const fullName = `${firstName} ${lastName}`;
console.log('Value of fullName:', fullName);
console.log('Type of fullName:', typeof fullName);

const pH = 7.4;
const isAcidic = pH < 7;
console.log('Value of isAcidic:', isAcidic);
console.log('Type of isAcidic:', typeof isAcidic);

const numberOfSoldiers = 550;
const isSparta = numberOfSoldiers === 300;
console.log('Value of isSparta:', isSparta);
console.log('Type of isSparta:', typeof isSparta);

let nickname = fullName;
nickname = `${nickname}` + ' is the GOAT.';
console.log('Value of nickname:', nickname);
console.log('Type of nickname:', typeof nickname);

const person = {
  firstName: 'Tam',
  lastName: 'Nguyen',
  hobby: 'Going to the gym',
  job: 'Registered nurse',
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

console.log("The person's current job is:", person.job);

person['previousJob'] = 'Optometric Technician';
console.log("The person's previous job was:", person['previousJob']);
console.log(person);

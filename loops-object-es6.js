 // review of loops

for (let i = 0; i <= 10; i++) {
console.log('i is equal to ' + i)
/*
this is the conditional section aka predicate that checks for exiting the code the loop 
and what we do have  after the code
*/
};

//  this is a forEach loop. Note that it starts with what we will loop through, 
//  in this case it is the numbers array

const numbers = [1,2,3,4,5,6,7,8,'last item in array'];

numbers.forEach(number => {
    console.log(number)
});

// this is a sample of the while loop.
let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
};

// introducing arrow functions
const birthdate = 1998;
var date = new Date() 
var currentYear = date.getFullYear();

function calculateAge(birthdate, currentYear) {
    let age = currentYear - birthdate;
    console.log(age);
};

calculateAge();

// arrow functions

const calculateHeight = () => {};

const crew = ['Erick','Paul','Tom','Josh','Rita','Jessy','Luna'];

crew.forEach( (person) => {
    console.log(person);
});
// more about objects

const aboutMe = {
    age: 22,
    city: 'Chelsea',
    favColor: 'Blue'
};

aboutMe.favColor = 'Red';

console.log(aboutMe);

// triple dot `...` aka destructuring
/* 
this is used in objects and arrays
*/

const [ first, name,...second ] = crew
console.log({ first,name, second });

const [uno, dos, tres, cuatro, ...cinco] = numbers
console.log({uno, dos, tres, cuatro, ...cinco});
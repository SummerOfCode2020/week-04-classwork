/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
// review of loops
// array data type has forEach()
// for loop
// while loop 
for (let i = 0; i <= 10; i++) {
  // eslint-disable-next-line no-console
  console.log('Loop number ' + i)
}

// introducing arrow functions
function calculateAge() {}

const calculateHeight = () => {}

const officeWorkers = ['Toby', 'Creed', 'Kevin', 'Michael']

officeWorkers.forEach((officeWorker) => {
  console.log(officeWorker)
})
// more about objects

const cloneTrooper = {
  name: 'Fin',
  rank: 'Lead'
}

cloneTrooper.rank = 'E1'

// triple dot `...` aka destructuring
const [firstPerson, secondPerson, ...everyOneElse] = officeWorkers

console.log({ firstPerson, secondPerson, everyOneElse })


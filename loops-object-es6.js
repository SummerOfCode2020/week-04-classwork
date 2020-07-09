// review of loops
// for loops
for (let i = 0; i <= 10; i++) {
  // eslint-disable-next-line no-console
  console.log('Loop # ' + i)
}
// introducing arrow functions
function calculateAge(params) {
}
const calculateHeight = () => { }

const officeWorkers = ['Toby', 'Creed', 'kevin', 'michael']

officeWorkers.forEach((officeWorker) => {
  console.log(officeWorker)
})

// more about objects

let cloneTrooper = {
  name: 'Fin',
  rank: 'E1'
}

cloneTrooper.rank = 'E2'
// triple dot `...` aka destructuring

// ... for Arrays

const [first, ...everyOneElse] = officeWorkers

console.log({ first, everyOneElse })
// ... for objects


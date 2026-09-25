const prompt = require('prompt-sync')()
const name = Number(prompt('what is your name'))
let age = Number(prompt('what is your age'))
age +=10
console.log(age)
if (age >= 18)
     console.log('enfant')
     else console.log('adulte')
     
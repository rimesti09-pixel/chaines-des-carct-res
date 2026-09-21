const prompt = require('prompt-sync')();
let phrase = prompt("type your text")
let pc = 0
for (let caractere of phrase ){
    pc++;
}

console.log(`la longueur de "${phrase}" est de ${pc} caractères.`)
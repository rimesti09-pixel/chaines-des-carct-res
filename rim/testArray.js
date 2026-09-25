const prompt = require('prompt-sync')();
let a=[];
for(let i = 0; i <=9; i++){
      
    let b = prompt (`le resultat est :`)
      a.push(b);
      }
      a.shift();
      a.shift();
      a.pop();
      a.pop();
      for (let i = 0; i<a.length; i++){
        a[i] = a[i]*2
      }


console.log(a);






const prompt = require (`prompt-sync`)();
let a = [50,7,39,11,99,62,75,5.6];
for (let i = 0 ; i < a.length; i++){
    for(let j = 0; j <a.length-1; j++){
        if (a[j]>a[j+1]){
            let temp=a[j]
            a[j]=a[j + 1]
            a[j + 1]= temp

        }
        
    }
}
console.log(a)

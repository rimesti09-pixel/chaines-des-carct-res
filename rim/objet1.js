<<<<<<< HEAD
const e1 = {
    nom :"Bilal" ,
    prenom : 'Denkir' ,
    villeDeResidence : "Casablanca",
    dateDeNaissance : "14/02/1993" ,
    notes : [8,2,19]
}
const e2 = {
    nom :"Fati" ,
    prenom : 'Denkir' ,
    villeDeResidence : "Casablanca",
    dateDeNaissance : "14/02/1993" ,
    notes : [18,20,12]
}
const e3 = {
    nom :"Mohammed" ,
    prenom : 'Test' ,
    villeDeResidence : "Safi",
    dateDeNaissance : "14/02/1992" ,
    notes : [8,12,19,12,23,34,12]
}

const classRoom = { 
    numClasses : 1,
    etudiants : [e1,e2,e3],
    campusClasses : "SAFI",
    nomClasses : "Classe Achraf"
}

console.log(classRoom.etudiants[0].villeDeResidence);


let a  = 0;

for(let i = 0  ; i<classRoom.etudiants[2].notes.length ; i++){
    a = a +  classRoom.etudiants[2].notes[i];
}

let b  = a / classRoom.etudiants[2].notes.length;

console.log(b.toFixed(2));
=======
const e1 = {
    nom :"Bilal" ,
    prenom : 'Denkir' ,
    villeDeResidence : "Casablanca",
    dateDeNaissance : "14/02/1993" ,
    notes : [8,2,19]
}
const e2 = {
    nom :"Fati" ,
    prenom : 'Denkir' ,
    villeDeResidence : "Casablanca",
    dateDeNaissance : "14/02/1993" ,
    notes : [18,20,12]
}
const e3 = {
    nom :"Mohammed" ,
    prenom : 'Test' ,
    villeDeResidence : "Safi",
    dateDeNaissance : "14/02/1992" ,
    notes : [8,12,19,12,23,34,12]
}

const classRoom = { 
    numClasses : 1,
    etudiants : [e1,e2,e3],
    campusClasses : "SAFI",
    nomClasses : "Classe Achraf"
}

console.log(classRoom.etudiants[0].villeDeResidence);


let a  = 0;

for(let i = 0  ; i<classRoom.etudiants[2].notes.length ; i++){
    a = a +  classRoom.etudiants[2].notes[i];
}

let b  = a / classRoom.etudiants[2].notes.length;

console.log(b.toFixed(2));
>>>>>>> 4076a39 (this is a commit)

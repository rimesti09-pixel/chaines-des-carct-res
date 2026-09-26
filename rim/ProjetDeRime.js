// Pour utiliser prompt dans le terminal Node.js
const prompt = require (`prompt-sync`)();
// Mon tableau pour garder les candidats

let candidats = [];
//variable pour stoker le choix 
let choix; 
do {
    console.log("GESTION DES ELECTIONS - MENU PRINCIPAL");
    console.log("1. Ajouter un nouveau candidat");
    console.log("2. Ajouter plusieurs candidats ");
    console.log("3. Afficher la liste des candidats");
    console.log("4. Voter pour un candidat");
    console.log ("5. Modifier les informations d'un candidat");
    console.log("6. Supprimer un candidat");
    console.log ("7. Rechercher un candidat par nom");
    console.log("8. Afficher les statistiques de l'élection");
    console.log("9. Quitter");
    choix = prompt("Votre choix (1-9) : ")
    
switch (choix) {
    case "1":
      ajouterCandidat();
      break;

    case "2":
      ajouterPlusieursCandidats();
      break;

    case "3":
      console.log(" Vous avez choisi: Afficher les candidats");
      break;

    case "4":
      console.log("Vous avez choisi: Voter");
      break;

    case "5":
      console.log(" Vous avez choisi: Modifier");
      break;

    case "6":
      console.log(" Vous avez choisi: Supprimer");
      break;

    case "7":
      console.log(" Vous avez choisi: Rechercher");
      break;

    case "8":
      console.log(" Vous avez choisi: Statistiques");
      break;

    case "9":
      console.log("Au revoir !");
      break;

    default:
      console.log("Choix invalide ! Tapez un chiffre entre 1 et 9.");
  }

}while(choix !== "9")

function ajouterCandidat() {
        console.log("Ajouter un nouveau candidat ")
    let cin = prompt(" CIN: ");
    let nom = prompt(" nom: ");
    let prenom = prompt(" prenom: ");
    let partiPolitique = prompt("Entrez la parti politique (ou indépendant): ");
    let age = Number(prompt("age: "));

    let candidat = {
        cin: cin,
        nom: nom,
        prenom: prenom,
        partiPolitique: partiPolitique,
        age: age,
        electeurs: []
    };
    candidats.push(candidat);
    console.log("candidat ajouter avec succés");
};
// Ajout des plusieurs candidats

function ajouterPlusieursCandidats() {

    console.log("Ajouter plusieurs candidats");
    let number = Number(prompt("Combien de candidats voulez-vous ajouter? : "));
    for (let i = 0; i < number; i++) {
        console.log(`Candidat N°${i + 1}`);
        let cin = prompt(" CIN: ");
        let nom = prompt("nom: ");
        let prenom = prompt("prenom: ");
        let partiPolitique = prompt("parti politique: ");
        let age = Number(prompt("age : "));
 {
        let candidat = {
        
            cin: cin,
            nom: nom,
            prenom: prenom,
            partiPolitique: partiPolitique,
            age: age,
            electeurs: []
        };
            candidats.push(candidat)
                console.log("candidat ajouter avec succés");

        };
    }
  }


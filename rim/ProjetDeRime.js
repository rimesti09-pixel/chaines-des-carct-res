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
      afficherCandidats();
      break;

    case "4":
      voter ();
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
function afficherCandidats() {
  if (candidats.length === 0) {
    console.log("Aucun candidat enregistré pour le moment.");
    return;
  }

  console.log("OPTIONS D'AFFICHAGE ");
  console.log("1. Afficher tous les candidats");
  console.log("2. Trier par votes");
  console.log("3. Filtrer par parti politique");
  
  let sousChoix = prompt("Votre choix (1-3) : ");



  if (sousChoix === "1") {
  for (let i=0; i < candidats.length;i++) {
    console.log(candidats[i].nom );
    console.log(candidats[i].prenom);
    console.log("Votes:");
    console.log(candidats[i].electeurs.length);
  }
}
else if(sousChoix ==="2"){
  for (let i = 0; i < candidats.length; i++ ){
    for (let j = i + 1 ; j < candidats.length;j++){
      let candidatTemporaire = candidats[i];
       candidats[i] = candidats[j];
       candidats[j] = candidatTemporaire;
    }
  }
}
  for (let i=0; i < candidats.length;i++) {
    console.log(candidats[i].nom );
    console.log(candidats[i].prenom);
    console.log("Votes:");
    console.log(candidats[i].electeurs.length);
  }
} if (sousChoix === "3"){
    let parti = prompt ("Parti : ");
    for (let i=0; i < candidats.length;i++) {
      if (candidats[i].partiPolitique === parti){
        console.log(candidats[i].nom );
        console.log("parti:");
        console.log(candidats[i].partiPolitique );
      }
    }
  }
else{
  console.log("choix invalide !");

}

function voter() {
    if (candidats.length === 0) {
        console.log("Aucun candidat disponible pour le vote.");
        return;
    }

    let cinElecteur = prompt("Entrez votre CIN (Électeur) : ");
    let dejaVote = false;
    for (let i = 0; i < candidats.length; i++) {
        for (let j = 0; j < candidats[i].electeurs.length; j++) {
            if (candidats[i].electeurs[j] === cinElecteur) {
                dejaVote = true;
                break;
            }
        }
        if (dejaVote) break;
    }

    if (dejaVote) {
        console.log("Vous avez déjà voté et vous n'avez pas le droit de modifier votre vote ni de voter à nouveau");
        return;
    }

    let cinCandidat = prompt("Entrez le CIN du candidat pour lequel vous voulez voter : ");
    let candidatTrouve = false;

    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cinCandidat) {
            candidats[i].electeurs.push(cinElecteur);
            console.log("Votre vote a été enregistré avec succès !");
            candidatTrouve = true;
            break;
        }
    }

    if (!candidatTrouve) {
        console.log("Candidat non trouvé avec ce CIN.");
    }
}

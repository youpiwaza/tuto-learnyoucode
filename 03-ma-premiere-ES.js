// ATTENTION la vraie syntaxe nodeJS14
//      Le type module doit être spécifié
//          On utilise package.json
//              https://stackoverflow.com/a/59399717
// import { readFileSync } from 'fs';

// Tout pourri pourrav' mais sans import
const fs = require('fs');

// console.log(process.argv);
// console.log(process.argv[2]);
let nomDeFichier = process.argv[2];

// console.log(fs);

// On récupère un fichier
//      https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options
//      ATTENTION PUTAIN /!\
//          Renvoie un objet type Buffer
//             OU ALORS un String si l'encodage est spécifié

// let leBufferDuFichier = readFileSync(nomDeFichier); // Nouvelle syntaxe avec imports
// let leBufferDuFichier = fs.readFileSync(nomDeFichier); // Ancien truc pour faire passer learnyounode verify
let maChaineDeCaractereOuKesKeJeDoisCompterLenombreDeLignes = fs.readFileSync(nomDeFichier, 'utf8'); // Ancien truc pour faire passer learnyounode verify
// console.log(leBufferDuFichier); // tas de merde

// let maChaineDeCaractereOuKesKeJeDoisCompterLenombreDeLignes = leBufferDuFichier.toString();
// console.log(maChaineDeCaractereOuKesKeJeDoisCompterLenombreDeLignes); // Un joli texte d'agression de poney

//// On compte le nombre de lignes
// On transforme en tableau, chaque case contient une ligne
//          https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/split
const tab = maChaineDeCaractereOuKesKeJeDoisCompterLenombreDeLignes.split('\n');
// On compte
const nbLignes = tab.length - 1;
//                            ^--v
//      À ce propos, le fichier de test n’aura
// pas de '\n' à la fin, donc il contiendra un élément de plus que le nombre
// de fins de ligne.

// On affiche le nombre de lignes
console.log(nbLignes);
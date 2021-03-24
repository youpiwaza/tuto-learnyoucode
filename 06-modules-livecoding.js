// Récupérer le module
const myModule = require('./06-modules-livecoding-l-import');


// console.log(process.argv);
const folderName        = process.argv[2];
let extensionAFiltrer   = process.argv[3]; // md
//                                                        v attention, pas de () !
//                                                        v C'ets une ref, pas un appel
// const callbackLaFonctionQuiVientDeLExterieur = console.log;
const callbackLaFonctionQuiVientDeLExterieur = (err, data) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log(data.join('\n'));
    }
};

// Exécuter le module
myModule(folderName, extensionAFiltrer, callbackLaFonctionQuiVientDeLExterieur);

// //// Ancien temps
// function maFonction () {
//     // sldkfjsldkfj
// }
// maFonction(); // Appel
// maFonction;  // Référence

// // Le truc un peu débile mais pas trop
// () => console.log();

// // Les enfants consanguins
// const maFonction = () => console.log(); // Référence
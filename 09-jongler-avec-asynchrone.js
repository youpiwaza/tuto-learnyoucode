// Reprise du 8 BL avec pipe

//// ATTENTION, j'ai fait ma correction avec un module afin que cela soit plus 'propre'
//// Cela fonctionne, mais c'est rendu plus complexe à cause du scope
//// (pas de variables globales comme dans la solution officielle)

//// Bref, si tu cherches un truc simple, go corrigé officiel

// bl (Buffer List), avec pipe sur le flux
//      https://npmjs.com/bl
//      > npm i bl

const chargeUnBousin = require('./09-jongler-avec-asynchrone-mon-module-charge-le-bousin');

// console.log(process.argv);
const tousLesArgs = [ ...process.argv ];
const tousLesArgsSansLes2Premiers = tousLesArgs.splice(2, tousLesArgs.length);

// console.log(tousLesArgsSansLes2Premiers);

//// Test avec un seul chargement
// let kikonCharge = process.argv[2];
// let combienKonFini  = 0;
// let lesTrucsFinis   = [];
// let positionDansLaFile = 0;
// let totalDestrucsACharger = 1;

// chargeUnBousin(kikonCharge, combienKonFini, lesTrucsFinis, positionDansLaFile, totalDestrucsACharger);

//// On charge tous les fichiers
let combienKonFini          = 0;
let lesTrucsFinis           = [];
let totalDestrucsACharger   = tousLesArgsSansLes2Premiers.length;

const callbackLaFonctionQuiVientDeLExterieur = (err, monObjetQuiContientDonneesEtPosition) => {
    if(err) {
        console.log(err);
    }
    else {
        lesTrucsFinis[monObjetQuiContientDonneesEtPosition.positionDansLaFile] = monObjetQuiContientDonneesEtPosition.donnees;
        combienKonFini++;

        // console.log(`J'ai fini de charger ${monObjetQuiContientDonneesEtPosition.positionDansLaFile}`);
        
        // Si tout a fini de charger
        if(combienKonFini >= totalDestrucsACharger) {
            // console.log(`J'ai tout chargé !!`);
            // On affiche
            console.log(lesTrucsFinis.join('\n'));
        }
    }
};

tousLesArgsSansLes2Premiers.forEach((element, index) => {
    chargeUnBousin(
        // kikonCharge
        element
        // positionDansLaFile
        ,index
        // cf. 06-modules-livecoding
        ,callbackLaFonctionQuiVientDeLExterieur
        );
    }
);

const
    fs = require('fs')
    ,path = require('path')
;

// Renvoyer un tableau contenant les fichiers triés
function filterDir (folderName, extensionAFiltrer, callbackLaFonctionQuiVientDeLExterieur) { 

    extensionAFiltrer = `.${extensionAFiltrer}`;

    fs.readdir(
        folderName,
        (err, list) => {
            if (err) {
                return callbackLaFonctionQuiVientDeLExterieur(err) // propagation et court-circuit
            }
            // On filtre le tableau qui contient les éléments, en fonction de leur extension
            const result = list.filter(elementQuejeVaisTester => {
                return (path.extname(elementQuejeVaisTester) === extensionAFiltrer);
            });
            
            // console.log(result);
            // console.log(result.join('\n'));
            // tout s’est bien passé, on appelle `callback` avec `null` pour
            // l’argument d’erreur
            // callbackLaFonctionQuiVientDeLExterieur(result);
            callbackLaFonctionQuiVientDeLExterieur(null, result);
        }
    );
}

module.exports = filterDir;
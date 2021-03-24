// Ce module doit exporter une unique fonction qui prendra trois
//   arguments : le chemin du répertoire, l’extension de filtrage et une
//   fonction de rappel, dans cet ordre.
const
    fs = require('fs')
    ,path = require('path')
;

// La même merde que dans le 5, may dans une fonction
// avec certains trucs qui proviennent de l'extérieur
function filterDir (chemingDuDossier, extensionAFiltrer, callback) { 
    extensionAFiltrer = `.${extensionAFiltrer}`;

    fs.readdir(
        chemingDuDossier,
        (err, list) => {
            // console.log(err);
            // console.log(list);

            // propagation et court-circuit
            if (err) {
                return callback(err);
            }

            // Filtre en fonction de l'extension du fichier
            const resultatSousFormeDeTableau = list.filter(elementQuejeVaisTester => {
                return (path.extname(elementQuejeVaisTester) === extensionAFiltrer);
            });
            
            // Tout s’est bien passé, on appelle `callback` avec `null` pour l’argument d’erreur
            //      Attention, on doit renvoyer un tableau, le join est à l'exterieur
            return callback(null, resultatSousFormeDeTableau);
        }
    );
}

module.exports = filterDir;
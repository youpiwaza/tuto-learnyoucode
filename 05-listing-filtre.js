const
    fs = require('fs')
    ,path = require('path')
;
const filename          = process.argv[2];
let extensionAFiltrer   = process.argv[3]; // md
// On transforme "md" en ."md"
extensionAFiltrer = `.${extensionAFiltrer}`;

// console.log(extensionAFiltrer);

// Récupérer l'extension d'un fichier
//      https://nodejs.org/api/path.html#path_path_extname_path
// test > .html > OK
// console.log(path.extname('index.html'));

// Lire le contenu d'un dossier
//      https://nodejs.org/docs/latest-v14.x/api/fs.html#fs_fs_readdir_path_options_callback
fs.readdir(
    filename,
    (err, list) => {
        // console.log(err);
        // console.log(list);

        // On filtre le tableau qui contient les éléments
        //      https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        const result = list.filter(elementQuejeVaisTester => {
            // Extraire son extension
            // Je vais la tester > Si c'est la bonne, on garde
            // console.log(path.extname(elementQuejeVaisTester));
            
            // console.log(path.extname(elementQuejeVaisTester) === extensionAFiltrer);
            return (path.extname(elementQuejeVaisTester) === extensionAFiltrer);
        });

        // console.log(result); // OK
        // Affichage souhaité
        //      https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/join
        console.log(result.join('\n'));
    }
);

const myModule = require('./06-le-module-en-question')

// console.log(process.argv);

const folderName        = process.argv[2];
let extensionAFiltrer   = process.argv[3];

myModule(   folderName,
            extensionAFiltrer,
            (err, resultatSousFormeDeTableau) => {
                // if(err) {
                //     console.log(err)
                // }
                // else {
                //     console.log(resultatSousFormeDeTableau.join('\n'))
                // }

                // Version raccourcie en ternaire
                console.log(err?err:resultatSousFormeDeTableau.join('\n'));
            }
);
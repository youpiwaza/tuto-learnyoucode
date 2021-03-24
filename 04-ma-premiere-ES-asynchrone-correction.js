const fs = require('fs');

// console.log(process.argv);
let nomDeFichier = process.argv[2];

//      https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
fs.readFile(
    nomDeFichier,
    'utf8', // Force String output
    (err, data) => {
        if (err)
            throw err;
        // console.log(data);
        const tab = data.split('\n');
        const nbLignes = tab.length - 1;
        console.log(nbLignes);
    }
);


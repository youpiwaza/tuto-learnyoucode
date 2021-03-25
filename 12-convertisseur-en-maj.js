// module through2-map
//      https://www.npmjs.com/package/through2-map
//      > npm install through2-map

// console.log(process.argv);
const tousLesArgs       = [ ...process.argv ];
//// Solution de l'exo
const port              = tousLesArgs[2];

console.log(`Go clic : http://localhost:${port}/`);

const   fs = require('fs')
        ,http = require('http')
        ,map  = require('through2-map')
;

const server = http.createServer((request, response) => {
    // Est-ce que c'est bien une requête POST ? osef
    
    // Copié/collé débile de ce qui est fourrni dans l'énoncé,
    //  en adaptant les flux d'entrée/sortie avec les paramètres passés a createServer
    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(response);
})
server.listen(port);
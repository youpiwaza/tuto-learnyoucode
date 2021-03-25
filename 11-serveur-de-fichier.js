// Serveur net
//      https://nodejs.org/docs/latest-v14.x/api/net.html

// console.log(process.argv);
const tousLesArgs       = [ ...process.argv ];
//// Solution de l'exo
// const port              = tousLesArgs[2];
// const fichierAServir    = tousLesArgs[3];

//// Test sur un vrai fichier à nous,
//      dont le contenu sera affiché dans le navigateur stu clique le lien
//      > node 11-serveur-de-fichier.js
const port              = 8080;
const fichierAServir    = 'README.md';

console.log(`Go clic : http://localhost:${port}/`);

const   fs = require('fs')
        ,http = require('http')
;

const server = http.createServer((request, response) => {
    // Kwa ke le navigateur demande (url tapée dans chrome/fifox)
    // (en-tête et query string (GET))
    // console.log(request);
    // Kwakon renvoie (en-têtes + corps)
    // console.log(response);

    response.writeHead(200, { 'content-type': 'text/plain' })

    //  https://nodejs.org/en/knowledge/advanced/streams/how-to-use-fs-create-read-stream/
    const stream  = fs.createReadStream(fichierAServir);
    // This will wait until we know the readable stream is actually valid before piping
    stream.on('open', function () {
        // This just pipes the read stream to the response object (which goes to the client)
        stream.pipe(response);
    });
    
    // This catches any errors that happen while creating the readable stream (usually invalid names)
    stream.on('error', function(err) {
        response.end(err);
    });
})
server.listen(port)
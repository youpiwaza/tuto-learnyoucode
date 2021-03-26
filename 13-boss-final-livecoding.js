const http = require('http');

// console.log(process.argv);
const tousLesArgs = [ ...process.argv ];
//// Solution de l'exo
const port        = tousLesArgs[2];

// console.log(`Go clic : http://localhost:${port}/`);

const server = http.createServer((request, response) => {
    // console.log(request);
    // console.log(request.headers.host);
    // console.log(request.url);
    // console.log(new URL('/?CHAT=CHIEN')); // suggestion de la doc learnyounode
    // console.log(new URL(request.url));

    // Le format voulu : const myURL = new URL('/foo', 'https://example.org/');
    // On fabrique l'url, exemple :
    // const myURL = new URL('/?CHAT=CHIEN', `http://localhost:666/`);
    const myURL = new URL(request.url, `http://${request.headers.host}/`);

    // console.log(myURL);

    // console.log('ICI', myURL.searchParams.get('iso'));
    // SI myURL.searchParams.get('iso') existe
    
    // ATTENTION, classe dédiée à l'utilisation des trucs dans GET ( machin.com?ceTruc=La)
    //       https://nodejs.org/docs/latest-v14.x/api/url.html#url_urlsearchparams_get_name
    const maDateAuFormaInternational = myURL.searchParams.get('iso');
    // const maDate = new Date('2021-03-26T09:39:36.373Z');
    const maDate = new Date(maDateAuFormaInternational);

    switch(myURL.pathname) {
        case '/api/parsetime' :
            // console.log('/api/parsetime');
            response.writeHead(200, { 'Content-Type': 'application/json' });

            // Rendu attendu
            // {
            //     "hour": 12,
            //     "minute": 10,
            //     "second": 15
            // }

            // Votre réponse doit être un texte au format JSON.  Jetez un œil à
            // JSON.stringify() pour de plus amples informations.
            return response.end(
                JSON.stringify(
                    {
                        "hour": maDate.getHours(),
                        "minute": maDate.getMinutes(),
                        "second": maDate.getSeconds()
                    }
                )
            );

        break;

        case '/api/unixtime' :
            // console.log('/api/unixtime');
            response.writeHead(200, { 'Content-Type': 'application/json' });
            
            return response.end(
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime
                JSON.stringify(
                    {
                        "unixtime": maDate.getTime()
                    }
                )
            );
        break;

        default :
            console.log(`mauvaise url :'3`);
            response.writeHead(200, { 'Content-Type': 'text/plain' })
            return response.end(`mauvaise url :'3`);
        break;
    }

    // Sécurité
    return response.end(`fing`);
})
server.listen(port);
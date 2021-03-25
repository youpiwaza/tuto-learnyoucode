const   fs = require('fs')
,http = require('http')
,map  = require('through2-map')
,url  = require('url')
;

// console.log(process.argv);
const tousLesArgs       = [ ...process.argv ];
//// Solution de l'exo
const port              = tousLesArgs[2];

// console.log(`Go clic : http://localhost:${port}/`);

const server = http.createServer((request, response) => {
    // console.log(request);
    // console.log(request.headers.host);//        localhost:38081
    // console.log(request.url); //                /api/parsetime?iso=2021-03-25T15:14:49.412Z
    
    //  Fonction dédiées au parse de l'url
    //      https://nodejs.org/docs/latest-v14.x/api/url.html
    //      Format attendu : const myURL = new URL('/foo', 'https://example.org/');
    // console.log(new URL(request.url)); // KO
    
    // Craft de l'url au format attendu
    const monUrl = `http://${request.headers.host}${request.url}`;
    monUrlInfos = new URL(monUrl);
    // console.log(monUrlInfos);

    //// 2 appels sur le serveur
    // URL {
    //     href: 'http://localhost:46593/api/parsetime?iso=2021-03-25T15:30:39.251Z',
    //     origin: 'http://localhost:46593',
    //     protocol: 'http:',
    //     username: '',
    //     password: '',
    //     host: 'localhost:46593',
    //     hostname: 'localhost',
    //     port: '46593',
    //     pathname: '/api/parsetime',
    //     search: '?iso=2021-03-25T15:30:39.251Z',
    //     searchParams: URLSearchParams { 'iso' => '2021-03-25T15:30:39.251Z' },
    //     hash: ''
    // }
    
    // URL {
    //     href: 'http://localhost:17725/api/unixtime?iso=2021-03-25T15:27:16.265Z',
    //     origin: 'http://localhost:17725',
    //     protocol: 'http:',
    //     username: '',
    //     password: '',
    //     host: 'localhost:17725',
    //     hostname: 'localhost',
    //     port: '17725',
    //     pathname: '/api/unixtime',
    //     search: '?iso=2021-03-25T15:27:16.265Z',
    //     searchParams: URLSearchParams { 'iso' => '2021-03-25T15:27:16.265Z' },
    //     hash: ''
    // }

    //      https://developer.mozilla.org/fr/docs/Web/API/URLSearchParams
    const dateToParse = new Date(monUrlInfos.searchParams.get('iso'));
    
    
    // On renvoie toujours du json
    response.writeHead(200, { 'Content-Type': 'application/json' });

    let retour = '';

    ////// 2 possibilités de retour
    switch(monUrlInfos.pathname) {
        //// Si url > /api/parsetime
        case '/api/parsetime':
            // On renvoie : 
            //  {
            //      "hour": 12,
            //      "minute": 10,
            //      "second": 15
            //  }
            
            // Nouvel objet créé à la volée
            // retour = {"hour":zeroFill(dateToParse.getHours()),"minute":zeroFill(dateToParse.getMinutes()),"second":zeroFill(dateToParse.getSeconds())};
            // Pas de zerofill dans la correction è_é
            retour = {
                "hour":dateToParse.getHours(),
                "minute":dateToParse.getMinutes(),
                "second":dateToParse.getSeconds()
            };
        break;
        
        //// Si url > /api/unixtime
        case '/api/unixtime':
            // On renvoie : 
            // { "unixtime": 1376136615474 }

            // Nouvel objet créé à la volée
            retour = {
                "unixtime": dateToParse.getTime()
            };
        break;
        
        default:
            retour =
                {
                    "errorMessage": `Mauvaise url :3`
                }
            ;
        break;
    }

    // console.log(retour);
    // Votre réponse doit être un texte au format JSON.  Jetez un oeil à JSON.stringify()
    // console.log(JSON.stringify(retour));

    // On clôture la requête, sinon le flux ne se ferme pas
    // response.end('bizoux');
    response.end(JSON.stringify(retour));
})
server.listen(port);
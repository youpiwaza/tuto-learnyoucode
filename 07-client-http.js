// Les trois événements qui nous intéressent le plus sont : 'data', 'error' et
//   'end'.  Vous pouvez écouter un événement comme ceci :
// ^ Utilise res.on pour attacher les écouteurs

//  Nodejs > http > get
//      https://nodejs.org/docs/latest-v14.x/api/http.html#http_http_get_options_callback

const http = require('http');

const urlFournie = process.argv[2];
// console.log(urlFournie);

http.get(urlFournie, (res) => {
    const { statusCode } = res;
    const contentType = res.headers['content-type'];
    
    // Vérification du code de retour
    let error;
    if (statusCode !== 200 && statusCode !== 301) {
        error = new Error('Request Failed.\n' +
        `Status Code: ${statusCode}`);
    }
    // Ainsi que du type de fichier reçu
    // else if (!/^application\/json/.test(contentType)) {
    //     error = new Error('Invalid content-type.\n' +
    //     `Expected application/json but received ${contentType}`);
    // }

    if (error) {
        console.error(error.message);
        // Consume response data to free up memory
        res.resume();
        return;
    }

    res.setEncoding('utf8');

    ////// La correction offi ne parle que de ça v, on rajoute les bonnes pratiques de la doc ^
    let rawData = '';

    // Récupération des données petit bout par petit bout
    //      ~Comme le dinosaure dans les magasines quand t'étais petit/e
    res.on('data', (chunk) => { 
        console.log(chunk);

        // On les agglomère
        rawData += chunk;
    });

    // Quand on à tout
    res.on('end', () => {
        try {
            // On traite/affiche le contenu complet
            // console.log(rawData);
            // const parsedData = JSON.parse(rawData);
            // console.log(parsedData);
        } catch (e) {
            console.error(e.message);
        }
    });

    }).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
    });
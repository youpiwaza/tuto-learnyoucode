// bl (Buffer List)
//      https://npmjs.com/bl
//      > npm i bl

const   { BufferList }  = require('bl')
        ,http           = require('http')
;

const urlFournie = process.argv[2];
// console.log(urlFournie);

http.get(urlFournie, (res) => {
    const { statusCode } = res;
    const contentType = res.headers['content-type'];
    
    let error;
    if (statusCode !== 200 && statusCode !== 301) {
        error = new Error('Request Failed.\n' +
        `Status Code: ${statusCode}`);
    }

    if (error) {
        console.error(error.message);
        res.resume();
        return;
    }

    res.setEncoding('utf8');

    // let rawData = '';
    // Création d'une buffer list
    const bl = new BufferList();

    res.on('data', (chunk) => { 
        // rawData += chunk;
        bl.append(chunk);
    });

    // Quand on à tout
    res.on('end', () => {
        try {
            // console.log(rawData.length);
            console.log(bl.length);
            // console.log(rawData);
            console.log(bl.toString());
        } catch (e) {
            console.error(e.message);
        }
    });

    }).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
    }
);
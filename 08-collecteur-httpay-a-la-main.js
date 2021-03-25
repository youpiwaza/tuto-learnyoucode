// Repompe du 7 sans les coms'

const http = require('http');

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

    let rawData = '';

    res.on('data', (chunk) => { 
        rawData += chunk;
    });

    // Quand on à tout
    res.on('end', () => {
        try {
            console.log(rawData.length);
            console.log(rawData);
        } catch (e) {
            console.error(e.message);
        }
    });

    }).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
    }
);
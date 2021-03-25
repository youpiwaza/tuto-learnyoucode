// after
//      https://www.npmjs.com/package/after
//      > npm i after

const   after = require("after")
        ,bl = require('bl')
        ,http = require('http')
;

// console.log(process.argv);
const tousLesArgs                   = [ ...process.argv ];
const tousLesArgsSansLes2Premiers   = tousLesArgs.splice(2, tousLesArgs.length);
const nombreDeTrucsACharger         = tousLesArgsSansLes2Premiers.length;
// console.log(tousLesArgsSansLes2Premiers);

// Une fois que 3 occurences de after() on été appelées, on affiche les résultats
let next = after(nombreDeTrucsACharger, printResults);

const results = [];

function printResults () {
    for (let i = 0; i < 3; i++) {
        console.log(results[i])
    }
}

function httpGet (index) {
    http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err);
            }
            
            results[index] = data.toString();

            // Définie via after()
            next();
        }))
    })
}

for (let i = 0; i < 3; i++) {
    httpGet(i)
}
// async
//      https://npmjs.com/async
//      > npm i async

const   async = require("async")
        //  https://stackoverflow.com/a/48433898
        //  https://www.npmjs.com/package/node-fetch
        ,fetch = require("node-fetch")
;


// console.log(process.argv);
const tousLesArgs = [ ...process.argv ];
const tousLesArgsSansLes2Premiers = tousLesArgs.splice(2, tousLesArgs.length);

// console.log(tousLesArgsSansLes2Premiers);

// ...or ES2017 async functions
async.mapLimit(tousLesArgsSansLes2Premiers, 5, async function(url) {
    const response = await fetch(url);

    return response.body;
}, (err, results) => {
    if (err) throw err;
    // results is now an array of the response bodies
    console.log(results); // oké cay cool mais je fais quoi avec ça :D
})
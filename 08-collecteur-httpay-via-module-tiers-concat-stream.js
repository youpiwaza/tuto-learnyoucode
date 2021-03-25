// concat-stream
//      https://npmjs.com/concat-stream
//      > npm i concat-stream

const   concatStream    = require('concat-stream')
        ,http           = require('http')
;

const urlFournie = process.argv[2];
// console.log(urlFournie);

http.get(urlFournie, (res) => {
        res.pipe(concatStream(function (dataSousFormeDeBuffer) {
            // console.log(dataSousFormeDeBuffer);

            console.log(dataSousFormeDeBuffer.length);
            console.log(dataSousFormeDeBuffer.toString());
        }));
    }
);
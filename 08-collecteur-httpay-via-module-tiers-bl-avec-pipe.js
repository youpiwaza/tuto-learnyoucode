// bl (Buffer List), avec pipe sur le flux
//      https://npmjs.com/bl
//      > npm i bl

const   bl      = require('bl')
        ,http   = require('http')
;

const urlFournie = process.argv[2];
console.log(urlFournie);

http.get(urlFournie, (res) => {
        res.pipe(bl(function (err, dataSousFormeDeBuffer) {
            // console.log(err);
            // console.log(dataSousFormeDeBuffer);

            if(err) throw err;

            console.log(dataSousFormeDeBuffer.length);
            console.log(dataSousFormeDeBuffer.toString());
        }));
    }
);
// Om nom nom 8 BL avec pipe

// bl (Buffer List), avec pipe sur le flux
//      https://npmjs.com/bl
//      > npm i bl

const   bl      = require('bl')
        ,http   = require('http')
;

function chargeUnBousin (kikonCharge, positionDansLaFile, callbackLaFonctionQuiVientDeLExterieur) {
    http.get(kikonCharge, (res) => {
            res.pipe(bl(function (err, dataSousFormeDeBuffer) {
                if (err) {
                    return callbackLaFonctionQuiVientDeLExterieur(err) // propagation et court-circuit
                }
                
                // console.log(`
                //     Je charge ${kikonCharge}\n
                //     et sera rangé dans ${positionDansLaFile}\n
                //     ---\n
                // `);

                // On prépare l'ensemble des infos que l'on va renvoyer à l'extérieur
                // ~grosso merdo un "return multiple" : on met plusieurs infos dans un objet

                const laitRetourDitLesQuébécoisIlsReviennent = {
                    donnees: dataSousFormeDeBuffer.toString()
                    ,positionDansLaFile: positionDansLaFile
                }
                callbackLaFonctionQuiVientDeLExterieur(null, laitRetourDitLesQuébécoisIlsReviennent);
            }));
        }
    );
}

module.exports = chargeUnBousin;
//// Solution machine de guerre
//      http://es6-features.org/#RestParameter
//     console.log(mon4emeParam);
//     console.log(mon5emeParam);
// }

// > node 02-premiers-pas.js 1 2 3 4 5
//      [
//          '/usr/local/bin/node',
//          '/c/Users/Patolash/Documents/_dev/tuto-learnyoucode/02-premiers-pas.js',
//          '1',
//          '2',
//          '3',
//          '4',
//          '5'
//      ]
// hey('/usr/local/bin/node',
// '/c/Users/Patolash/Documents/_dev/tuto-learnyoucode/02-premiers-pas.js',
// '1',
// '2',
// '3',
// '4');
//      http://es6-features.org/#SpreadOperator
// hey(...process.argv);


function additionneTout(exec, filename, ...toutLeReste ) {
    // Je récupère le reste des arguments à l'aide de l'opérateur ...spread
    // console.log(toutLeReste);
    console.log(
        //      https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
        // voir le chti dessin
        toutLeReste.reduce((accumulator, valeurCourante) => Number(accumulator) + Number(valeurCourante))
    );
}

additionneTout(...process.argv);
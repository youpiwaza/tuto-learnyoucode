//// Kwakon a en entrée ?
// console.log(process.argv)

// Solution scolaire
let somme = 0;
// print process.argv
// Je passe sur chacun des éléments
process.argv.forEach((val, index) => {
    // A l'exception des deux premiers ("node" et "nom du fichier")
    if(index !== 0 && index !==1) {
        // Je les additionne
        somme += Number(val);
    }
    // console.log(`${index}: ${val}`);
});

// Une fois que je suis passé sur l'ensemble des éléments
// J'affiche (uniquement è_é) le résultat
console.log(somme);

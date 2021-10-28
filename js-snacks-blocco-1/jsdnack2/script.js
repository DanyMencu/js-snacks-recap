// L'utente inserisce due parole in successione, conn 2 prompt
//Il software stampa prima la parola più corta poi la più lunga

const parola1 = prompt('Inserisci una parola a caso');
console.log(`la prima parola è ${parola1}`);
const parola2 = prompt("Inserisci un'altra parola a caso");
console.log(`la seconda parola è ${parola2}`);

//con gli if
if (parola1.length > parola2.length) {
    console.log(`La parola ${parola2} è più corta della parola ${parola1}`);
} else if (parola1.length < parola2.length) {
    console.log(`La parola ${parola1} è più corta della parola ${parola2}`);
} else {
    console.log(`Le due parole hanno la stessa lunghezza ${parola1}(${parola1.length}) === ${parola2}(${parola2.length})`);
}
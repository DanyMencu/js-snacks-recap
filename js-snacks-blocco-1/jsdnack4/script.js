// Ceea un arrai vuoto
// Chiedi 6 volte all'utente un numero
// Inserisci i numeri disparine nell'arri

const numDispari = [];

for (let i = 0; i < 6; i++) {
    let numero = parseInt( prompt('inserisci un numero') );

    if (numero % 2 !== 0) {
        numDispari.push(numero);
    }
}
console.log( numDispari );
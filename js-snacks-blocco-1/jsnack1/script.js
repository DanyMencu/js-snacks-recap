//Ref
let risultato = document.querySelector(".risultato");
//1. inserimento di due numeri da parte dell'utente con due prompt
const numeroUno = parseInt( prompt("Inserisci un numero") );
const numeroDue = parseInt( prompt("Inserisci un altro numero") );
//2. Stampa del numero maggiore
if ( (isNaN(numeroUno)) || (isNaN(numeroDue)) ) {
    alert("Ricarica la pagina e inserisci un numero per favore.");
}
else {
    if (numeroUno > numeroDue) {
        risultato.innerHTML = `Il numero maggiore è il primo: ${numeroUno}`;
    } else if (numeroUno < numeroDue) {
        risultato.innerHTML = `Il numero maggiore è il secondo: ${numeroDue}`;
    } else {
        risultato.innerHTML = `I due numeri sono uguali: ${numeroUno} = ${numeroDue}`;
    }
}
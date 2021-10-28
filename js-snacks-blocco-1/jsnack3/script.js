//Chiedere 5 volte all'utente di inserire un numero
// Il programma stampa la somma di tutti i numeri con FOR
//poi con WHILE

//versione con FOR
let totale = 0;
for (let i = 0; i < 5; i++) {
    let numero = parseInt( prompt('inserisci un numero') );
    totale += numero;
}
console.log( totale );

/* //VERSIONE CON WHILE
let totale = 0;
let counter = 0;
while (counter < 5) {
    let numero = parseInt( prompt('inserisci un numero') );
    totale += numero;
    counter++;
}
console.log( totale ); */
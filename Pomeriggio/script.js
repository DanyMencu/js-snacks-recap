/* Ogni volta che si clicca un bottone, il nostro programma chiederà un numero di 4 cifre all’utente.
Se l’utente ha inserito un numero corretto, allora il programma calcolerà la somma e le media di tutte le cifre che lo compongono stampandola nel DOM, altrimenti ripeterà la richiesta di inserimento finché non avrà inserito un numero corretto. */

//Ref
const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    let userNumber = prompt('Scrivere un numero di almeno 4 cifre');
    let somma = 0;
    let media = 0;

    while (userNumber.length != 4 || isNaN(userNumber)) {
        userNumber = prompt('Scrivere un numero di almeno 4 cifre')
    }

    for (let i = 0; i < userNumber.length; i++) {
        somma += parseInt(userNumber[i]);
    }
    media = somma / userNumber.length;

    console.log(somma , media);
})
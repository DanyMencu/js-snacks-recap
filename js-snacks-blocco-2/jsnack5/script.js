//Crea due array che hanno un numero di elementi diversi.
//Aggiungi elementi casuali all’array che ha meno elementi,
//fino a quando ne avrà tanti quanti l’altro.


const array1 = [1 , 2 , 3 , 4 , 5 , 6, 7 , 8 , 9];

const array2 = [1 , 2 , 3 , 4 , 5 , 6 ];

/* while (array1.length < array2.length) {
    array1.push(array2[Math.floor(Math.random() * array2.length)])
}
while (array2.length < array1.length) {
    array2.push(array1[Math.floor(Math.random() * array1.length)])
}
 */
while (array1.length !== array2.length) {
    if (array1.length < array2.length) {
        array1.push('a');
    } else {
        array2.push('b');
    }
}
console.log(array1);
console.log(array2);
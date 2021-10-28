//Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

const numInt = [4 , 2 , 6 , 4 , 8 , 6 , 4 , 8 , 2];

let numDispSomma = 0;

for (let i = 0; i < numInt.length; i++) {
    if (i % 2 !== 0) {

      let numeriDisp = numInt[i];
      numDispSomma += numeriDisp;

    }
  }
  console.log(numDispSomma);

// Soluzione trovata online, non so se vale ma sembra un comando più diretto e corretto
/* console.log(numInt.filter(function(el, ind){
    return ind % 2 === 0;
  })); */
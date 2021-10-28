//Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
//lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

const listName = ['Daniele', 'Giovanni', 'Paolo', 'Luca', 'Alex', 'Mario', 'Anna', 'Paola', 'Monica', 'Giorgia', 'Brando'];
console.log(listName);
const listLastname = ['Menculini', 'Rossi', 'Bianchi', 'Verdi', 'Gialli', 'Potenza', 'Power', 'Lazzarin', 'Borghesi', 'Tauros','Gozzilla'];
console.log(listLastname);

const invitatedList = [];

for (let i = 0; i < 3; i++) {
    const randomInvitated = (listName[Math.floor(Math.random() * listName.length)] + ' ' + listLastname[Math.floor(Math.random() * listName.length)]);

    invitatedList.push(randomInvitated)
}
console.log('La lista degli invitati è:' + invitatedList);
// scegliamo pari o dispari 
const choices = ['pari', 'dispari'];

let choice;

do {

    choice = prompt('Scegli pari o dispari');

} while (!choices.includes(choice));

console.log('La mia scelta:', choice);

// scegliamo un numero tra 1 e 5 
const numbers = [1, 2, 3, 4, 5];

let myNumber;

do {

    myNumber = parseInt(prompt('Scegli un numero tra 1 e 5'));

} while (!numbers.includes(myNumber));

console.log('Il mio numero:', myNumber);

// generiamo un numero random da 1 a 5 per il computer
function randomNum() {

    let pcNumber = Math.floor(Math.random() * 5) + 1;

    return pcNumber;

};

let ranNum = randomNum();

console.log('Il numero del computer è:', ranNum);

// sommiamo i risultati 
const results = myNumber + ranNum;

console.log('Il risultato è:', results);

// vinci o perdi
if (results % 2 === 0 && choice == 'pari') {

    console.log('Hai vinto!');

} else if (results % 2 === 1 && choice == 'dispari') {

    console.log('Hai vinto!');

} else {

    console.log('Hai perso!')

}

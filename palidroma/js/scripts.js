// parola da inserire
const myWord = prompt('Verifica se la parola è Palindroma');

console.log('Parola inserita:', myWord);

// funzione
function verifyWord (myWord) {

    let invertedWord = myWord.split('').reverse().join('');

    console.log(invertedWord);

    return myWord === invertedWord;

};

// condizione
if (verifyWord (myWord)) {

    alert('La parola inserita è Palindroma');

} else {

    alert('La parola inserita NON è Palindroma');

};
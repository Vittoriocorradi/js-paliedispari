'use strict';


// FUNZIONI

// Funzione numero casuale
function randomNumber(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Funzione numero pari
function isEven(inputNumber) {
    let result = false;
    if (inputNumber % 2 === 0) {
        result = true;
    }
    
return result;
}

let evenOdd = prompt('Inserisci "pari" o "dispari');

// Condizione di verifica
while (evenOdd !== 'pari' && evenOdd !== 'dispari') {
    alert('Scrivere o "pari" o "dispari"!');
    evenOdd = prompt('Inserisci "pari" o "dispari"');
}

// Input giocatore
let playerNumber = Number(prompt('Inserisci un numero intero da 1 a 5'));
alert(`Il tuo numero è ${playerNumber}`);
// Numero casuale computer
const computerNumber = randomNumber(1,5);
alert(`Il numero del computer è ${computerNumber}`);
// Somma dei due numeri
const sum = playerNumber + computerNumber;
alert(`La somma del tuo numero e quello del computer è ${sum}`);

// Condizioni di vittoria del giocatore
if ((evenOdd === 'pari' && isEven(sum) === true) || (evenOdd ==='dispari' && isEven(sum) === false)) {
    alert(`Contratulazioni! il totale del numero è ${evenOdd}, hai vinto la partita!`);
} else {
    alert(`Peccato! Hai perso la partita.`);
}


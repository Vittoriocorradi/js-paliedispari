'use strict'

// FUNZIONE

function isPalindrome(text) {
    
    // Variabili risultato e contatore
    let result = true;
    let i = 0;

    // Ciclo While
    while (i < text.length) {
        // Lettera dalla prima all'ultima
        const foreLetter = text[i];
        // Lettera dall'ultima alla prima
        const backLetter = text[text.length - 1 - i];

        // Condizione
        if (foreLetter !== backLetter) {
            result = false;
            i = text.length;
        }
        i++;
        
    }

    // Estrapolazione risultato finale
    return result;
}

// MAIN

// Variabile prompt
const word = prompt('Inserisci una parola, un testo o un numero');
// Variabile con return dalla funzione
const booleanResult = isPalindrome(word);

// Condizione vero/falso
if (booleanResult === true) {
    alert('Il testo inserito è palindromo');
} else {
    alert('Il testo inserito non è palindromo');
}
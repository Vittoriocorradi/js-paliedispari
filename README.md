ESERCIZIO PALINDROMI

FUNZIONE

Scrivo una funzione isPalindrome con argomento text

creo una variabile result con valore true per poi estrarre il risultato
creo una variabile i = 0 da usare come contatore per il ciclo while

FINCHE' i è minore della lunghezza della stringa dell'argomento

    creo una variabile foreLetter che avrà come valore la lettera indicizzata i dell'argomento
    creo una variabile backLetter che avrà come valore la lettere indicizzata text.length - 1 - i dell'argomento (lettere prese al contrario)

    SE foreLetter è diversa da backLetter

        assegno alla variabile result il valore falso
        assegno a i la lunghezza di text come valore per terminare il ciclo

    ALTRIMENTI

        incremento i di 1

Estrapolo dalla funzione il risultato.

ESERCIZIO

Creo una variabile word il cui valore sarà dato da un prompt
Creo una variabile booleanResult il cui valore sarà il risultato della funzione con argomento la variabile word

SE booleanResult è vera
    compare un alert con scritto che la parola è palindroma
ALTRIMENTI
    compare un alert con scritto che la parola non è palindroma



ESERCIZIO PARI O DISPARI

FUNZIONI

Funzione numero random intero

scrivo una funzione randomNumber che ha per argomenti min e max (valore minimo e valore massimo del numero casuale)
estrapolo il numero generato casualmente

Funzione pari o dispari

scrivo una funzione isEvenOdd che ha per argomento un numero
creo una variabile result con valore falso come partenza
SE il numero diviso due dà resto zero
    assegno a result il valore vero
Estrapolo il risultato

ESERCIZIO

Creo una variabile evenOdd il cui valore è un prompt

FINCHE' il valore di evenOdd è diverso da "pari" o dispari"
    scrivo un alert che avverità l'utente di scrivere o "pari" o "dispari
    assegno a evenOdd un nuovo prompt

Creo una variabile playerNumber il cui valore è un prompt

FINCHE' il valore di playerNumber non è un numero intero tra uno e cinque compresi
    scrivo un alert che avvertirà all'utente di scrivere un numero intero da 1 a 5
    assegno a playerNumber un nuovo prompt

Scrivo un alert con il numero del giocatore

Creo una variabile computerNumber il cui valore sarà un numero da 1 a 5 dato dalla funzione randomNumber
Scrivo un alert con il numero del computer

Creo una variabile somma il cui valore è la somma di playerNumber e computerNumber
Scrivo un alert con la somma del numero del giocatore e del computer

SE il giocatore ha scelto pari E la variabile somma è pari (attraverso funzione isEven) OPPURE il giocatore ha scelto dispari E la variabile somma è dispari (attraverso la funzione isEven)
    Scrivo che il giocatore ha vinto la partita
ALTRIMENTI
    Scrivo che il giocatore ha perso la partita
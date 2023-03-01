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
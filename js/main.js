// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100,
//     ma che per i multipli di 3 stampi in console "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
// Per i numeri che sono sia multipli di 3 che di 5 stampi in console "FizzBuzz".
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro ?
//     Abbiamo visto qualcosa di particolare che possiamo usare ?
//         Consigli del giorno:
// 1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// BONUS 1:
// Crea un container nel DOM, aggiungendo(attraverso la funzione`append()`) un elemento html con il numero o la stringa corretta da mostrare.
//     BONUS 2:
// Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
// Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.


// Scrivi un programma che stampi in console i numeri da 1 a 100,

const listEl = document.getElementById("target");
// console.log(listEl);

// INIZIO CICLO PER STAMPARE DA 1 A 100
for (let i = 1; i <= 100; i++) {

    //AGGIUNGO LI (list item) CON CREATE ELEMENT 
    const listItemEl = document.createElement('li');
    listEl.append(listItemEl);
    // console.log(listItemEl);
    // listItemEl.classList.add('ciao')
    // listItemEl.classList.add('box');

    // Se divisibile per 3 e anche per 5
    if (i % 3 == 0 && i % 5 == 0) {
        listItemEl.classList.add('box', 'fizzbuzz');
        listItemEl.innerHTML = 'FizzBuzz';

        console.log('FizzBuzz');

        // Se è divisibile solo per 3 
    } else if (i % 3 == 0) {
        listItemEl.classList.add('box', 'buzz');
        listItemEl.innerHTML = 'Buzz';


        console.log('Buzz');

        // Se è divisibile solo per 5
    } else if
        (i % 5 == 0) {
        listItemEl.classList.add('box', 'fizz');
        listItemEl.innerHTML = 'Fizz';

        console.log('Fizz');

    } else {
        // Altrimenti stampa numero
        listItemEl.innerHTML = i;

        listItemEl.classList.add('box');

        console.log(i);
    }
}
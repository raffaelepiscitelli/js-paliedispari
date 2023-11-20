/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando un'altra funzione)
Dichiariamo chi ha vinto.*/


//Chiedo all'utente di scegliere pari o dispari e, tramite un prompt, di scegliere un numero da 1 a 5.
//Creo una funzione che generi un numero random sempre da 1 a 5.
//Sommo i 2 numeri.//
//Creo un'altra funzione che stabilisca se la somma ricavata sia pari o dispari.
// Dichiaro chi ha vinto.

let userNumber = parseInt(prompt("Scegli un numero pari o dispari da 1 a 5."));
console.log(userNumber);

function randomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

const randomNumberObtained = randomNumber();
console.log(randomNumberObtained);

const addNumbers = userNumber + randomNumberObtained;
console.log(addNumbers);

function oddOrEven (addNumbers){
    if (addNumbers % 2 === 0){
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(oddOrEven());






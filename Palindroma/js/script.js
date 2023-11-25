//Chiedo all'utente di inserire una parola tramite l'utilizzo del prompt.
const userWord = prompt('Type a word');

//Creo una funzione che prende come argomento una parola e restituisce la parola invertita. 
function getReversedWord(word){
    let reversedWord = '';

    //Creo un ciclo for che scorre la parola dalla fine all'inizio, aggiungendo i caratteri alla stringa della costante reverseWord.
    for (let i = word.length - 1; i >= 0; i--){
        reversedWord = reversedWord + word.charAt(i);
    }

    return reversedWord;
}

//Creo una funzione che prende una parola come argomento e restituisce true se la parola è un palindromo, false se non lo è.
function isPalindrome(word){
    let result = true;
    let index = 0;
    //Creo un ciclo while che compara i caratteri iniziali della parola con quelli finali. Se trova una differenza imposta il result su false e interrompe il ciclo.
    while ( index < Math.floor(word.length / 2) ){
        if ( word.charAt(index) !== word.charAt(word.length - 1 - index) ){
            result = false;
            index = word.length;
        }
        index++;
    }
    return result;
}

//Stampo il risultato della parola inserita dall'utente utilizzando la funzione isPalindrome. Se la parola è un palindromo, verrà stampato true, altrimenti verrà stampato false.
console.log(isPalindrome(userWord));
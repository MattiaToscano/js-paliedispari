
console.log('Esercizio 1');

//Chiediamo al cliente di inserire una parola.
let parola = prompt('Inserisci una parola');

//Creo funzione per capire se la parola è palindroma o no.
function palindroma(parola){
    let parolaInversa = parola.split('').reverse().join('');
    if(parola == parolaInversa){
        return 'La parola è palindroma';
    }else{
        return 'La parola non è palindroma';
    }
}
    //Stampo il risultato.
    console.log(palindroma(parola));

console.log('Esercizio 2 ');

//Chiediamo all'utente di inserire un numero pari o dispari e successivamente un numero da 1 a 5.
let pariDispari = prompt('Scegli tra pari o dispari');
let numeroUtente = parseInt(prompt('Scegli un numero da 1 a 5'));

//Creo funzione per generare un numero randomico da 1 a 5.
function numeroRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
    
}
//Credo variabile che somma il numero dell'utente e il numero randomico del PC.
let sum = numeroUtente + numeroRandom(1, 5);
//Credo funzione per capire se la somma è pari o dispari e stampo l'esito.
function risultato (sum){
    if(sum % 2 == 0 && pariDispari == 'pari'){
        return `Il numero è ${sum} hai vinto!`;
    }
    else if(sum % 2 != 0 && pariDispari == 'dispari'){
        return `Il numero è ${sum} hai perso,ritenta, sarai più fortunato.` ;
    }
    else{
        return `Il numero è ${sum} hai perso,ritenta, sarai più fortunato.` ;
    }
}

console.log(risultato(sum));

 







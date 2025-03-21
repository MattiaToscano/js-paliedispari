
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

function numeroRandom(min, max){

    return Math.floor(Math.random() * (max - min + 1) + min);
    let max = 5;
    let min = 1;
    
}







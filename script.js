
console.log('Esercizio 1');

//Chiediamo al cliente di inserire una parola
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

    console.log(palindroma(parola));





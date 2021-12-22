let array = [];
let arrayGiusto = [];
let numero;
let posizione;
let indovina;
let contatore = 0;
const totaleNumeri = 5;

while (array.length < totaleNumeri) {
    numero = Math.floor(Math.random() * 100 + 1);
    if (array.includes(numero)) {
        
    }else{
        array.push(numero);
    }
    
}
console.log(array);

let showArray = document.getElementById("array");
showArray.innerHTML = array;

var clock = setInterval(cancellaArray, 3000);
var clock2;

function cancellaArray() {
    let showArray = document.getElementById("array");
    showArray.innerHTML = arrayGiusto;

    clock2 = setInterval(indovinaNumeri, 1000);
    
}

function indovinaNumeri() {
    clearInterval(clock2);
    for (let i = 0; i < array.length; i++) {

        indovina = prompt("Inserisci il " + (i+1) + "° numero");
        if (array[i] == indovina) {
            arrayGiusto.push(indovina);
            contatore += 1;
        }
    }

    let showScritta = document.getElementById("scritta");

    showScritta.innerHTML = `Hai indovinato ${arrayGiusto.length} numeri`; 
    showArray.innerHTML = arrayGiusto;
    console.log(arrayGiusto);
    clearInterval(clock);
}
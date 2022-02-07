// Crezione numeri randomici

let container = document.getElementById('number-container');

let numberArray = [];

    while(numberArray.length < 5){

        let randomNumbers = getRandomNumber(1, 100);
        numberArray.push(randomNumbers);
            
        container.innerHTML = numberArray;
        console.log(numberArray);

    }
    
function getRandomNumber(min, max) {

    return Math.floor(Math.random() * (max - min +1)) + min;

}


// Creare funzione timer

let seconds = 30;
let clock = setInterval(memoryTimer, 1000);

function memoryTimer() {
    
    if (seconds == 0) {
        stopTimer();

        // Creare prompt dove digitare i numeri
        
        let memorizedNumbers = parseInt(prompt('Inserisci i numeri memorizzati:'));


        // Creare funzione per mettere a paragone i numeri

        numberArray;

        if (memorizedNumbers == numberArray) {
            alert('Hai indovinato!');
        } else {
            alert('Non scoraggiarti, allenati ancora!');
        };
        
    } else {
        seconds--;
    }
}
function stopTimer() {
    clearInterval(clock);
}





// Stampare il risultato con la quantità giusta di numeri indovinati
//  richiamo html
 const daysElement = document.getElementById ('days');
 const hoursElement = document.getElementById ('hours');
 const minutesElement = document.getElementById ('minutes');
 const secondsElement = document.getElementById ('seconds');


//! GET TIME CI DA NUMERO DI SECONDI DA 1970
// new Date(year, month, day, hours, minutes, seconds, milliseconds);
const newYearsEveDate = new Date( 2024, 0, 1, 0, 0, 0, 0);



const timer = setInterval( function(){
    // trovo la data di adesso. deve essere aggiornata
    const nowDate = new Date();
    // trovo la differenza con il giorno di oggi. otteniamo millisecondi e dobbiamo convertirli
    const dateDifference = newYearsEveDate.getTime() - nowDate.getTime();

    // come arrivo ai secondi di differenza? 
    secondsElement.innerHTML = Math.floor((dateDifference % (60 * 1000)) / 1000);
    minutesElement.innerHTML = Math.floor((dateDifference % (60 * 60 * 1000)) / (1000 * 60));
    hoursElement.innerHTML = Math.floor((dateDifference % (60 * 60 * 24 * 1000)) / (1000 * 60 * 60));
    daysElement.innerHTML = Math.floor((dateDifference / (60 * 60 * 24 * 1000))); 

    if (dateDifference <= 0){
        clearInterval (timer);
    }

}, 1000);



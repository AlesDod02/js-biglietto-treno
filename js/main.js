//chiedo all'utente quanti kilometri vuole percorrere ela sua età
let distance = parseInt(prompt("inserisci i kilometri da percorrere"));
let age = parseInt(prompt("inserisci la tua età"));










if (isNaN(distance) || isNaN(age)) {
    alert("non hai inserito numero")
        ;
}
else {

    //calcolo il prezzo del biglietto (0,21 al km)
    let ticketPrice = distance * 0.21
    

    // applico lo sconto in base alla età
    if (age < 18) {
        ticketPrice = ticketPrice * 0.8;
    }
    else if (age >= 65) {
        ticketPrice = ticketPrice * 0.6
            ;
    }
    let finalprice = ticketPrice.toFixed(2);

    console.log("il tuo prezzo è" + finalprice);
    document.getElementById("user_price").innerHTML = finalprice;
}





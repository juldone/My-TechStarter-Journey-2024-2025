//funktion = leitet eine Funktion in JS ein
function getAge() {
    //floor = macht aus kommazahlen Ganzezahöem indem
    // die Nachkommastelle gestrichen werden.
    // random = ermittelt eine Zufallszahl zwischen 0.0 und 0.99 (1).
    return Math.floor(Math.random() * 100);  
}

function checkAge() {
    // Holt sich den Wert aus der Funktion getAge()
    age = getAge();
    console.log('Dein Alter ist:' + age);

    switch (true) {
        case (age < 18):
        console.log(" Du bist minderjährig!");
        break;
        case(age >= 18):
        console.log(" Du bist Volljährig");
        case(age >= 67):
        break;
        default:
        console.log(" Du bist im Rentenalter ");

    
    }
}
checkAge();

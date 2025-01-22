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

    if (age < 18) {
        console.log("Du bist minderjährig")
    }    else if (age >= 67) {
        console.log("Du bist Rentnet")    
    }    else{
            console.log(" Du bist erwachsen!")
        }
    }

    
    
//Funktionsaifgruf ( Hiermit sehe die console.log-Befehle im Terminal!)
checkAge();


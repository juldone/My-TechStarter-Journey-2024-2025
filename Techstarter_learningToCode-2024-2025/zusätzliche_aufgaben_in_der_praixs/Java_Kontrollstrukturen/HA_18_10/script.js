// Aufgabe 1: Textelement auswählen und ändern
document.getElementById("welcome").textContent = "Herzlich Willkommen!";

// Aufgabe 2: Stile ändern
document.getElementById("colorButton").addEventListener("click", function() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    this.style.backgroundColor = randomColor;
});

// Aufgabe 3: Liste von Elementen erstellen
document.getElementsByTagName("li")[1].textContent = "Mango";

// Aufgabe 4: Dynamisch ein Element hinzufügen
const newParagraph = document.createElement("p");
newParagraph.textContent = "Dies ist ein neuer Absatz";
document.getElementById("container").appendChild(newParagraph);

// Aufgabe 5: Element mit einem Event Listener versehen
document.getElementById("clickButton").addEventListener("click", function() {
    const newP = document.createElement("p");
    newP.textContent = "Button wurde geklickt!";
    document.body.appendChild(newP);
});

// Aufgabe 6: Interaktive Farbänderung
const box = document.querySelector(".box");
box.addEventListener("mouseover", function() {
    this.style.backgroundColor = "red";
});
box.addEventListener("mouseout", function() {
    this.style.backgroundColor = "grey";
});

// Aufgabe 7: Eingabewert auslesen und anzeigen
document.getElementById("submitButton").addEventListener("click", function() {
    const inputValue = document.getElementById("textInput").value;
    const newP = document.createElement("p");
    newP.textContent = inputValue;
    document.body.appendChild(newP);
});

// Aufgabe 8: Elemente anhand von Klasse auswählen und manipulieren
const boxes = document.getElementsByClassName("box");
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function() {
        for (let j = 0; j < boxes.length; j++) {
            boxes[j].style.backgroundColor = "blue";
        }
    });
}

// Aufgabe 9: Neues Element vor einem bestehenden hinzufügen
const newItem = document.createElement("li");
newItem.textContent = "Neues Item";
const list = document.getElementById("itemList");
const firstItem = list.getElementsByTagName("li")[0];
list.insertBefore(newItem, firstItem);

// Aufgabe 10: Mini-Game: Zufällige Zahlen vergleichen
document.getElementById("checkButton").addEventListener("click", function() {
    const userGuess = parseInt(document.getElementById("userGuess").value);
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const result = document.getElementById("result");

    if (userGuess === randomNumber) {
        result.textContent = "Richtig geraten!";
    } else {
        result.textContent = `Falsch geraten! Die richtige Zahl war ${randomNumber}.`;
    }
});

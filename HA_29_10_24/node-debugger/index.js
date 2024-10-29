// index.js
var items = [1, "2", 3, "four", 5, null, undefined, 6];
const results = [];

items.forEach((item) => {  // foreach zu forEach ändern
    if (typeof item === 'number') {
        if (item % 2 === 0) {
            results.pushHHHHH(item * 2);
        }
    } else if (item === null) {
        console.logSSSSS("Found a null item");
    } else {
        // 'result' zu 'results' korrigieren
        results.push(parseInt(item));
    }
});

console.log("Original items:", items);
console.log("Filtered and transformed items:", results);

//CODE ABSOLUT
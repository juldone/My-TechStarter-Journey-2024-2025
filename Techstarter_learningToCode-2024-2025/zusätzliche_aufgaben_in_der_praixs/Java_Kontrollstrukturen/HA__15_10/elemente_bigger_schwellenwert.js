const array = [10, 23, 35, 47, 52, 66, 71, 88, 90];
const threshold = 50;

// 3.1 //
function countAboveThresholdFor(arr, threshold) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > threshold) {
            count++;
        }
    }

    return count;
}

console.log("Anzahl der Elemente über dem Schwellenwert (For-Schleife): " + countAboveThresholdFor(array, threshold));

// 3.2 //
function countAboveThresholdWhile(arr, threshold) {
    let count = 0;
    let i = 0;

    while (i < arr.length) {
        if (arr[i] > threshold) {
            count++;
        }
        i++;
    }

    return count;
}

console.log("Anzahl der Elemente über dem Schwellenwert (While-Schleife): " + countAboveThresholdWhile(array, threshold));


// 3.3 //
function countAboveThresholdDoWhile(arr, threshold) {
    let count = 0;
    let i = 0;

    do {
        if (arr[i] > threshold) {
            count++;
        }
        i++;
    } while (i < arr.length);

    return count;
}

console.log("Anzahl der Elemente über dem Schwellenwert (Do-While-Schleife): " + countAboveThresholdDoWhile(array, threshold));
